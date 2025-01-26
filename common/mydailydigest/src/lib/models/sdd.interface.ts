import { Timestamp } from "@angular/fire/firestore";

export interface ISpiritualDailyDigestUIState {
  topic: string;
  message: string;
  reference: string;
  verses: string;
  keyVerse: string;
  tags: string[];
  date: Date;
  imageUrl?: string;
  audioUrl?: string;
}

export interface ISpiritualDailyDigest extends Record<string, any> {
  id: string; //'2024-12-14'; //allow create only
  year: number;
  month: number;
  day: number;
  imageUrl?: string;
  tags: string[]; // ['faith', 'devotional', 'daily'];
  content: Content[];
  isPublished: boolean;
  isApproved: boolean;
  createdBy: string; //'content_creator_id';
  updatedBy?: string;
  createdAt: Date | Timestamp; //'2024-12-13T10:00:00Z'; // Timestamp when the content was created
  updatedAt?: Date | Timestamp; //'2024-12-13T12:00:00Z'; // Timestamp of the last update
}

export type Content = {
  language: Language;
  text: TextContent;
  audioUrl?: string;
};

export type Language = {
  code: string;
  label: string;
};

export type TextContent = {
  topic: string;
  message: string;
  bibleVerse: BibleVerseContent;
};

export type BibleVerseContent = {
  reference: string;
  verses: string;
  keyVerse: string;
};
