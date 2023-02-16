import { resolve } from 'path'
import { chromium } from 'playwright'
import type { BrowserContext } from 'playwright'
import { outputJSON, remove } from 'fs-extra'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cliprogress = require('cli-progress')

const api = 'http://www.zd9999.com/cy/'
const output = resolve(__dirname, '../db/idioms.json')
const progress = new cliprogress.SingleBar({
  format: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}',
})

const getIdiomsByPage = async (ctx: BrowserContext, page: number) => {
  const url = `${api}index_${page === 1 ? '' : page}.htm`
  const page_ = await ctx.newPage()
  await page_.goto(url)
  const idioms = await page_.locator('font[color="000000"]').allInnerTexts()
  idioms.forEach((idiom, i) => {
    if (idiom.includes('\n')) {
      idioms[i] = idiom.replace('\n', ',')
    }
  })

  return idioms
}

const start = async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  await page.goto(api)
  const str = await page.getByText('当前是').allInnerTexts()
  const totalPages = parseInt(str[0].split('/')[1])

  progress.start(totalPages, 0)

  const data = []
  for (let i = 1; i <= totalPages; i++) {
    const res = await getIdiomsByPage(ctx, i)
    data.push(...res)
    progress.increment()
  }

  progress.stop()

  await remove(output)
  await outputJSON(output, {
    idioms: data,
    lastUpdatedTime: Date.now(),
    source: api,
  })
}

start()
