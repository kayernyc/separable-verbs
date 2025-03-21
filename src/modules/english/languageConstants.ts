export type auxiliaryVerb = {
  citation: string;
  infinitive: string;
  perfect: string;
  thirdPerson: string;
  pastParticiple?: string;
  presentParticiple?: string;
};

export const Will = {
  citation: "will",
  infinitive: "going to",
  perfect: "would",
  thirdPerson: "will",
  pastParticiple: "will have",
};

export const May = {
  citation: "may",
  infinitive: "may",
  perfect: "might",
  thirdPerson: "may",
  pastParticiple: "may have",
};

export const Can = {
  citation: "can",
  infinitive: "be able",
  pastParticiple: "was able",
  presentParticiple: "able",
  perfect: "could have",
  thirdPerson: "can",
};

export const Shall = {
  citation: "shall",
  infinitive: "shall",
  perfect: "should",
  thirdPerson: "should",
  pastParticiple: "should have",
};

export const Must = {
  citation: "must",
  infinitive: "have to",
  perfect: "had to",
  thirdPerson: "must",
  pastParticiple: "must have",
};

export const Ought = {
  citation: "ought",
  infinitive: "have to",
  perfect: "had to",
  thirdPerson: "ought",
  pastParticiple: "ought to have",
};

export const Do = {
  citation: "do",
  infinitive: "do",
  perfect: "did",
  thirdPerson: "does",
};

export const modalMap: {
  [key: string]: auxiliaryVerb;
} = {
  will: Will,
  may: May,
  can: Can,
  shall: Shall,
  must: Must,
  ought: Ought,
  do: Do,
};

export const particles = [
  "about",
  "across",
  "against",
  "aground",
  "above",
  "after",
  "again",
  "aground",
  "along",
  "alongside",
  "apart",
  "around",
  "at",
  "away",
  "back",
  "before",
  "behind",
  "beyond",
  "by",
  "down",
  "during",
  "even",
  "for",
  "forward",
  "forth",
  "from",
  "into",
  "in",
  "halfway",
  "here",
  "home",
  "later",
  "near",
  "off",
  "on",
  "open",
  "out",
  "over",
  "past",
  "shut",
  "there",
  "thither",
  "through",
  "to",
  "together",
  "toward",
  "towards",
  "up",
  "up,",
  "upon",
  "upwards",
  "with",
  "way",
];
