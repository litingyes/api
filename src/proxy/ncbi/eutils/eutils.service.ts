import { Injectable } from '@nestjs/common'

@Injectable()
export class EutilsService {
  getEutils() {
    return 'This is a proxy for https://www.ncbi.nlm.nih.gov/books/NBK25497/'
  }

  getApiPrefix() {
    return 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils'
  }

  getDblist() {
    return [
      {
        label: 'BioProject',
        id: 'bioproject',
      },
      {
        label: 'BioSample',
        id: 'biosample',
      },
      {
        label: 'Books',
        id: 'books',
      },
      {
        label: 'Conserved Domains',
        id: 'cdd',
      },
      {
        label: 'dbGaP',
        id: 'gap',
      },
      {
        label: 'dbVar',
        id: 'dbvar',
      },
      {
        label: 'Gene',
        id: 'gene',
      },
      {
        label: 'Genome',
        id: 'genome',
      },
      {
        label: 'GEO Datasets',
        id: 'gds',
      },
      {
        label: 'GEO Profiles',
        id: 'geoprofiles',
      },
      {
        label: 'HomoloGene',
        id: 'homologene',
      },
      {
        label: 'MeSH',
        id: 'mesh',
      },
      {
        label: 'NCBI C++ Toolkit',
        id: 'toolkit',
      },
      {
        label: 'NLM Catalog',
        id: 'nlmcatalog',
      },
      {
        label: 'Nucleotide',
        id: 'nuccore',
      },
      {
        label: 'PopSet',
        id: 'popset',
      },
      {
        label: 'Probe',
        id: 'meprobesh',
      },
      {
        label: 'Protein',
        id: 'protein',
      },
      {
        label: 'Protein Clusters',
        id: 'proteinclusters',
      },
      {
        label: 'PubChem BioAssay',
        id: 'pcassay',
      },
      {
        label: 'PubChem Compound',
        id: 'pccompound',
      },
      {
        label: 'PubChem Substance',
        id: 'pcsubstance',
      },
      {
        label: 'PubMed',
        id: 'pubmed',
      },
      {
        label: 'PubMed Central',
        id: 'pmc',
      },
      {
        label: 'SNP',
        id: 'snp',
      },
      {
        label: 'SRA',
        id: 'sra',
      },
      {
        label: 'Structure',
        id: 'structure',
      },
      {
        label: 'Taxonomy',
        id: 'taxonomy',
      },
    ]
  }
}
