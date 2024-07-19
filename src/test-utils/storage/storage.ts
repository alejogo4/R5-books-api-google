import { RootState } from '@store/index'; // Ajusta la ruta según sea necesario
import { Books, ItemBook } from 'types/book';

export const mockBookDetail: ItemBook = {
  kind: 'book',
  id: '/works/OL25520448W',
  etag: '1795888484947329000',
  selfLink: 'https://openlibrary.org/works/OL25520448W',
  volumeInfo: {
    title: 'Javascript',
    authors: ['Andy Vickler'],
    publisher: 'Ladoo Publishing LLC',
    publishedDate: '2021',
    description: '',
    industryIdentifiers: [
      {
        type: 'ISBN_13',
        identifier: '9798718877632'
      },
      {
        type: 'ISBN_13',
        identifier: '9798714822940'
      },
      {
        type: 'ISBN_13',
        identifier: '9781955786225'
      },
      {
        type: 'ISBN_13',
        identifier: '1955786224'
      },
      {
        type: 'ISBN_13',
        identifier: '9798718946819'
      }
    ],
    readingModes: {
      text: true,
      image: false
    },
    pageCount: 240,
    printType: '',
    categories: ['Computers', 'Computer software'],
    averageRating: 4,
    ratingsCount: 1,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '4',
    panelizationSummary: {
      containsEpubBubbles: true,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: 'https://covers.openlibrary.org/b/id/13789638-S.jpg',
      thumbnail: 'https://covers.openlibrary.org/b/id/13789638-M.jpg'
    },
    language: 'eng',
    previewLink: 'https://openlibrary.org/works/OL25520448W/preview',
    infoLink: 'https://openlibrary.org/works/OL25520448W',
    canonicalVolumeLink: 'https://openlibrary.org/works/OL25520448W'
  },
  saleInfo: {
    country: 'US',
    saleability: 'FOR_SALE',
    isEbook: false,
    listPrice: {
      amount: 0,
      currencyCode: 'USD'
    },
    retailPrice: {
      amount: 0,
      currencyCode: 'USD'
    },
    buyLink: 'https://openlibrary.org/works/OL25520448W/buy',
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
    webReaderLink: 'https://openlibrary.org/works/OL25520448W/reader',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: true
  },
  searchInfo: {
    textSnippet: ''
  }
};

export const mockBooks: Books = {
  kind: '34D',
  totalItems: 1,
  items: [mockBookDetail]
};

const initialState = {
  books: mockBooks,
  bookDetail: mockBookDetail,
  loading: false,
  error: null
};

export const stateInitial: Partial<RootState> = {
  books: initialState,
  search: { term: '' },
  comments: {},
  user: {
    favoriteBooks: {}
  }
};
