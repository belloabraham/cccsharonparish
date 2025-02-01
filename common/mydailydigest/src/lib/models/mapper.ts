import {
  ISpiritualDailyDigest,
  ISpiritualDailyDigestTableUIState,
} from './sdd.interface';

export function contentsToTableUIState(
  contents: ISpiritualDailyDigest[],
  languageCode: string
) {
  if (contents.length === 0) {
    return [];
  }
  const result: ISpiritualDailyDigestTableUIState[] = [];
  for (let index = 0; index < contents.length; index++) {
    const content = contents[index];
    const contentByLanguage = content.content.find(
      (c) => c.language.code === languageCode
    );
    const contentText = contentByLanguage?.text;
    const date = new Date(content.year, content.month - 1, content.day);

    const uiState: ISpiritualDailyDigestTableUIState = {
      sn: index + 1,
      topic: contentText?.topic || '',
      message: contentText?.message || '',
      reference: contentText?.bibleVerse?.reference || '',
      verses: contentText?.bibleVerse?.verses || '',
      keyVerse: contentText?.bibleVerse?.keyVerse || '',
      tags: content.tags,
      date: date,
      imageUrl: content.imageUrl,
      audioUrl: contentByLanguage?.audioUrl,
    };
    result.push(uiState);
  }

  return result;
}
