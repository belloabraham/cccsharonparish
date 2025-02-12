import { IAwaitingApprovalContentTableUIState } from "@cccsharonparish/mydailydigest";

const contentAwaitingApprovalTableStateKeys = {
  sn: 0,
  date: new Date(),
  topic: '',
  message: '',
  reference: '',
  verses: '',
  keyVerse: '',
  imagePath: '',
  audioUrl: '',
  tags: [],
  createdBy: '',
  updatedBy: '',
};

export const CONTENT_AWAITING_APPROVE_TABLE_COLUMNS = Object.keys(
  contentAwaitingApprovalTableStateKeys
) as (keyof (IAwaitingApprovalContentTableUIState & {
  sn: number;
  createdBy: string;
  updatedBy: string | null;
}))[];
