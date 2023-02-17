import { resolve } from 'path'
import { chromium } from 'playwright'
import type { BrowserContext } from 'playwright'
import { outputJSON, remove } from 'fs-extra'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cliprogress = require('cli-progress')

const api = 'http://xhy.5156edu.com/html2/'
const output = resolve(__dirname, '../db/allegories.json')
const progress = new cliprogress.SingleBar({
  format: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}',
})

const getAllegoriesByPage = async (ctx: BrowserContext, page: number) => {
  const url = `${api}xhy${page === 1 ? '' : `_${page}`}.html`
  const page_ = await ctx.newPage()
  await page_.goto(url)
  const allegories: Array<string | object> = await page_
    .locator('tr[bgcolor="#ffffff"]')
    .allInnerTexts()
  allegories.forEach((allegory, i) => {
    const [instro, backing] = (allegory as string).split('\t')
    allegories[i] = {
      instro: instro.trim(),
      backing: backing.split('；').map((str) => str.trim()),
    }
  })
  return allegories
}

const start = async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  await page.goto(`${api}xhy.html`)
  const str = await page.getByText('共有').allInnerTexts()
  const totalPages = parseInt(str[0].split(' ')[1])

  getAllegoriesByPage(ctx, 1)

  progress.start(totalPages, 0)

  const data = []
  for (let i = 1; i <= totalPages; i++) {
    const res = await getAllegoriesByPage(ctx, i)
    data.push(...res)
    progress.increment()
  }

  progress.stop()

  await remove(output)
  await outputJSON(output, {
    allegories: data,
    lastUpdatedTime: Date.now(),
    source: api,
  })
}

start()
