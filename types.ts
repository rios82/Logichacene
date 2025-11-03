
export type Language = 'fr' | 'de';

export interface Translations {
  header: {
    download: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ages: string;
    card1Title: string;
    card2Title: string;
    card3Title: string;
  };
  featureGrid: {
    title: string;
    logicMath: string;
    countries: string;
    wordGames: string;
    funTrivia: string;
    naturalWorld: string;
    creativity: string;
  };
  detailedFeatures: {
    feature1Title: string;
    feature1Subtitle: string;
    feature2Title: string;
    feature2Subtitle: string;
  };
  topics: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
    item7: string;
    item8: string;
    item9: string;
  };
  footer: {
    about: string;
    contact: string;
    privacy: string;
    rightsReserved: string;
  };
}
