import { of } from 'rxjs';
// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};
import 'jest-preset-angular/setup-jest';
jest.mock('@angular/fire/auth', () => ({
  signInWithEmailLink: jest.fn(() =>
    Promise.resolve({ user: { uid: 'test-uid', email: 'test@example.com' } })
  ),
  signOut: jest.fn(() => Promise.resolve()),
  sendSignInLinkToEmail: jest.fn(() => Promise.resolve()),
  authState: jest.fn(() => of(null)), // Mock observable
}));

// Mock Firestore APIs
export const FirestoreMock: any = {
  doc: jest.fn(() => ({
    set: jest.fn(() => Promise.resolve()),
    update: jest.fn(() => Promise.resolve()),
    delete: jest.fn(() => Promise.resolve()),
    get: jest.fn(() =>
      Promise.resolve({ exists: true, data: () => ({ mock: 'data' }) })
    ),
  })),

  collection: jest.fn(() => ({
    add: jest.fn(() => Promise.resolve({ id: 'mockId' })),
    doc: jest.fn(() => FirestoreMock.doc()),
    get: jest.fn(() =>
      Promise.resolve({
        docs: [{ id: 'mockId', data: () => ({ mock: 'data' }) }],
      })
    ),
  })),

  collectionGroup: jest.fn(() => ({
    get: jest.fn(() =>
      Promise.resolve({
        docs: [{ id: 'mockId', data: () => ({ mock: 'data' }) }],
      })
    ),
  })),

  getDoc: jest.fn(() =>
    Promise.resolve({ exists: true, data: () => ({ mock: 'data' }) })
  ),

  getDocs: jest.fn(() =>
    Promise.resolve({
      docs: [{ id: 'mockId', data: () => ({ mock: 'data' }) }],
    })
  ),

  onSnapshot: jest.fn((_ref, callback) => {
    callback({ exists: true, data: () => ({ mock: 'live data' }) });
    return jest.fn(); // Unsubscribe function
  }),

  setDoc: jest.fn(() => Promise.resolve()),

  updateDoc: jest.fn(() => Promise.resolve()),

  deleteDoc: jest.fn(() => Promise.resolve()),

  writeBatch: jest.fn(() => ({
    set: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    commit: jest.fn(() => Promise.resolve()),
  })),

  runTransaction: jest.fn((updateFunction) =>
    Promise.resolve(updateFunction({}))
  ),
};

jest.mock('@angular/fire/firestore', () => ({
  Timestamp: {
    now: jest.fn(() => new Date()),
    fromDate: jest.fn((date: Date) => ({
      toDate: () => date,
      seconds: Math.floor(date.getTime() / 1000),
      nanoseconds: (date.getTime() % 1000) * 1e6,
    })),
  },
  doc: FirestoreMock.doc,
  collection: FirestoreMock.collection,
  collectionGroup: FirestoreMock.collectionGroup,
  getDoc: FirestoreMock.getDoc,
  getDocs: FirestoreMock.getDocs,
  onSnapshot: FirestoreMock.onSnapshot,
  setDoc: FirestoreMock.setDoc,
  updateDoc: FirestoreMock.updateDoc,
  deleteDoc: FirestoreMock.deleteDoc,
  writeBatch: FirestoreMock.writeBatch,
  runTransaction: FirestoreMock.runTransaction,
}));

export const FirebaseStorageMock = {
  ref: jest.fn((storage, path) => ({ path })),
  deleteObject: jest.fn(() => Promise.resolve()),
  uploadBytes: jest.fn(() =>
    Promise.resolve({ ref: { fullPath: 'mock/path' } })
  ),
  getDownloadURL: jest.fn(() =>
    Promise.resolve('https://mockurl.com/file.jpg')
  ),
};

jest.mock('@angular/fire/storage', () => ({
  Storage: jest.fn(() => ({})),
  ref: FirebaseStorageMock.ref,
  deleteObject: FirebaseStorageMock.deleteObject,
  uploadBytes: FirebaseStorageMock.uploadBytes,
  getDownloadURL: FirebaseStorageMock.getDownloadURL,
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

