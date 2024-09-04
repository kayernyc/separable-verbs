/* spell-checker: disable */
export const inseperableRegex = /^(?<prefix>be|emp|ent|er|miß|ver|zer)(.*)/;

export const separableArray = [
  "ab",
  "an",
  "auf",
  "aus",
  "auseinander",
  "bei",
  "da",
  "dabei",
  "dar",
  "durch",
  "ein",
  "empor",
  "entgegen",
  "entlang",
  "entzwei",
  "fehl",
  "fern",
  "fest",
  "fort",
  "frei",
  "gegenüber",
  "gleich",
  "her",
  "herab",
  "heran",
  "herauf",
  "heraus",
  "herbei",
  "herein",
  "herüber",
  "herum",
  "herunter",
  "hinauf",
  "hinaus",
  "hinein",
  "hinweg",
  "heim",
  "hoch",
  "mit",
  "statt",
  "über",
  "um",
  "vor",
  "vorweg",
  "voraus",
  "vorbei",
  "vorüber",
  "voran",
  "vorangehen",
  "vorankommen",
  "weiter",
  "wieder",
  "zu",
  "zurecht",
  "zurück",
  "zusammen",
];
export type SeperableGermanParticles = (typeof separableArray)[number];
export const vowels = ["a", "e", "i", "o", "u", "ä", "ë", "ü"];

// taken from http://www.dartmouth.edu/~deutsch/Grammatik/Wortbildung/Separables.html
export const GermanParticleRules = {
  ab: {
    def: 'The prefix ‚ab’ usually - but not always - carries the notion of "away from". ‚ab’ means starting from a time in the future, and as a temporal preposition, it is dative.',
    question: "away from, starting from a time in the future",
  },
  an: {
    def: 'The prefix ‚an’ usually carries the meanings "at," "begin," "on," "onward," "to," or "toward". ‚an’ can mean to or on, onward, and can be accusative or dative.',
    question: "at, begin, on, onward, to, or toward",
  },
  auf: {
    def: "‚auf’ can mean on or upon, out, up, or un-, and can be accusative or dative.",
    question: "on, upon, out, up or un-",
  },
  aus: {
    def: '‚aus’ can mean from or out of, adds the meanings "out," "outward," "extended," "completely," "missing" and is dative.',
    question: "out, outward, extended, completely or missing",
  },
  auseinander: {
    def: "‚auseinander’ means apart, and is dative.",
    question: "apart",
  },
  bei: {
    def: "‚bei’ means along or with, it is dative.",
    question: "along or with",
  },
  da: {
    def: 'The prefixes ‚da’ and "dabei" mean "there" — "dabei" has the sense of staying with something that is going on',
    question: "there",
  },
  dabei: {
    def: 'The prefixes ‚da’ and "dabei" mean "there" — "dabei" has the sense of staying with something that is going on',
    question: "staying with something that is ongoing",
  },
  dar: {
    def: "‚dar’ is used when the main verb is done for others. It is not a particle that can be used on its own.",
    question: "for the benefit of others",
  },
  durch: {
    def: "‚durch’ has the meaning of entering a process with purpose and coming out the other end.",
    question: "successfully and intentionally going through a process",
  },
  ein: {
    def: "‚ein’ means in, into, inward, it is dative.",
    question: "in, into or inward",
  },
  empor: {
    def: '‚empor’ has the meaning of "upwards"',
    question: "upwards",
  },
  entgegen: {
    def: '‚entgegen’ means "toward" or "against"',
    question: "toward or against",
  },
  entlang: {
    def: '‚entlang-’ means "along". It can be affixed to just about any verb of motion.',
    question: "along",
  },
  entzwei: {
    def: '‚entzwei" means "asunder", "in half", "into two pieces"',
    question: "asunder or in half",
  },
  fehl: {
    def: '‚fehl-’ has the sense of "wrong" or "false".',
    question: "wrong or false",
  },
  fern: {
    def: '‚fern’ means "far" and corresponds to the English "tele". It more often affixed to nouns (e.g. "die Fernbahn [long-distance rail].',
    question: "far",
  },
  fest: {
    def: '‚fest’ means "firm" or "fixed". It often appears as an adverb or adjective (e.g. ‚fest glauben" [to believe firmly]). Not to be confused with "das Fest", as in "das Festessen" (banquet; feast).',
    question: "firm or fixed",
  },
  fort: {
    def: '‚fort’ means "away," "forth," or "onward" [as in "continuing"].',
    question: "away or onward in the sense of continuing",
  },
  frei: {
    def: '‚frei-’ means "free from" or "clear"',
    question: "free from or clear",
  },
  gegenüber: {
    def: '‚gegenüber’ means "across from," "opposite".',
    question: "across from or opposite",
  },
  gleich: {
    def: '‚gleich’ means "equal"',
    question: "equal or same",
  },
  her: {
    def: '‚her’ indicates motion toward the speaker, "hither". It can also combine with a number of other prefixes, making their direction more precise. Note that these prefixes do not necessarily replace prepositions.',
    question: "towards the speaker",
  },
  herab: {
    def: '‚herab’ means "down from" or "off from". Again, the direction is toward the point of view of the speaker',
    question: "away from the speaker",
  },
  heran: {
    def: '‚heran’ has the meaning of "approaching toward [the point of view of the speaker]".',
    question: "approaching, from the view of the speaker",
  },
  herauf: {
    def: '‚herauf’ means "up from," "out of" — toward the point of view of the speaker.',
    question: "going up from the point of view of the speaker",
  },
  heraus: {
    def: '‚heraus’ means "from," "out of" — toward the point of view of the speaker.',
    question: "from, going towards the speaker",
  },
  herbei: {
    def: '‚herbei’ means "(towards) over here".',
    question: "towards over here",
  },
  herein: {
    def: '‚herein’ means to "come in", i.e. into a real or metaphorical space that marks the speaker\'s point of orientation.',
    question: "come in",
  },
  herüber: {
    def: '‚herüber’ means "over in this direction".',
    question: "over in this direction",
  },
  herum: {
    def: '‚herum’ means "around." As with the English "around," it indicates either a specific direction or a lack of direction.',
    question:
      "around, either in the sense of going around or in an undefined direction",
  },
  herunter: {
    def: '‚herunter" means "down" or "downwards", "towards the speaker:".',
    question: "down or downwards towards the speaker",
  },
  hinauf: {
    def: "‚hinauf’ indicates an upward direction away from the speaker and can be affixed to any appropriate verb of motion.",
    question: "upward and away",
  },
  hinaus: {
    def: '‚hinaus’ means "from," "out of" — away from the speaker. It takes on a number of figurative meanings, as well.',
    question: "from, out of",
  },
  hinein: {
    def: '‚hinein’ means "into" — away from the speaker.',
    question: "into, and away from the speaker",
  },
  hinweg: {
    def: '‚hinweg’ has the sense of "beyond" or "past".',
    question: "beyond or past a location",
  },
  heim: {
    def: '‚heim’ means "(to) home"',
    question: "to home",
  },
  hoch: {
    def: "‚hoch’ when affixed to a verb, indicates an upward motion or position.",
    question: "upward",
  },
  mit: {
    def: "‚mit’ means with, and is dative.",
    question: "with",
  },
  statt: {
    def: "‚statt’ does not have a specific meaning as a prefix and appears in just two verbs: stattfinden and stattgeben",
    question: "",
  },
  über: {
    def: "‚über’ means over, and can be accusative or dative.",
    question: "over, or about",
  },
  um: {
    def: '‚um’ can carry a variety of meanings including "around," "down," and "over." It also can denote substantial sorts of change.',
    question: "around, down or over, or substantial change",
  },
  vor: {
    def: '‚vor’ means "before," "forward," "pre-," and "pro", and as a temporal preposition, it is dative.',
    question: "before, forward",
  },
  vorweg: {
    def: '‚vorweg’ means "in anticipation," "pre-emptively".',
    question: "in anticipation",
  },
  voraus: {
    def: '‚voraus’ means "in advance"',
    question: "in advance",
  },
  vorbei: {
    def: '‚vorbei’ means "past"',
    question: "past, in the past",
  },
  vorüber: {
    def: '‚vorüber’ means "past" or "by"',
    question: "past or by",
  },
  voran: {
    def: '‚voran’ means "ahead."',
    question: "ahead",
  },
  vorangehen: {
    def: '‚vorangehen’ means "to go ahead".',
    question: "to go ahead",
  },
  vorankommen: {
    def: '‚vorankommen’ means "to make progress".',
    question: "to make progress",
  },
  weiter: {
    def: '‚weiter’ means "further", see also "fort"',
    question: "further",
  },
  wieder: {
    def: '‚wieder’ means "again"',
    question: "again",
  },
  wider: {
    def: '‚wider’ means "against"',
    question: "against",
  },
  zu: {
    def: '‚zu’ means "closed," "to," "towards," "upon" and is dative.',
    question: "closed, to, towards, upon",
  },
  zurecht: {
    def: '‚zurect’ conveys the idea of "correct," "proper."',
    question: "correct, proper",
  },
  zurück: {
    def: '‚zurück’ means "back," or "re-do"',
    question: "back or to repeat",
  },
  zusammen: {
    def: '‚zusammen’ means "together"',
    question: "together",
  },
};
