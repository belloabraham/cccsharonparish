import { of } from 'rxjs';

export const mockUserDataStore = {
  user: jest.fn(() => ({ userType: 'Admin' })),
};
export const mockContentStore = {
  getContentsAwaitingApproval: jest.fn(() => of([])),
  contentAwaitingApproval: jest.fn(() => []),
  approvedContent: jest.fn(() => []),
  getApprovedContents: jest.fn(() => of([])),
};

export const mockEditorsStore = {
  getEditors: jest.fn(() => of([])),
  editors: jest.fn(() => []),
};
