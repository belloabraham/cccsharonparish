export interface ISpiritualDailyDigest extends Record<string, any> {
  id: string; //'2024-12-14'; //allow create only
  year: number;
  day: number;
  imageUrl: string;
  tags: string[]; // ['faith', 'devotional', 'daily'];
  content: Content[];
  isPublished: boolean;
  createdBy: string; //'content_creator_id';
  updatedBy: string;
  createdAt: Date; //'2024-12-13T10:00:00Z'; // Timestamp when the content was created
  updatedAt: Date; //'2024-12-13T12:00:00Z'; // Timestamp of the last update
}

type Content = {
  language: Language;
  text: TextContent;
  audioUrl: string;
};

export type Language = {
  code: string;
  label: string;
};

type TextContent = {
  topic: string;
  message: string;
  bibleVerse: BibleVerseContent;
};

type BibleVerseContent = {
  reference: string;
  verses: string;
  keyVerse: string;
};
