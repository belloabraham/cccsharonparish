import { of } from 'rxjs';

export const mockUserDataStore = {
  user: jest.fn(() => ({ userType: 'Admin' })),
};
export const mockContentStore = {
  getContentsAwaitingApproval: jest.fn(() => of([])),
  contentAwaitingApproval: jest.fn(() => []),
  approvedContent: jest.fn(() => []),
  getApprovedContents: jest.fn(() => of([])),
  publishedContentYears: jest.fn(() => []),
};

export const mockPublishedContentStore = {
  publishedContentYears: jest.fn(() => []),
};

export const mockEditorsStore = {
  getEditors: jest.fn(() => of([])),
  editors: jest.fn(() => []),
};

export const mockDashboardStore = {
  getEditors: jest.fn(() => of([])),
  editors: jest.fn(() => []),
  supportedLanguages: jest.fn(() => ({
    languages: [{ countryCode: 'US', name: 'English' }],
  })),
};
