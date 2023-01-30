import { Injectable } from '@nestjs/common';

@Injectable()
export class EutilsService {
  getEutils() {
    return 'This is a proxy for https://www.ncbi.nlm.nih.gov/books/NBK25497/';
  }

  getApiPrefix() {
    return 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
  }
}
