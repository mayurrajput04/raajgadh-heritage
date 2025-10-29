export interface TimelineEvent {
  year: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image?: string;
}

export interface FortLocation {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  position: [number, number, number];
  image?: string;
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    titleEn: string;
    subtitleEn: string;
  };
  story: {
    title: string;
    titleEn: string;
    paragraphs: Array<{ mr: string; en: string }>;
  };
  legacy: {
    title: string;
    titleEn: string;
    quotes: Array<{ mr: string; en: string; author: string }>;
  };
  explore: {
    title: string;
    titleEn: string;
  };
  visit: {
    title: string;
    titleEn: string;
    info: Array<{ label: string; labelEn: string; value: string; valueEn: string }>;
  };
}

export type Language = 'mr' | 'en';