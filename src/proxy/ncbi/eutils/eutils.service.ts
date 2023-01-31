import { Injectable } from '@nestjs/common';
import { XMLParser } from 'fast-xml-parser';

@Injectable()
export class EutilsService {
  getEutils() {
    return 'This is a proxy for https://www.ncbi.nlm.nih.gov/books/NBK25497/';
  }

  getApiPrefix() {
    return 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
  }

  parserXML(xml: string) {
    const parser = new XMLParser();
    return parser.parse(xml);
  }
}
