import { Books, ItemBook } from './book';

export interface BooksResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: DocsItem[];
}

export interface DocsItem {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  cover_i: number;
  ddc: string[];
  ebook_access: string;
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  first_publish_year: number;
  first_sentence: string[];
  format: string[];
  has_fulltext: boolean;
  ia: string[];
  ia_collection: string[];
  ia_collection_s: string;
  isbn: string[];
  key: string;
  language: string[];
  last_modified_i: number;
  lcc: string[];
  lccn: string[];
  lending_edition_s: string;
  lending_identifier_s: string;
  number_of_pages_median: number;
  oclc: string[];
  osp_count: number;
  printdisabled_s: string;
  public_scan_b: boolean;
  publish_date: string[];
  publish_place: string[];
  publish_year: number[];
  publisher: string[];
  seed: string[];
  subtitle: string;
  title: string;
  title_suggest: string;
  title_sort: string;
  type: string;
  id_goodreads: string[];
  id_librarything: string[];
  subject: string[];
  ia_loaded_id: string[];
  ia_box_id: string[];
  ratings_average: number;
  ratings_sortable: number;
  ratings_count: number;
  ratings_count_1: number;
  ratings_count_2: number;
  ratings_count_3: number;
  ratings_count_4: number;
  ratings_count_5: number;
  readinglog_count: number;
  want_to_read_count: number;
  currently_reading_count: number;
  already_read_count: number;
  publisher_facet: string[];
  subject_facet: string[];
  _version_: number;
  lcc_sort: string;
  author_facet: string[];
  subject_key: string[];
  ddc_sort: string;
}

const mapToItemBook = (docsItem: DocsItem): ItemBook => ({
  kind: 'book',
  id: docsItem.key,
  etag: docsItem._version_.toString(),
  selfLink: `https://openlibrary.org${docsItem.key}`,
  volumeInfo: {
    title: docsItem.title,
    authors: docsItem.author_name,
    publisher: docsItem.publisher && docsItem.publisher[0],
    publishedDate: docsItem.publish_date && docsItem.publish_date[0],
    description: docsItem.first_sentence
      ? docsItem.first_sentence.join(' ')
      : '',
    industryIdentifiers: docsItem.isbn && docsItem.isbn.map(isbn => ({
      type: 'ISBN_13',
      identifier: isbn
    })),
    readingModes: {
      text: true,
      image: false
    },
    pageCount: docsItem.number_of_pages_median,
    printType: docsItem.format ? docsItem.format[0] : '',
    categories: docsItem.subject,
    averageRating: docsItem.ratings_average,
    ratingsCount: docsItem.ratings_count,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: docsItem.edition_count.toString(),
    panelizationSummary: {
      containsEpubBubbles: true,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: `https://covers.openlibrary.org/b/id/${docsItem.cover_i}-S.jpg`,
      thumbnail: `https://covers.openlibrary.org/b/id/${docsItem.cover_i}-M.jpg`
    },
    language: docsItem.language ? docsItem.language[0]: '',
    previewLink: `https://openlibrary.org${docsItem.key}/preview`,
    infoLink: `https://openlibrary.org${docsItem.key}`,
    canonicalVolumeLink: `https://openlibrary.org${docsItem.key}`,
    subtitle: docsItem.subtitle
  },
  saleInfo: {
    country: 'US',
    saleability: 'FOR_SALE',
    isEbook: docsItem.ebook_count_i > 0,
    listPrice: {
      amount: 0,
      currencyCode: 'USD'
    },
    retailPrice: {
      amount: 0,
      currencyCode: 'USD'
    },
    buyLink: `https://openlibrary.org${docsItem.key}/buy`,
    offers: []
  },
  accessInfo: {
    country: 'US',
    viewability: 'PARTIAL',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: {
      isAvailable: true
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: `https://openlibrary.org${docsItem.key}/reader`,
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: true
  },
  searchInfo: {
    textSnippet: ''
  }
});

const mapBooksResponse = (response: BooksResponse): Books => ({
  kind: 'books#volumeList',
  totalItems: response.numFound,
  items: response.docs.map(mapToItemBook)
});

export { mapBooksResponse };
