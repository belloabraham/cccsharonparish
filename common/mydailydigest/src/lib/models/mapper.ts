import {
  Content,
  ENGLISH_LANG_CODE,
  IAwaitingApprovalContentTableUIState,
  ISpiritualDailyDigest,
  ISpiritualDailyDigestTableUIState,
  ISpiritualDailyDigestTranslateUIState,
  LanguageContent,
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
    const contentByLanguage = content.contents.find(
      (c) => c.language.code === languageCode
    );
    const contentText = contentByLanguage?.text;
    const date = new Date(content.year, content.month - 1, content.day);

    const uiState: ISpiritualDailyDigestTableUIState = {
      id: content.id,
      sn: index + 1,
      topic: contentText?.topic || '',
      message: contentText?.message || '',
      reference: contentText?.bibleVerse?.reference || '',
      verses: contentText?.bibleVerse?.verses || '',
      keyVerse: contentText?.bibleVerse?.keyVerse || '',
      tags: content.tags,
      date: date,
      imagePath: content.imagePath,
      audioUrl: contentByLanguage?.audioUrl || null,
      supplication: contentText?.supplication || '',
      reflection: contentText?.reflection || '',
      isAwaitingApproval: content.isAwaitingApproval,
    };
    result.push(uiState);
  }

  return result;
}

export function contentsToAwaitingApprovalTableUIState(
  contents: ISpiritualDailyDigest[],
  languageCode: string
) {
  if (contents.length === 0) {
    return [];
  }
  const result: IAwaitingApprovalContentTableUIState[] = [];
  for (let index = 0; index < contents.length; index++) {
    const content = contents[index];
    const contentByLanguage = content.contents.find(
      (c) => c.language.code === languageCode
    );
    const contentText = contentByLanguage?.text;
    const date = new Date(content.year, content.month - 1, content.day);

    const uiState: IAwaitingApprovalContentTableUIState = {
      id: content.id,
      sn: index + 1,
      topic: contentText?.topic || '',
      message: contentText?.message || '',
      reference: contentText?.bibleVerse?.reference || '',
      verses: contentText?.bibleVerse?.verses || '',
      keyVerse: contentText?.bibleVerse?.keyVerse || '',
      tags: content.tags,
      date: date,
      imagePath: content.imagePath,
      audioUrl: contentByLanguage?.audioUrl || null,
      createdBy: content.createdBy,
      updatedBy: content.updatedBy,
      supplication: contentText?.supplication || '',
      reflection: contentText?.reflection || '',
      isAwaitingApproval: content.isAwaitingApproval,
    };
    result.push(uiState);
  }

  return result;
}

export function contentsToTranslateTableUIState(
  contents: ISpiritualDailyDigest[],
  languageCode: string
) {
  if (contents.length === 0) {
    return [];
  }
  const result: ISpiritualDailyDigestTranslateUIState[] = [];
  for (let index = 0; index < contents.length; index++) {
    const content = contents[index];
    const languageContent = content.contents.find(
      (c) => c.language.code === languageCode
    );
    const englishContent = content.contents.find(
      (c) => c.language.code === ENGLISH_LANG_CODE
    );

    const date = new Date(content.year, content.month - 1, content.day);
    const uiState: ISpiritualDailyDigestTranslateUIState = {
      id: content.id,
      sn: index + 1,
      tags: content.tags,
      date: date,
      imagePath: content.imagePath,
      languageContent: getLanguageContent(languageContent),
      englishContent: getLanguageContent(englishContent)!,
    };
    result.push(uiState);
  }

  return result;
}

export function getLanguageContent(content?: Content): LanguageContent {
  const textContent = content?.text;
  return {
    topic: textContent?.topic || '',
    reference: textContent?.bibleVerse?.reference || '',
    verses: textContent?.bibleVerse?.verses || '',
    keyVerse: textContent?.bibleVerse?.keyVerse || '',
    message: textContent?.message || '',
    audioUrl: content?.audioUrl || null,
    supplication: textContent?.supplication || '',
    reflection: textContent?.reflection || '',
  };
}
