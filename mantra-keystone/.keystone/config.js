"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schemas/Album.ts
var import_fields2 = require("@keystone-6/core/fields");

// schemas/helpers/fields.ts
var import_fields = require("@keystone-6/core/fields");
var groupSelect = (0, import_fields.select)({
  validation: { isRequired: true },
  isFilterable: true,
  isIndexed: true,
  options: [{
    value: "mantra" /* Mantra */,
    label: "Mantra"
  }, {
    value: "recap" /* Recap */,
    label: "Recap"
  }, {
    value: "mantrayouth" /* MantraYouth */,
    label: "Mantra Youth"
  }]
});

// schemas/helpers/matchers.ts
var urlMatch = {
  regex: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  explanation: "Must be a valid url"
};

// schemas/helpers/readonlyList.ts
var import_core = require("@keystone-6/core");
var isLoggedIn = ({ session: session2 }) => !!session2?.data;
var readonlyList = (opts) => {
  const access = {
    operation: {
      create: isLoggedIn,
      update: isLoggedIn,
      delete: isLoggedIn
    }
  };
  return (0, import_core.list)({
    ...opts,
    access
  });
};

// schemas/Album.ts
var AlbumSchema = readonlyList({
  fields: {
    createdAt: (0, import_fields2.timestamp)({ isOrderable: true, db: { map: "created_at" }, defaultValue: { kind: "now" } }),
    group: groupSelect,
    title: (0, import_fields2.text)({ validation: { isRequired: true } }),
    host: (0, import_fields2.select)({
      validation: { isRequired: true },
      options: [{
        value: "bandcamp" /* Bandcamp */,
        label: "Bandcamp"
      }, {
        value: "spotify" /* Spotify */,
        label: "Spotify"
      }, {
        value: "apple" /* Apple */,
        label: "Apple Music"
      }]
    }),
    embed: (0, import_fields2.text)({
      validation: {
        isRequired: true,
        match: urlMatch
      }
    }),
    link: (0, import_fields2.text)({
      validation: {
        isRequired: true,
        match: urlMatch
      }
    })
  }
});

// schemas/Article.ts
var import_fields4 = require("@keystone-6/core/fields");
var ArticleSchema = readonlyList({
  fields: {
    createdAt: (0, import_fields4.timestamp)({ isOrderable: true, db: { map: "created_at" }, defaultValue: { kind: "now" } }),
    group: groupSelect,
    title: (0, import_fields4.text)({ validation: { isRequired: true } }),
    publication: (0, import_fields4.text)({ validation: { isRequired: true } }),
    pullQuote: (0, import_fields4.text)({ validation: { isRequired: true }, db: { map: "pull_quote" } }),
    author: (0, import_fields4.text)({ validation: { isRequired: true } }),
    link: (0, import_fields4.text)({
      validation: {
        isRequired: true,
        match: urlMatch
      }
    })
  }
});

// schemas/Concert.ts
var import_fields6 = require("@keystone-6/core/fields");
var LocationSchema = readonlyList({
  fields: {
    venue: (0, import_fields6.text)(),
    city: (0, import_fields6.text)(),
    support: (0, import_fields6.text)()
  },
  ui: {
    labelField: "venue",
    listView: {
      initialColumns: ["venue", "city"]
    }
  }
});
var PieceSchema = readonlyList({
  fields: {
    composer: (0, import_fields6.text)(),
    title: (0, import_fields6.text)(),
    description: (0, import_fields6.text)(),
    support: (0, import_fields6.text)()
  },
  ui: {
    listView: {
      initialColumns: ["title", "composer", "description"]
    }
  }
});
var ConcertSchema = readonlyList({
  fields: {
    createdAt: (0, import_fields6.timestamp)({ isOrderable: true, db: { map: "created_at" }, defaultValue: { kind: "now" } }),
    dateFrom: (0, import_fields6.timestamp)({ isOrderable: true, isFilterable: true, isIndexed: true }),
    dateTo: (0, import_fields6.timestamp)({ isOrderable: true, isFilterable: true, isIndexed: true }),
    group: groupSelect,
    location: (0, import_fields6.relationship)({ ref: "Location", many: false }),
    program: (0, import_fields6.relationship)({ ref: "Piece", many: true })
  },
  ui: {
    listView: {
      initialColumns: ["dateFrom", "dateTo", "group", "location", "program"],
      initialSort: { field: "dateFrom", direction: "DESC" }
    }
  }
});

// schemas/Team.ts
var import_fields8 = require("@keystone-6/core/fields");
var TeamMemberRoleSchema = readonlyList({
  fields: {
    title: (0, import_fields8.text)({ validation: { isRequired: true } })
  }
});
var TeamMemberSchema = readonlyList({
  fields: {
    name: (0, import_fields8.text)({ validation: { isRequired: true } }),
    team: (0, import_fields8.relationship)({ ref: "Team.members", many: false }),
    roles: (0, import_fields8.relationship)({ ref: "TeamMemberRole", many: true })
  }
});
var TeamSchema = readonlyList({
  fields: {
    createdAt: (0, import_fields8.timestamp)({ isOrderable: true, db: { map: "created_at" }, defaultValue: { kind: "now" } }),
    title: (0, import_fields8.text)({ validation: { isRequired: true } }),
    members: (0, import_fields8.relationship)({ ref: "TeamMember.team", many: true })
  }
});

// schemas/User.ts
var import_fields9 = require("@keystone-6/core/fields");
var UserSchema = readonlyList({
  fields: {
    name: (0, import_fields9.text)({ validation: { isRequired: true } }),
    email: (0, import_fields9.text)({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true
    }),
    password: (0, import_fields9.password)({ validation: { isRequired: true } })
  }
});

// schemas/Video.ts
var import_fields10 = require("@keystone-6/core/fields");
var VideoSchema = readonlyList({
  fields: {
    createdAt: (0, import_fields10.timestamp)({ isOrderable: true, db: { map: "created_at" }, defaultValue: { kind: "now" } }),
    group: groupSelect,
    title: (0, import_fields10.text)({ validation: { isRequired: true } }),
    embed: (0, import_fields10.text)({
      validation: {
        isRequired: true,
        match: urlMatch
      }
    })
  }
});

// schemas/MissionStatement.ts
var import_fields_document = require("@keystone-6/fields-document");
var MissionStatementSchema = readonlyList({
  fields: {
    content: (0, import_fields_document.document)({
      formatting: true,
      dividers: true,
      links: true
    }),
    group: groupSelect
  }
});

// schemas/Program.ts
var import_fields13 = require("@keystone-6/core/fields");
var CollaboratorRoleSchema = readonlyList({
  fields: {
    title: (0, import_fields13.text)({ validation: { isRequired: true } })
  }
});
var CollaboratorSchema = readonlyList({
  fields: {
    name: (0, import_fields13.text)({ validation: { isRequired: true } }),
    role: (0, import_fields13.relationship)({ ref: "CollaboratorRole", many: false })
  }
});
var InstrumentationSchema = readonlyList({
  fields: {
    instruments: (0, import_fields13.text)({ validation: { isRequired: true } })
  }
});
var ProgramSchema = readonlyList({
  fields: {
    createdAt: (0, import_fields13.timestamp)({ isOrderable: true, db: { map: "created_at" }, defaultValue: { kind: "now" } }),
    group: groupSelect,
    title: (0, import_fields13.text)({ validation: { isRequired: true } }),
    durationInMinutes: (0, import_fields13.integer)(),
    instrumentations: (0, import_fields13.relationship)({ ref: "Instrumentation", many: true }),
    description: (0, import_fields13.text)({ validation: { isRequired: true } }),
    collaborators: (0, import_fields13.relationship)({ ref: "Collaborator", many: true }),
    link: (0, import_fields13.text)({
      validation: {
        isRequired: true,
        match: urlMatch
      }
    })
  }
});

// schema.ts
var lists = {
  User: UserSchema,
  Album: AlbumSchema,
  Article: ArticleSchema,
  Video: VideoSchema,
  Team: TeamSchema,
  TeamMember: TeamMemberSchema,
  TeamMemberRole: TeamMemberRoleSchema,
  Concert: ConcertSchema,
  Piece: PieceSchema,
  Location: LocationSchema,
  MissionStatement: MissionStatementSchema,
  Program: ProgramSchema,
  Instrumentation: InstrumentationSchema,
  CollaboratorRole: CollaboratorRoleSchema,
  Collaborator: CollaboratorSchema
};

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  if (false) {
    throw new Error(
      "The SESSION_SECRET environment variable must be set in production"
    );
  } else {
    sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
  }
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// seeds/index.ts
var import_lodash = require("lodash");

// seeds/data/albums.ts
var albumSeeds = [
  {
    group: "recap" /* Recap */,
    title: "Recap - Count to Five",
    embed: "https://open.spotify.com/embed/album/6hcfrg6RHrr4oL3JFSmsfq",
    host: "spotify" /* Spotify */,
    link: "https://open.spotify.com/album/6hcfrg6RHrr4oL3JFSmsfq"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Aaron Siegel - A Great Many",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=1614447228/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://aaronsiegel.bandcamp.com/album/science-is-only-a-sometimes-friend"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Matt Welch - And Here We Are",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=217435572/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://aaronsiegel.bandcamp.com/album/science-is-only-a-sometimes-friend"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Mathew Rosenblum - Lament/Witches' Sabbath",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=3658791005/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://newfocusrecordings.bandcamp.com/album/mathew-rosenblum-lament-witches-sabbath"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Timber Remixed",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=3231657953/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://michaelgordonmusic.bandcamp.com/album/timber-remixed"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Paula Matthusen - Pieces for People",
    embed: "https://embed.music.apple.com/us/album/matthusen-pieces-for-people/1048199904",
    host: "apple" /* Apple */,
    link: "https://itunes.apple.com/us/album/matthusen-pieces-for-people/id1048199904"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Aaron Siegel - Science is Only a Sometimes Fried",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=3976289249/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://aaronsiegel.bandcamp.com/album/science-is-only-a-sometimes-friend"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Daniel Wohl- Holographic",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=3638220828/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://danielwohl.bandcamp.com/album/holographic"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Xiu Xiu and Mantra Percussion - Extinction Meditation",
    embed: "https://bandcamp.com/EmbeddedPlayer/album=3404566084/size=large/bgcol=333333/linkcol=fe7eaf/minimal=true/transparent=true/",
    host: "bandcamp" /* Bandcamp */,
    link: "https://xiuxiu69.bandcamp.com/album/extinction-meditation-2"
  },
  {
    group: "mantra" /* Mantra */,
    title: "Michael Fiday - Same Rivers Different",
    embed: "https://open.spotify.com/embed/album/2xHilmkZlfV7KwvvwjcDdj",
    host: "spotify" /* Spotify */,
    link: "https://open.spotify.com/album/2xHilmkZlfV7KwvvwjcDdj"
  }
];

// seeds/data/articles.ts
var articleSeeds = [
  {
    publication: "NPR - All Things Considered",
    title: "A young, all-women ensemble upends the percussion paradigm",
    pullQuote: "These young women, and their new recording, represent nothing less than a paradigm shift in the field of percussion...",
    author: "Tom Huizenga",
    link: "https://www.npr.org/sections/deceptivecadence/2021/10/14/1045780878/a-young-all-women-ensemble-upends-the-percussion-paradigm",
    group: "recap" /* Recap */
  },
  {
    publication: "Which Sinfonia",
    title: "RECAP's Freshman Album Reminds Us We Are Listening",
    pullQuote: "Count to Five showcases not only the artistry of Arlene Acevedo, Alexis Carter, Tiahna Sterling, and Aline Vasquez but also exhibits their ability to use their medium as a way of reaching others.",
    author: "Lisa Atkinson",
    link: "https://www.whichsinfonia.com/recaps-freshman-album-reminds-us-we-are-listening/",
    group: "recap" /* Recap */
  },
  {
    publication: "The New York Times",
    title: "Timber at BOAC Marathon",
    pullQuote: "seductive and accessible... with steroidal energy",
    author: "Zachary Woolfe",
    link: "https://www.nytimes.com/2014/06/24/arts/music/the-bang-on-a-can-marathon-with-steroidal-energy.html",
    group: "mantra" /* Mantra */
  },
  {
    publication: "The New Yorker",
    title: "The Most Memorable Classical Performances",
    pullQuote: "...aural hypnosis",
    author: "Alex Ross",
    link: "https://www.newyorker.com/culture/culture-desk/ten-memorable-classical-performances-of-2012",
    group: "mantra" /* Mantra */
  },
  {
    publication: "NPR #NowPlaying",
    title: "Recap, 'Hedera'",
    pullQuote: "the music's tendrils slowly wrap themselves around the listener, warping time such that 20 minutes flies by like only a few",
    author: "Tom Huizenga",
    link: "https://www.npr.org/sections/now-playing/2021/10/05/1043321523/recap-hedera",
    group: "recap" /* Recap */
  },
  {
    publication: "TimeOut New York",
    title: "Top Ten Classical Performances",
    pullQuote: "...superhuman",
    author: "Steve Smith",
    link: "https://www.timeout.com/newyork/classical/the-best-and-worst-opera-and-classical-music-of-2012",
    group: "mantra" /* Mantra */
  },
  {
    publication: "Pitchfork",
    title: "Timber Remixed Review",
    pullQuote: "It carries some familiar drawbacks, but also some ingenious stretches.",
    author: "Seth Colter Walls",
    link: "https://pitchfork.com/reviews/albums/22501-michael-gordon-timber-remixed/",
    group: "mantra" /* Mantra */
  },
  {
    publication: "Stereophile",
    title: "A Modern Witches' Sabbath",
    pullQuote: "Violent, aggressive, and filled with color...",
    author: "Jason Victor Serinus",
    link: "https://www.stereophile.com/content/modern-witches-sabbath",
    group: "mantra" /* Mantra */
  },
  {
    publication: "Wall Street Journal",
    title: "'Count to Five' by Recap and 'Piano Music' by Satoko Fujii",
    pullQuote: "Women Turning Simple Sounds Into Sonic Experiments",
    author: "Allan Kozinn",
    link: "https://www.google.com/amp/s/www.wsj.com/amp/articles/count-to-five-recap-piano-music-satoko-fujii-gen-himmel-11632863124",
    group: "recap" /* Recap */
  },
  {
    publication: "New Sounds",
    title: "#4542, Songs Without Words",
    pullQuote: "these carefully designed crescendos of tom-tom drums and other percussion from Recap serve as a balance to the swirling and floating ooo's, then ahs and eventually ehs, creating a grounding sensation",
    author: "John Schaefer",
    link: "https://www.newsounds.org/story/4542-songs-without-words/",
    group: "recap" /* Recap */
  },
  {
    publication: "I Care If You Listen",
    title: "Recap's Debut Album \u201CCount to Five\u201D Builds Community Among Women",
    pullQuote: "What is heard in the music undeniably contributes to a sense of togetherness, and specifically belonging...",
    author: "Donna Lee Davidson",
    link: "https://icareifyoulisten.com/2021/09/recap-debut-album-count-to-five-builds-community-among-women/",
    group: "recap" /* Recap */
  }
];

// seeds/data/concerts.ts
var concertSeeds = {
  ["mantrayouth" /* MantraYouth */]: [
    {
      "year": "2017",
      "concerts": [
        {
          "date": "February 4",
          "location": {
            "venue": "Necessary Noise Festival",
            "city": "Rahway, NJ"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming pt. 1"
            }
          ]
        },
        {
          "date": "May 3",
          "location": {
            "venue": "Rahway High School",
            "city": "Rahway, NJ"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming pt. 1"
            },
            {
              "composer": "Daniel Levitan",
              "title": "Marimba Quartet"
            }
          ]
        },
        {
          "date": "May 5",
          "location": {
            "venue": "Randolph Day of Percussion",
            "city": "Randolph, NJ"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming pt. 1"
            },
            {
              "composer": "Daniel Levitan",
              "title": "Marimba Quartet"
            }
          ]
        },
        {
          "date": "May 9",
          "location": {
            "venue": "NJ Day of Percussion",
            "city": "Demarest, NJ"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming pt. 1"
            },
            {
              "composer": "Daniel Levitan",
              "title": "Marimba Quartet"
            }
          ]
        },
        {
          "date": "June 21",
          "location": {
            "venue": "Make Music NY Festival",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Angelica Negron, Miguel Bolivar, Christian Rodriguez & Lainie Fefferman",
              "title": "Concerto for Buildings III"
            }
          ]
        },
        {
          "date": "December 4",
          "location": {
            "venue": "Roulette Intermedium",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        }
      ]
    },
    {
      "year": "2018",
      "concerts": [
        {
          "date": "February 10",
          "location": {
            "venue": "Necessary Noise Festival",
            "city": "Rahway, NJ"
          },
          "program": []
        },
        {
          "date": "March 12",
          "location": {
            "venue": "Roulette Intermedium",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Sean Friar",
              "title": "Clunker Concerto"
            }
          ]
        },
        {
          "date": "May 4",
          "location": {
            "venue": "Randolph Day of Percussion",
            "city": "Randolph, NJ"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming"
            }
          ]
        },
        {
          "date": "May 9",
          "location": {
            "venue": "Rahway HS",
            "city": "Rahway, NJ"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming"
            }
          ]
        },
        {
          "date": "May 20",
          "location": {
            "venue": "New Music Gathering at Berklee College of Music",
            "city": "Boston, MA"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming"
            }
          ]
        },
        {
          "date": "May 24",
          "location": {
            "venue": "The Cell",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming"
            }
          ]
        }
      ]
    },
    {
      "year": "2019",
      "concerts": [
        {
          "date": "January 10",
          "location": {
            "venue": "Verona Day of Percussion",
            "city": "Verona, NJ"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            }
          ]
        },
        {
          "date": "January 20",
          "location": {
            "venue": "National Sawdust",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "Science is Only a Sometimes Friend"
            }
          ]
        },
        {
          "date": "February 9",
          "location": {
            "venue": "Necessary Noise Festival",
            "city": "Rahway, NJ"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            }
          ]
        },
        {
          "date": "February 17",
          "location": {
            "venue": "NYU Day of Percussion",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            }
          ]
        },
        {
          "date": "April 10",
          "location": {
            "venue": "MyCincinnati Youth Program",
            "city": "Cincinnati, OH"
          },
          "program": [
            {
              "composer": "",
              "title": "Workshop"
            }
          ]
        },
        {
          "date": "April 14",
          "location": {
            "venue": "MyCincinnati",
            "city": "Cincinnati, OH"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            },
            {
              "composer": "Ayanna Woods",
              "title": "TriplePoint"
            }
          ]
        },
        {
          "date": "May 8",
          "location": {
            "venue": "Rahway HS",
            "city": "Rahway, NJ"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            },
            {
              "composer": "Ayanna Woods",
              "title": "TriplePoint"
            }
          ]
        },
        {
          "date": "May 11",
          "location": {
            "venue": "Randolph Day of Percussion",
            "city": "Randolph, NJ"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            }
          ]
        },
        {
          "date": "September 22",
          "location": {
            "venue": "Carnegie Hall Family Day",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            }
          ]
        },
        {
          "date": "October 5",
          "location": {
            "venue": "Princeton UnRuly Sounds Festival",
            "city": "Princeton, NJ"
          },
          "program": [
            {
              "composer": "Angelica Negron",
              "title": "Count to Five"
            },
            {
              "composer": "Jenny Beck",
              "title": "by the time we look for it"
            }
          ]
        },
        {
          "date": "December 14",
          "location": {
            "venue": "Juilliard Percussion Festival",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Jenny Beck",
              "title": "by the time we look for it"
            }
          ]
        }
      ]
    },
    {
      "year": "2020",
      "concerts": [
        {
          "date": "February 8",
          "location": {
            "venue": "Necessary Noise Festival",
            "city": "Rahway, NJ"
          },
          "program": []
        },
        {
          "date": "April 25",
          "location": {
            "venue": "Look and Listen Festival (cancelled due to Covid)",
            "city": "New York, NY"
          },
          "program": []
        },
        {
          "date": "October 4",
          "location": {
            "venue": "Brooklyn Botanic Garden",
            "city": "Brooklen, NY"
          },
          "program": [
            {
              "title": "loved.",
              "composer": "Michael Gordon"
            }
          ]
        }
      ]
    },
    {
      "year": "2021",
      "concerts": [
        {
          "date": "February 18-20",
          "location": {
            "venue": "New Jersey Music Educators Association State Conference",
            "city": "Remote"
          },
          "program": []
        },
        {
          "date": "March 20",
          "location": {
            "venue": "Necessary Noise Festival Virtual Clinic",
            "city": "Remote"
          },
          "program": []
        },
        {
          "date": "April 24",
          "location": {
            "venue": "Necessary Noise Festival Virtual Livestream",
            "city": "Remote"
          },
          "program": []
        },
        {
          "date": "November",
          "location": {
            "venue": "Mantra Youth Percussion Open House",
            "city": "Rahway, NJ"
          },
          "program": []
        }
      ]
    }
  ],
  ["recap" /* Recap */]: [
    {
      "year": "2022",
      "concerts": [
        {
          "date": "Summer",
          "location": {
            "venue": "Beringia tour of Alaska",
            "city": "Alaska"
          },
          "program": []
        },
        {
          "date": "November",
          "location": {
            "venue": "PASIC session November presented by PAS Diversity Alliance",
            "city": "TBA"
          },
          "program": []
        }
      ]
    },
    {
      "year": "2021",
      "concerts": [
        {
          "date": "February 18-20",
          "location": {
            "venue": "New Jersey Music Educators Association State Conference",
            "city": "Remote"
          },
          "program": []
        },
        {
          "date": "April 24",
          "location": {
            "venue": "Necessary Noise Festival Virtual Livestream",
            "city": "Remote"
          },
          "program": []
        },
        {
          "date": "August 12-14",
          "location": {
            "venue": "HEADLINING the New Music Gathering",
            "city": "Minneapolis, MN"
          },
          "program": []
        },
        {
          "date": "September 29",
          "location": {
            "venue": "Count to Five Album Release at Tenri Cultural Institute",
            "city": "New York, NY"
          },
          "program": []
        }
      ]
    }
  ],
  ["mantra" /* Mantra */]: [
    {
      "year": "2022",
      "concerts": [
        {
          "date": "May",
          "location": {
            "venue": "Princeton Sound Kitchen",
            "city": "Princeton, NJ"
          },
          "program": [
            {
              "composer": "Matt McBane",
              "title": "New work (with Ashley Bathgate)"
            }
          ]
        }
      ]
    },
    {
      "year": "2021",
      "concerts": [
        {
          "date": "June",
          "location": {
            "venue": "Timber 10 Year Anniversary Concert",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "May",
          "location": {
            "venue": "Brooklyn Botanic Garden",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "loved."
            }
          ]
        },
        {
          "date": "April 24",
          "location": {
            "venue": "Necessary Noise Festival Virtual Livestream",
            "city": "Remote"
          },
          "program": []
        }
      ]
    },
    {
      "year": "2020",
      "concerts": [
        {
          "date": "October 4",
          "location": {
            "venue": "Brooklyn Botanic Garden",
            "city": "Brooklen, NY"
          },
          "program": [
            {
              "title": "loved.",
              "composer": "Michael Gordon"
            }
          ]
        },
        {
          "date": "June",
          "location": {
            "venue": "Mannes Pre-college Remote Residency",
            "city": "New York, NY"
          },
          "program": [
            {
              "title": "25 Student Compositions",
              "composer": "Mannes Pre-college composition students"
            }
          ]
        },
        {
          "date": "June",
          "location": {
            "venue": "Bang on a Can Marathon (performance cancelled due to Covid)",
            "city": "New York, NY"
          },
          "program": [
            {
              "title": "Timber",
              "composer": "Michael Gordon"
            }
          ]
        },
        {
          "date": "May 1",
          "location": {
            "venue": "Irondale Center for the Arts",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        }
      ]
    },
    {
      "year": "2019",
      "concerts": [
        {
          "date": "November 9",
          "location": {
            "venue": "KM28",
            "city": "Berlin, Germany"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "November 6",
          "location": {
            "venue": "Dox+",
            "city": "Prague, Czechia"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "September 22",
          "location": {
            "venue": "Carnegie Hall Family Day",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Sam Pluta",
              "title": "Four Sixes"
            }
          ]
        },
        {
          "date": "March 6",
          "location": {
            "venue": "Pregones Theater",
            "city": "Bronx, NY"
          },
          "program": [
            {
              "composer": "Tristan Perich",
              "title": "Observations"
            },
            {
              "composer": "Sam Pluta",
              "title": "Four Sixes"
            },
            {
              "composer": "Steve Reich",
              "title": "Music for Pieces of Wood (arr. by David Cossin)"
            },
            {
              "composer": "Julia Wolfe",
              "title": "Dark Full Ride"
            }
          ]
        },
        {
          "date": "January 20",
          "location": {
            "venue": "National Sawdust",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "A Great Many (feat. Christa Van Alstine)"
            },
            {
              "composer": "Aaron Siegel",
              "title": "Science is Only a Sometimes Friend"
            }
          ]
        }
      ]
    },
    {
      "year": "2018",
      "concerts": [
        {
          "date": "October 27",
          "location": {
            "venue": "GAIDA International Festival",
            "city": "Vilnius, Lithuania"
          },
          "program": [
            {
              "composer": "Tristan Perich",
              "title": "Observations"
            },
            {
              "composer": "Sam Pluta",
              "title": "Four Sixes"
            },
            {
              "composer": "Steve Reich",
              "title": "Music for Pieces of Wood (arr. by David Cossin)"
            },
            {
              "composer": "Julia Wolfe",
              "title": "Dark Full Ride"
            },
            {
              "composer": "Michael Gordon",
              "title": "Tree-Oh"
            },
            {
              "composer": "Iannis Xenakis",
              "title": "Okho"
            }
          ]
        },
        {
          "date": "May 6",
          "location": {
            "venue": "National Sawdust",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Matthew Welch",
              "title": "And Here We Are"
            }
          ]
        },
        {
          "date": "March 29",
          "location": {
            "venue": "Merkin Hall, Ecstatic Music Festival",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "A Great Many (feat. Christa Van Alstine)"
            },
            {
              "composer": "Bent Knee",
              "title": "collaboration"
            }
          ]
        },
        {
          "date": "March 22",
          "location": {
            "venue": "Oz Arts",
            "city": "Nashville, TN"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "February 17",
          "location": {
            "venue": "Kent State University Vanguard Series",
            "city": "Kent, OH"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            },
            {
              "composer": "Aaron Siegel",
              "title": "A Great Many (feat. Christa Van Alstine)"
            }
          ]
        },
        {
          "date": "February 19",
          "location": {
            "venue": "Bowling Green State University, MidAmerican Center for Contemporary Music",
            "city": "Bowling Green, OH",
            "support": "Foundation for Contemporary Arts Emergency Grant"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "A Great Many (feat. Christa Van Alstine)"
            },
            {
              "composer": "Lesley Flanigan",
              "title": "Hedera"
            },
            {
              "composer": "Tristan Perich",
              "title": "Moment of Inertia"
            },
            {
              "composer": "Michael Fiday",
              "title": "It Shakes My Teeth"
            }
          ]
        },
        {
          "date": "February 21",
          "location": {
            "venue": "Johnstone Fund for New Music",
            "city": "Columbus, OH"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "February 22",
          "location": {
            "venue": "Cincinnati Conservatory of Music",
            "city": "Cincinnati, OH"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "February 23",
          "location": {
            "venue": "Cleveland Museum of Art -- Transformer Station",
            "city": "Cleveland, OH"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        }
      ]
    },
    {
      "year": "2017",
      "concerts": [
        {
          "date": "November 19",
          "location": {
            "venue": "National Gallery of Art",
            "city": "Washington D.C."
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 1",
          "location": {
            "venue": "Sacrum Profanum Festival",
            "city": "Krakow, Poland"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming feat. Gideon Alorwoyie and his ensemble"
            },
            {
              "composer": "Steve Reich",
              "title": "Four Organs"
            },
            {
              "composer": "Steve Reich",
              "title": "Music for Pieces of Wood (arr. by David Cossin)"
            }
          ]
        },
        {
          "date": "April 8",
          "location": {
            "venue": "Vancouver New Music",
            "city": "Vancouver, Canada"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "A Great Many (feat. Christa Van Alstine)"
            },
            {
              "composer": "Lesley Flanigan",
              "title": "Hedera"
            },
            {
              "composer": "Tristan Perich",
              "title": "Moment of Inertia"
            },
            {
              "composer": "Paul Dolden",
              "title": "Mantra Groove"
            }
          ]
        },
        {
          "date": "April 7",
          "location": {
            "venue": "Western Washington University",
            "city": "Bellingham, WA"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "A Great Many (feat.Christa Van Alstine)"
            },
            {
              "composer": "Tristan Perich",
              "title": "Moment of Inertia"
            }
          ]
        }
      ]
    },
    {
      "year": "2016",
      "concerts": [
        {
          "date": "December 15",
          "location": {
            "venue": "Experiments in Opera, Merkin Hall",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Matthew Welch",
              "title": "And Here We Are"
            }
          ]
        },
        {
          "date": "December 14",
          "location": {
            "venue": "(le) poisson rouge",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "December 10",
          "location": {
            "venue": "National Sawdust",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming feat. Gideon Alorwoyie and his ensemble"
            },
            {
              "composer": "Steve Reich",
              "title": "Four Organs"
            },
            {
              "composer": "Steve Reich",
              "title": "Music for Pieces of Wood (arr. by David Cossin)"
            }
          ]
        },
        {
          "date": "December 4",
          "location": {
            "venue": "The Dither Extravaganza",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "David Grubbs",
              "title": "Excerpts from Prismrose"
            }
          ]
        },
        {
          "date": "April 29-30",
          "location": {
            "venue": "Right Now Music",
            "city": "Seoul, South Korea"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            },
            {
              "composer": "Mathew Rosenblum",
              "title": "Ostatnia Runda"
            }
          ]
        },
        {
          "date": "April 22-23",
          "location": {
            "venue": "Duke Performances",
            "city": "Durham, NC"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "February 27",
          "location": {
            "venue": "Redcat/Broad Museum",
            "city": "Los Angeles, CA"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        },
        {
          "date": "February 11",
          "location": {
            "venue": "Saint Paul Chamber Orchestra /Liquid Music series",
            "city": "St. Paul, MN"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        },
        {
          "date": "February 6",
          "location": {
            "venue": "Indianapolis Museum of Art",
            "city": "Indianapolis, IN"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        },
        {
          "date": "February 5",
          "location": {
            "venue": "Philadelphia Fringe Arts",
            "city": "Philadelphia, PA"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        },
        {
          "date": "January 21",
          "location": {
            "venue": "Baryshnikov Arts Center",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        },
        {
          "date": "January 10-17",
          "location": {
            "venue": "Massachusetts Museum of Contemporary Art",
            "city": "North Adams, MA"
          },
          "program": [
            {
              "composer": "Daniel Wohl",
              "title": "Holographic"
            }
          ]
        }
      ]
    },
    {
      "year": "2015",
      "concerts": [
        {
          "date": "December 12",
          "location": {
            "venue": "The Stone",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Matthew Welch",
              "title": "And Here We Are"
            }
          ]
        },
        {
          "date": "December 6",
          "location": {
            "venue": "Wesleyan University Memorial Chapel",
            "city": "Middletown, CT"
          },
          "program": [
            {
              "composer": "Wesleyan University Graduate Students",
              "title": "Assorted works"
            }
          ]
        },
        {
          "date": "November 4",
          "location": {
            "venue": "New Museum",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Drumming"
            }
          ]
        },
        {
          "date": "September 14",
          "location": {
            "venue": "Wesleyan University",
            "city": "Middletown, CT"
          },
          "program": [
            {
              "composer": "Lecture Series",
              "title": "A Hitchhiker's Guide to Writing for Percussion"
            }
          ]
        },
        {
          "date": "April 2",
          "location": {
            "venue": "Ecstatic Music Festival",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Xiu Xiu",
              "title": "Extinction Meditation"
            }
          ]
        },
        {
          "date": "March 1",
          "location": {
            "venue": "Music on the Edge",
            "city": "Pittsburgh, PA"
          },
          "program": [
            {
              "composer": "Mathew Rosenblum",
              "title": "Ostatnia Runda"
            }
          ]
        },
        {
          "date": "February 28",
          "location": {
            "venue": "Music on the Edge",
            "city": "Pittsburgh, PA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "February 27",
          "location": {
            "venue": "Avant Media Festival",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Paula Matthusen",
              "title": "showing and hiding / showing and vanishing"
            }
          ]
        },
        {
          "date": "January 16",
          "location": {
            "venue": "Arts Brookfield - Winter Garden",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Sam Pluta",
              "title": "Four Sixes"
            },
            {
              "composer": "Alex Mincek",
              "title": "Coalescent Interference"
            },
            {
              "composer": "Eric Wubbels",
              "title": "Points of Focus"
            }
          ]
        },
        {
          "date": "January 15",
          "location": {
            "venue": "Arts Brookfield - Winter Garden",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Ian Williams",
              "title": "Public Transaction"
            }
          ]
        }
      ]
    },
    {
      "year": "2014",
      "concerts": [
        {
          "date": "September 18",
          "location": {
            "venue": "So Percussion Studio",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Ian Williams",
              "title": "Public Transaction (excerpt)"
            },
            {
              "composer": "Sam Pluta",
              "title": "Four Sixes"
            }
          ]
        },
        {
          "date": "September 12",
          "location": {
            "venue": "Third Angle",
            "city": "Portland, OR"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "June 22",
          "location": {
            "venue": "Bang on a Can Marathon",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "May 28",
          "location": {
            "venue": "Mutek Festival",
            "city": "Montreal, QB"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "May 24",
          "location": {
            "venue": "The Stone",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Susie Ibarra and Brian Chase",
              "title": "works"
            }
          ]
        },
        {
          "date": "May 2-3",
          "location": {
            "venue": "Experiments in Opera, Abrons Arts Center",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "Brother Brother"
            }
          ]
        },
        {
          "date": "April 21",
          "location": {
            "venue": "MATA Festival, The Kitchen",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Lisa Streich",
              "title": "Play Time"
            },
            {
              "composer": "Daniel Wohl",
              "title": "Progression"
            },
            {
              "composer": "David Bird",
              "title": "Fields"
            }
          ]
        },
        {
          "date": "April 12",
          "location": {
            "venue": "Fast Forward Austin",
            "city": "Austin, TX"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "April 14",
          "location": {
            "venue": "Southern Methodist University",
            "city": "Dallas, TX"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "April 15",
          "location": {
            "venue": "Louisiana Tech",
            "city": "Ruston, LA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "April 16",
          "location": {
            "venue": "University of New Orleans",
            "city": "New Orleans, LA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "April 17",
          "location": {
            "venue": "Southeastern State University",
            "city": "Hammond, LA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "March 30",
          "location": {
            "venue": "",
            "city": "Reading, PA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "January 25",
          "location": {
            "venue": "Arts at the Park",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "Science is Always a Sometimes Friend"
            },
            {
              "composer": "Tristan Perich",
              "title": "Moment of Inertia"
            }
          ]
        }
      ]
    },
    {
      "year": "2013",
      "concerts": [
        {
          "date": "October 26",
          "location": {
            "venue": "Wesleyan University",
            "city": "Middletown, CT"
          },
          "program": [
            {
              "composer": "Paula Matthusen",
              "title": "So Much of Any Year is Flammable"
            }
          ]
        },
        {
          "date": "September 8",
          "location": {
            "venue": "Noguchi Museum",
            "city": "Queens, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "June 29-30",
          "location": {
            "venue": "River to River Festival: ECSTATIC Summer",
            "city": "New York, NY"
          },
          "program": [
            {
              "description": "new works for percussion ensemble by Greg Saunier (Deerhoof), Reggie Pace (Bon Iver), Dave Douglas, Susie Ibarra, Seth Olinsky (Akron/Family), People Get Ready, Holly Herndon, and Son Lux"
            }
          ]
        },
        {
          "date": "June 21",
          "location": {
            "venue": "Make Music New York",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Cornelius Cardew",
              "title": "The Great Learning"
            }
          ]
        },
        {
          "date": "May 19",
          "location": {
            "venue": "Queens New Music Festival",
            "city": "Queens, NY"
          },
          "program": [
            {
              "description": "selections from 3Nights :: Paula Matthusen, Daniel Wohl, and Zs"
            }
          ]
        },
        {
          "date": "May 16-18",
          "location": {
            "venue": "Music at First",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "description": "3Nights :: Paula Matthusen, Daniel Wohl, and Zs"
            }
          ]
        },
        {
          "date": "May 4",
          "location": {
            "venue": "Drogheda Arts Festival",
            "city": "Louth, Ireland"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "April 30",
          "location": {
            "venue": "Roulette",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "description": "Timber REMIXED with Ikue Mori, Ian Williams, Brandon Seabrook, Jeremiah Cymerman"
            }
          ]
        },
        {
          "date": "March 9",
          "location": {
            "venue": "Vancouver New Music",
            "city": "Vancouver, BC"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        }
      ]
    },
    {
      "year": "2012",
      "concerts": [
        {
          "date": "December 13-15",
          "location": {
            "venue": "Brooklyn Academy of Music's 30th Next Wave Festival",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "September 23",
          "location": {
            "venue": "Carlsbad New Music Festival",
            "city": "Carlsbad, CA"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "Science Is Only A Sometimes Friend"
            }
          ]
        },
        {
          "date": "September 22",
          "location": {
            "venue": "Carlsbad New Music Festival",
            "city": "Carlsbad, CACarlsbad,CA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "September 20",
          "location": {
            "venue": "The Wulf",
            "city": "Los Angeles, CA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "September 19",
          "location": {
            "venue": "Chapman University",
            "city": "Orange County, CA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "September 18",
          "location": {
            "venue": "CalArts",
            "city": "Valencia, CA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "June 2",
          "location": {
            "venue": "Music at First",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "description": "3Nights :: Tristan Perich, Aaron Siegel, and Ted Hearne"
            }
          ]
        },
        {
          "date": "June 1",
          "location": {
            "venue": "Music at First",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "description": "3Nights :: Tristan Perich, Aaron Siegel, and Ted Hearne"
            }
          ]
        },
        {
          "date": "May 31",
          "location": {
            "venue": "Music at First",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "description": "3Nights :: Tristan Perich, Aaron Siegel, and Ted Hearne"
            }
          ]
        },
        {
          "date": "April 21",
          "location": {
            "venue": "New Music New College",
            "city": "Sarasota, Fl"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "April 3",
          "location": {
            "venue": "Caldwell College",
            "city": "Caldwell, NJ"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            },
            {
              "composer": "Iannis Xenakis",
              "title": "Okho"
            }
          ]
        },
        {
          "date": "January 19",
          "location": {
            "venue": "Mobtown Arts",
            "city": "Baltimore, MD"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        }
      ]
    },
    {
      "year": "2011",
      "concerts": [
        {
          "date": "November 12",
          "location": {
            "venue": "MIT - Kresge Auditorium",
            "city": "Boston, MA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "November 11",
          "location": {
            "venue": "Crane Arts Center",
            "city": "Philadelphia, PA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "November 10",
          "location": {
            "venue": "Indianapolis Artsgarden",
            "city": "Indianapolis, IN"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "November 9",
          "location": {
            "venue": "Percussive Arts Society International Convention",
            "city": "Indianapolis, IN"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 22",
          "location": {
            "venue": "X Avant Festival",
            "city": "Toronto, CA"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 20",
          "location": {
            "venue": "SUNY Buffalo",
            "city": "Buffalo, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 19",
          "location": {
            "venue": "Village Gate",
            "city": "Rochester, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 18",
          "location": {
            "venue": "The Yellow Barn",
            "city": "Ann Arbor, MI"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 17",
          "location": {
            "venue": "University Of Northern Illinois",
            "city": "Dekalb, IL"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 16",
          "location": {
            "venue": "Elastic Arts",
            "city": "Chicago, IL"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber"
            }
          ]
        },
        {
          "date": "October 14",
          "location": {
            "venue": "Bowling Green State University",
            "city": "Bowling Green, OH"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (US Premiere)"
            }
          ]
        },
        {
          "date": "October 10",
          "location": {
            "venue": "Stony Brook University",
            "city": "Stony Brook, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (workshop)"
            }
          ]
        },
        {
          "date": "October 3",
          "location": {
            "venue": "William Patterson University",
            "city": "Patterson, NJ"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (workshop)"
            }
          ]
        },
        {
          "date": "August 9",
          "location": {
            "venue": "Apple Store Lincoln Center",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (excerpt)"
            }
          ]
        },
        {
          "date": "June 21",
          "location": {
            "venue": "Morningside Park",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "John Luther Adams",
              "title": "Inuksuit"
            }
          ]
        },
        {
          "date": "May 17",
          "location": {
            "venue": "Bang On A Can Benefit",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (excerpt)"
            }
          ]
        },
        {
          "date": "April 28",
          "location": {
            "venue": "Littlefield",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (preview)"
            }
          ]
        },
        {
          "date": "April 8",
          "location": {
            "venue": "Music At First",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (preview)"
            }
          ]
        },
        {
          "date": "March 24",
          "location": {
            "venue": "Purchase College",
            "city": "Purchase, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (workshop)"
            }
          ]
        },
        {
          "date": "February 14",
          "location": {
            "venue": "Pratt Institute, School of Architecture",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (workshop)"
            }
          ]
        },
        {
          "date": "February 11",
          "location": {
            "venue": "Manhattan School of Music",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (workshop)"
            }
          ]
        }
      ]
    },
    {
      "year": "2010",
      "concerts": [
        {
          "date": "September 16",
          "location": {
            "venue": "Queens College",
            "city": "Flushing, NY"
          },
          "program": [
            {
              "composer": "Michael Gordon",
              "title": "Timber (workshop)"
            }
          ]
        },
        {
          "date": "September 25",
          "location": {
            "venue": "Irondale Center - New Music Bake Sale",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Eric KM Clark",
              "title": "Deprivation Music"
            }
          ]
        },
        {
          "date": "June 21",
          "location": {
            "venue": "Make Music New York",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Aleksei Stevens",
              "title": "if when without itself"
            },
            {
              "composer": "Iannis Xenakis",
              "title": "Okho"
            }
          ]
        },
        {
          "date": "June 12",
          "location": {
            "venue": "The Invisible Dog Art Center",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "composer": "Aleksei Stevens",
              "title": "if when without itself"
            },
            {
              "composer": "Iannis Xenakis",
              "title": "Okho"
            }
          ]
        },
        {
          "date": "April 15",
          "location": {
            "venue": "The Tank",
            "city": "New York, NY"
          },
          "program": [
            {
              "description": "new works by Daniel Wohl and Philip Schuessler for percussion/guitar octet"
            }
          ]
        },
        {
          "date": "March 31",
          "location": {
            "venue": "Sarah Lawrence College",
            "city": "Bronxville, NY"
          },
          "program": [
            {
              "description": "new works by Daniel Wohl and Philip Schuessler for percussion/guitar octet"
            }
          ]
        }
      ]
    },
    {
      "year": "2009",
      "concerts": [
        {
          "date": "September 12",
          "location": {
            "venue": "Le Poisson Rouge",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Steve Reich",
              "title": "Music for 18 Musicians"
            }
          ]
        },
        {
          "date": "September 3",
          "location": {
            "venue": "Littlefield",
            "city": "Brooklyn, NY"
          },
          "program": [
            {
              "description": "Music by George Crumb"
            }
          ]
        },
        {
          "date": "June 21",
          "location": {
            "venue": "Make Music New York",
            "city": "New York, NY"
          },
          "program": [
            {
              "composer": "Aaron Siegel",
              "title": "Science is Only a Sometimes Friend"
            }
          ]
        },
        {
          "date": "May 19",
          "location": {
            "venue": "St. Peter's Church",
            "city": "New York, NY"
          },
          "program": [
            {
              "description": "premieres for percussion sextet by Erik Km Clark, Aaron Siegel, Craig Woodward"
            }
          ]
        }
      ]
    }
  ]
};

// seeds/data/locations.ts
var locationSeeds = [
  {
    "venue": "Necessary Noise Festival",
    "city": "Rahway, NJ"
  },
  {
    "venue": "Rahway High School",
    "city": "Rahway, NJ"
  },
  {
    "venue": "Randolph Day of Percussion",
    "city": "Randolph, NJ"
  },
  {
    "venue": "NJ Day of Percussion",
    "city": "Demarest, NJ"
  },
  {
    "venue": "Make Music NY Festival",
    "city": "New York, NY"
  },
  {
    "venue": "Roulette Intermedium",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Rahway HS",
    "city": "Rahway, NJ"
  },
  {
    "venue": "New Music Gathering at Berklee College of Music",
    "city": "Boston, MA"
  },
  {
    "venue": "The Cell",
    "city": "New York, NY"
  },
  {
    "venue": "Verona Day of Percussion",
    "city": "Verona, NJ"
  },
  {
    "venue": "National Sawdust",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "NYU Day of Percussion",
    "city": "New York, NY"
  },
  {
    "venue": "MyCincinnati Youth Program",
    "city": "Cincinnati, OH"
  },
  {
    "venue": "MyCincinnati",
    "city": "Cincinnati, OH"
  },
  {
    "venue": "Carnegie Hall Family Day",
    "city": "New York, NY"
  },
  {
    "venue": "Princeton UnRuly Sounds Festival",
    "city": "Princeton, NJ"
  },
  {
    "venue": "Juilliard Percussion Festival",
    "city": "New York, NY"
  },
  {
    "venue": "Look and Listen Festival (cancelled due to Covid)",
    "city": "New York, NY"
  },
  {
    "venue": "Brooklyn Botanic Garden",
    "city": "Brooklen, NY"
  },
  {
    "venue": "New Jersey Music Educators Association State Conference",
    "city": "Remote"
  },
  {
    "venue": "Necessary Noise Festival Virtual Clinic",
    "city": "Remote"
  },
  {
    "venue": "Necessary Noise Festival Virtual Livestream",
    "city": "Remote"
  },
  {
    "venue": "Mantra Youth Percussion Open House",
    "city": "Rahway, NJ"
  },
  {
    "venue": "Beringia tour of Alaska",
    "city": "Alaska"
  },
  {
    "venue": "PASIC session November presented by PAS Diversity Alliance",
    "city": "TBA"
  },
  {
    "venue": "HEADLINING the New Music Gathering",
    "city": "Minneapolis, MN"
  },
  {
    "venue": "Count to Five Album Release at Tenri Cultural Institute",
    "city": "New York, NY"
  },
  {
    "venue": "Princeton Sound Kitchen",
    "city": "Princeton, NJ"
  },
  {
    "venue": "Timber 10 Year Anniversary Concert",
    "city": "New York, NY"
  },
  {
    "venue": "Mannes Pre-college Remote Residency",
    "city": "New York, NY"
  },
  {
    "venue": "Bang on a Can Marathon (performance cancelled due to Covid)",
    "city": "New York, NY"
  },
  {
    "venue": "Irondale Center for the Arts",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "KM28",
    "city": "Berlin, Germany"
  },
  {
    "venue": "Dox+",
    "city": "Prague, Czechia"
  },
  {
    "venue": "Pregones Theater",
    "city": "Bronx, NY"
  },
  {
    "venue": "GAIDA International Festival",
    "city": "Vilnius, Lithuania"
  },
  {
    "venue": "Merkin Hall, Ecstatic Music Festival",
    "city": "New York, NY"
  },
  {
    "venue": "Oz Arts",
    "city": "Nashville, TN"
  },
  {
    "venue": "Kent State University Vanguard Series",
    "city": "Kent, OH"
  },
  {
    "venue": "Bowling Green State University, MidAmerican Center for Contemporary Music",
    "city": "Bowling Green, OH",
    "support": "Foundation for Contemporary Arts Emergency Grant"
  },
  {
    "venue": "Johnstone Fund for New Music",
    "city": "Columbus, OH"
  },
  {
    "venue": "Cincinnati Conservatory of Music",
    "city": "Cincinnati, OH"
  },
  {
    "venue": "Cleveland Museum of Art -- Transformer Station",
    "city": "Cleveland, OH"
  },
  {
    "venue": "National Gallery of Art",
    "city": "Washington D.C."
  },
  {
    "venue": "Sacrum Profanum Festival",
    "city": "Krakow, Poland"
  },
  {
    "venue": "Vancouver New Music",
    "city": "Vancouver, Canada"
  },
  {
    "venue": "Western Washington University",
    "city": "Bellingham, WA"
  },
  {
    "venue": "Experiments in Opera, Merkin Hall",
    "city": "New York, NY"
  },
  {
    "venue": "(le) poisson rouge",
    "city": "New York, NY"
  },
  {
    "venue": "The Dither Extravaganza",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Right Now Music",
    "city": "Seoul, South Korea"
  },
  {
    "venue": "Duke Performances",
    "city": "Durham, NC"
  },
  {
    "venue": "Redcat/Broad Museum",
    "city": "Los Angeles, CA"
  },
  {
    "venue": "Saint Paul Chamber Orchestra /Liquid Music series",
    "city": "St. Paul, MN"
  },
  {
    "venue": "Indianapolis Museum of Art",
    "city": "Indianapolis, IN"
  },
  {
    "venue": "Philadelphia Fringe Arts",
    "city": "Philadelphia, PA"
  },
  {
    "venue": "Baryshnikov Arts Center",
    "city": "New York, NY"
  },
  {
    "venue": "Massachusetts Museum of Contemporary Art",
    "city": "North Adams, MA"
  },
  {
    "venue": "The Stone",
    "city": "New York, NY"
  },
  {
    "venue": "Wesleyan University Memorial Chapel",
    "city": "Middletown, CT"
  },
  {
    "venue": "New Museum",
    "city": "New York, NY"
  },
  {
    "venue": "Wesleyan University",
    "city": "Middletown, CT"
  },
  {
    "venue": "Ecstatic Music Festival",
    "city": "New York, NY"
  },
  {
    "venue": "Music on the Edge",
    "city": "Pittsburgh, PA"
  },
  {
    "venue": "Avant Media Festival",
    "city": "New York, NY"
  },
  {
    "venue": "Arts Brookfield - Winter Garden",
    "city": "New York, NY"
  },
  {
    "venue": "So Percussion Studio",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Third Angle",
    "city": "Portland, OR"
  },
  {
    "venue": "Bang on a Can Marathon",
    "city": "New York, NY"
  },
  {
    "venue": "Mutek Festival",
    "city": "Montreal, QB"
  },
  {
    "venue": "Experiments in Opera, Abrons Arts Center",
    "city": "New York, NY"
  },
  {
    "venue": "MATA Festival, The Kitchen",
    "city": "New York, NY"
  },
  {
    "venue": "Fast Forward Austin",
    "city": "Austin, TX"
  },
  {
    "venue": "Southern Methodist University",
    "city": "Dallas, TX"
  },
  {
    "venue": "Louisiana Tech",
    "city": "Ruston, LA"
  },
  {
    "venue": "University of New Orleans",
    "city": "New Orleans, LA"
  },
  {
    "venue": "Southeastern State University",
    "city": "Hammond, LA"
  },
  {
    "venue": "",
    "city": "Reading, PA"
  },
  {
    "venue": "Arts at the Park",
    "city": "New York, NY"
  },
  {
    "venue": "Noguchi Museum",
    "city": "Queens, NY"
  },
  {
    "venue": "River to River Festival: ECSTATIC Summer",
    "city": "New York, NY"
  },
  {
    "venue": "Make Music New York",
    "city": "New York, NY"
  },
  {
    "venue": "Queens New Music Festival",
    "city": "Queens, NY"
  },
  {
    "venue": "Music at First",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Drogheda Arts Festival",
    "city": "Louth, Ireland"
  },
  {
    "venue": "Roulette",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Brooklyn Academy of Music's 30th Next Wave Festival",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Carlsbad New Music Festival",
    "city": "Carlsbad, CA"
  },
  {
    "venue": "The Wulf",
    "city": "Los Angeles, CA"
  },
  {
    "venue": "Chapman University",
    "city": "Orange County, CA"
  },
  {
    "venue": "CalArts",
    "city": "Valencia, CA"
  },
  {
    "venue": "New Music New College",
    "city": "Sarasota, Fl"
  },
  {
    "venue": "Caldwell College",
    "city": "Caldwell, NJ"
  },
  {
    "venue": "Mobtown Arts",
    "city": "Baltimore, MD"
  },
  {
    "venue": "MIT - Kresge Auditorium",
    "city": "Boston, MA"
  },
  {
    "venue": "Crane Arts Center",
    "city": "Philadelphia, PA"
  },
  {
    "venue": "Indianapolis Artsgarden",
    "city": "Indianapolis, IN"
  },
  {
    "venue": "Percussive Arts Society International Convention",
    "city": "Indianapolis, IN"
  },
  {
    "venue": "X Avant Festival",
    "city": "Toronto, CA"
  },
  {
    "venue": "SUNY Buffalo",
    "city": "Buffalo, NY"
  },
  {
    "venue": "Village Gate",
    "city": "Rochester, NY"
  },
  {
    "venue": "The Yellow Barn",
    "city": "Ann Arbor, MI"
  },
  {
    "venue": "University Of Northern Illinois",
    "city": "Dekalb, IL"
  },
  {
    "venue": "Elastic Arts",
    "city": "Chicago, IL"
  },
  {
    "venue": "Bowling Green State University",
    "city": "Bowling Green, OH"
  },
  {
    "venue": "Stony Brook University",
    "city": "Stony Brook, NY"
  },
  {
    "venue": "William Patterson University",
    "city": "Patterson, NJ"
  },
  {
    "venue": "Apple Store Lincoln Center",
    "city": "New York, NY"
  },
  {
    "venue": "Morningside Park",
    "city": "New York, NY"
  },
  {
    "venue": "Bang On A Can Benefit",
    "city": "New York, NY"
  },
  {
    "venue": "Littlefield",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Music At First",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Purchase College",
    "city": "Purchase, NY"
  },
  {
    "venue": "Pratt Institute, School of Architecture",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "Manhattan School of Music",
    "city": "New York, NY"
  },
  {
    "venue": "Queens College",
    "city": "Flushing, NY"
  },
  {
    "venue": "Irondale Center - New Music Bake Sale",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "The Invisible Dog Art Center",
    "city": "Brooklyn, NY"
  },
  {
    "venue": "The Tank",
    "city": "New York, NY"
  },
  {
    "venue": "Sarah Lawrence College",
    "city": "Bronxville, NY"
  },
  {
    "venue": "Le Poisson Rouge",
    "city": "New York, NY"
  },
  {
    "venue": "St. Peter's Church",
    "city": "New York, NY"
  }
];

// seeds/data/pieces.ts
var pieceSeeds = [
  {
    "composer": "Steve Reich",
    "title": "Drumming pt. 1"
  },
  {
    "composer": "Daniel Levitan",
    "title": "Marimba Quartet"
  },
  {
    "composer": "Angelica Negron, Miguel Bolivar, Christian Rodriguez & Lainie Fefferman",
    "title": "Concerto for Buildings III"
  },
  {
    "composer": "Daniel Wohl",
    "title": "Holographic"
  },
  {
    "composer": "Sean Friar",
    "title": "Clunker Concerto"
  },
  {
    "composer": "Steve Reich",
    "title": "Drumming"
  },
  {
    "composer": "Angelica Negron",
    "title": "Count to Five"
  },
  {
    "composer": "Aaron Siegel",
    "title": "Science is Only a Sometimes Friend"
  },
  {
    "composer": "",
    "title": "Workshop"
  },
  {
    "composer": "Ayanna Woods",
    "title": "TriplePoint"
  },
  {
    "composer": "Jenny Beck",
    "title": "by the time we look for it"
  },
  {
    "title": "loved.",
    "composer": "Michael Gordon"
  },
  {
    "composer": "Matt McBane",
    "title": "New work (with Ashley Bathgate)"
  },
  {
    "composer": "Michael Gordon",
    "title": "Timber"
  },
  {
    "title": "25 Student Compositions",
    "composer": "Mannes Pre-college composition students"
  },
  {
    "composer": "Sam Pluta",
    "title": "Four Sixes"
  },
  {
    "composer": "Tristan Perich",
    "title": "Observations"
  },
  {
    "composer": "Steve Reich",
    "title": "Music for Pieces of Wood (arr. by David Cossin)"
  },
  {
    "composer": "Julia Wolfe",
    "title": "Dark Full Ride"
  },
  {
    "composer": "Aaron Siegel",
    "title": "A Great Many (feat. Christa Van Alstine)"
  },
  {
    "composer": "Michael Gordon",
    "title": "Tree-Oh"
  },
  {
    "composer": "Iannis Xenakis",
    "title": "Okho"
  },
  {
    "composer": "Matthew Welch",
    "title": "And Here We Are"
  },
  {
    "composer": "Bent Knee",
    "title": "collaboration"
  },
  {
    "composer": "Lesley Flanigan",
    "title": "Hedera"
  },
  {
    "composer": "Tristan Perich",
    "title": "Moment of Inertia"
  },
  {
    "composer": "Michael Fiday",
    "title": "It Shakes My Teeth"
  },
  {
    "composer": "Steve Reich",
    "title": "Drumming feat. Gideon Alorwoyie and his ensemble"
  },
  {
    "composer": "Steve Reich",
    "title": "Four Organs"
  },
  {
    "composer": "Paul Dolden",
    "title": "Mantra Groove"
  },
  {
    "composer": "Aaron Siegel",
    "title": "A Great Many (feat.Christa Van Alstine)"
  },
  {
    "composer": "David Grubbs",
    "title": "Excerpts from Prismrose"
  },
  {
    "composer": "Mathew Rosenblum",
    "title": "Ostatnia Runda"
  },
  {
    "composer": "Wesleyan University Graduate Students",
    "title": "Assorted works"
  },
  {
    "composer": "Lecture Series",
    "title": "A Hitchhiker's Guide to Writing for Percussion"
  },
  {
    "composer": "Xiu Xiu",
    "title": "Extinction Meditation"
  },
  {
    "composer": "Paula Matthusen",
    "title": "showing and hiding / showing and vanishing"
  },
  {
    "composer": "Alex Mincek",
    "title": "Coalescent Interference"
  },
  {
    "composer": "Eric Wubbels",
    "title": "Points of Focus"
  },
  {
    "composer": "Ian Williams",
    "title": "Public Transaction"
  },
  {
    "composer": "Ian Williams",
    "title": "Public Transaction (excerpt)"
  },
  {
    "composer": "Susie Ibarra and Brian Chase",
    "title": "works"
  },
  {
    "composer": "Aaron Siegel",
    "title": "Brother Brother"
  },
  {
    "composer": "Lisa Streich",
    "title": "Play Time"
  },
  {
    "composer": "Daniel Wohl",
    "title": "Progression"
  },
  {
    "composer": "David Bird",
    "title": "Fields"
  },
  {
    "composer": "Aaron Siegel",
    "title": "Science is Always a Sometimes Friend"
  },
  {
    "composer": "Paula Matthusen",
    "title": "So Much of Any Year is Flammable"
  },
  {
    "description": "new works for percussion ensemble by Greg Saunier (Deerhoof), Reggie Pace (Bon Iver), Dave Douglas, Susie Ibarra, Seth Olinsky (Akron/Family), People Get Ready, Holly Herndon, and Son Lux"
  },
  {
    "description": "selections from 3Nights :: Paula Matthusen, Daniel Wohl, and Zs"
  },
  {
    "description": "3Nights :: Paula Matthusen, Daniel Wohl, and Zs"
  },
  {
    "description": "Timber REMIXED with Ikue Mori, Ian Williams, Brandon Seabrook, Jeremiah Cymerman"
  },
  {
    "description": "3Nights :: Tristan Perich, Aaron Siegel, and Ted Hearne"
  },
  {
    "description": "new works by Daniel Wohl and Philip Schuessler for percussion/guitar octet"
  },
  {
    "description": "Music by George Crumb"
  },
  {
    "description": "premieres for percussion sextet by Erik Km Clark, Aaron Siegel, Craig Woodward"
  },
  {
    "composer": "Cornelius Cardew",
    "title": "The Great Learning"
  },
  {
    "composer": "Aaron Siegel",
    "title": "Science Is Only A Sometimes Friend"
  },
  {
    "composer": "Michael Gordon",
    "title": "Timber (US Premiere)"
  },
  {
    "composer": "Michael Gordon",
    "title": "Timber (workshop)"
  },
  {
    "composer": "Michael Gordon",
    "title": "Timber (excerpt)"
  },
  {
    "composer": "John Luther Adams",
    "title": "Inuksuit"
  },
  {
    "composer": "Michael Gordon",
    "title": "Timber (preview)"
  },
  {
    "composer": "Eric KM Clark",
    "title": "Deprivation Music"
  },
  {
    "composer": "Aleksei Stevens",
    "title": "if when without itself"
  },
  {
    "composer": "Steve Reich",
    "title": "Music for 18 Musicians"
  }
];

// seeds/data/teams.ts
var teamSeeds = [
  {
    title: "Administration",
    members: {
      create: [
        {
          name: "Miguel Bolivar",
          roles: { create: [{ title: "Executive Director" }] }
        },
        {
          name: "Joseph Bergen",
          roles: {
            create: [
              { title: "Co-Artistic Director" },
              { title: "Mantra Youth Percussion Instructional Staff" }
            ]
          }
        },
        {
          name: "Michael McCurdy",
          roles: { create: [{ title: "Co-Artistic Director" }] }
        },
        {
          name: "Mark Utley",
          roles: { create: [{ title: "Web Development and Design" }] }
        },
        {
          name: "Jazmine Andes",
          roles: { create: [{ title: "Social Media & Marketing" }] }
        },
        {
          name: "Joseph Brown",
          roles: { create: [{ title: "Mantra Youth Percussion Director" }] }
        },
        {
          name: "Jessica Bergen",
          roles: { create: [{ title: "Mantra Youth Percussion Recruitment Coordinator" }] }
        },
        {
          name: "James Bogert",
          roles: { create: [{ title: "Mantra Youth Percussion Instructional Staff" }] }
        },
        {
          name: "Taylor Furman",
          roles: { create: [{ title: "Mantra Youth Percussion Instructional Staff" }] }
        },
        {
          name: "Aaliyah Geiger",
          roles: { create: [{ title: "Intern" }] }
        },
        {
          name: "Serena Huang",
          roles: { create: [{ title: "Intern" }] }
        },
        {
          name: "Deivy Mejia",
          roles: { create: [{ title: "Intern" }] }
        }
      ]
    }
  },
  {
    title: "Mantra Percussion",
    members: {
      create: [
        {
          name: "Joseph Bergen"
        },
        {
          name: "Christopher Graham"
        },
        {
          name: "Mika Godbole"
        },
        {
          name: "Michael McCurdy"
        },
        {
          name: "Mark Utley"
        }
      ]
    }
  },
  {
    title: "Recap",
    members: {
      create: [
        {
          name: "Arlene Acevedo"
        },
        {
          name: "Alexis Carter"
        },
        {
          name: "Tiahna Sterling"
        },
        {
          name: "Aline Vasquez"
        }
      ]
    }
  },
  {
    title: "Mantra Percussion Emeritus",
    members: {
      create: [
        {
          name: "Al Cerulo"
        },
        {
          name: "Jude Traxler"
        },
        {
          name: "Owen Weaver"
        },
        {
          name: "Nick Woodbury"
        },
        {
          name: "Matt Kantorski"
        }
      ]
    }
  }
];

// seeds/data/videos.ts
var videoSeeds = [
  {
    title: "Ang\xE9lica Negr\xF3n: Count to Five",
    embed: "https://www.youtube.com/embed/BP_dmuVU9mI",
    group: "recap" /* Recap */
  },
  {
    title: "A Day Isolated",
    embed: "https://www.youtube.com/embed/gyF3Fene77Y",
    group: "mantra" /* Mantra */
  },
  {
    title: "Squarepusher: Timber Remixed",
    embed: "https://www.youtube.com/embed/Q6E5Q82vR30",
    group: "mantra" /* Mantra */
  },
  {
    title: "Hauschka: Timber Remixed",
    embed: "https://www.youtube.com/embed/L4a1UX-L1CQ",
    group: "mantra" /* Mantra */
  },
  {
    title: "Greg Saunier: Timber Remixed",
    embed: "https://www.youtube.com/embed/FzpfIiYdGNk",
    group: "mantra" /* Mantra */
  },
  {
    title: "Michael Gordon's Timber - Live at the 2014 Bang on a Can Marathon",
    embed: "https://www.youtube.com/embed/_fSTKJtVNS0",
    group: "mantra" /* Mantra */
  },
  {
    title: "Ian Williams and Mantra Percussion - Live at the 2015 Ecstatic Music Festival",
    embed: "https://www.youtube.com/embed/0ks1NxXzGc8",
    group: "mantra" /* Mantra */
  },
  {
    title: "Highlights from the 2018 GAIDA Festival",
    embed: "https://www.youtube.com/embed/_eQCBmYXYVg",
    group: "mantra" /* Mantra */
  },
  {
    title: "Iannis Xenakis's Okho (arr. for drum sets) - Live at the 2018 GAIDA Festival",
    embed: "https://www.youtube.com/embed/2KqmU7EMgBo",
    group: "mantra" /* Mantra */
  },
  {
    title: "Julia Wolfe's Dark Full Ride - Live at the 2018 GAIDA Festival",
    embed: "https://www.youtube.com/embed/gdj7to1x_JU",
    group: "mantra" /* Mantra */
  },
  {
    title: "Tristan Perich's Observations - Live at the 2018 GAIDA Festival",
    embed: "https://www.youtube.com/embed/e-aX0idbhos",
    group: "mantra" /* Mantra */
  },
  {
    title: "Sam Pluta's Four Sixes - Live at the 2018 GAIDA Festival",
    embed: "https://www.youtube.com/embed/0O13lIWutaA",
    group: "mantra" /* Mantra */
  },
  {
    title: "Paula Matthusen's so much of any given year is flammable (excerpt)",
    embed: "https://player.vimeo.com/video/86970776",
    group: "mantra" /* Mantra */
  },
  {
    title: "Mathew Rosenblum's Ostatnia Runda (with the FLUX Quartet) - Live at the 2016 Beyond Microtonal Festival",
    embed: "https://www.youtube.com/embed/A1QHc12DBdM",
    group: "mantra" /* Mantra */
  },
  {
    title: "Mantra Percussion Live with Z's",
    embed: "https://player.vimeo.com/video/78254362",
    group: "mantra" /* Mantra */
  },
  {
    title: "David Grubbs and Mantra Percussion - Live at the 2016 Dither Extravaganza",
    embed: "https://www.youtube.com/embed/j18nLOQQyPk",
    group: "mantra" /* Mantra */
  },
  {
    title: "Mantra at Lowe's Hardware - NPR Field Recordings",
    embed: "https://www.youtube.com/embed/lytgDpIs4Sk",
    group: "mantra" /* Mantra */
  },
  {
    title: "Aaron Siegel: Brother Brother",
    embed: "https://player.vimeo.com/video/105153127",
    group: "mantra" /* Mantra */
  },
  {
    title: "Paula Matthusen's of an implacable substraction - Live at the 2015 Avant Media Festival",
    embed: "https://www.youtube.com/embed/WEzPLkMaX_8",
    group: "mantra" /* Mantra */
  }
];

// seeds/index.ts
var seedCollection = (collection, seeds) => async (context) => {
  const values = await context.db[collection].findMany();
  if (values.length === 0) {
    const datedSeeds = seeds.map((seed, idx) => {
      const createdAt = new Date(Date.now() - idx * 1e5).toISOString();
      return {
        ...seed,
        createdAt
      };
    });
    await context.db[collection].createMany({ data: datedSeeds });
  }
};
var seedAlbums = seedCollection("Album", albumSeeds);
var seedArticles = seedCollection("Article", articleSeeds);
var seedVideos = seedCollection("Video", videoSeeds);
var seedTeams = async (context) => {
  const teams = await context.db.Team.findMany();
  if (teams.length === 0) {
    await context.db.Team.createMany({ data: teamSeeds });
  }
};
var seedLocations = async (context) => {
  const locations = await context.db.Location.findMany();
  if (locations.length === 0) {
    await context.db.Location.createMany({ data: locationSeeds });
  }
};
var seedPieces = async (context) => {
  const pieces = await context.db.Piece.findMany();
  if (pieces.length === 0) {
    await context.db.Piece.createMany({ data: pieceSeeds });
  }
};
var getProgramPieces = async (context, program) => {
  const promises = program.map(
    async (p) => {
      const [piece] = await context.db.Piece.findMany({
        where: {
          OR: [
            { title: { equals: p.title }, composer: { equals: p.composer } },
            { description: { equals: p.description } }
          ]
        }
      });
      return { id: piece.id };
    }
  );
  return Promise.all(promises);
};
var getConcertDates = (date, year) => {
  if (date.includes("-")) {
    const [month, dayRange] = date.split(" ");
    const [from, to] = dayRange.split("-");
    return [
      new Date(`$${month} ${from}, ${year}`).toISOString(),
      new Date(`$${month} ${to}, ${year}`).toISOString()
    ];
  }
  const dateString = new Date(`${date}, ${year}`).toISOString();
  return [dateString, dateString];
};
var seedConcertYear = (context, group) => async ({ year, concerts }) => {
  Promise.all(concerts.map(async ({ date, location, program }) => {
    const [dateFrom, dateTo] = getConcertDates(date, year);
    const pieces = await getProgramPieces(context, program);
    const [concertLocation] = await context.db.Location.findMany({ where: { venue: { equals: location.venue } } });
    const locationInput = concertLocation ? { connect: { id: concertLocation.id } } : { create: location };
    context.db.Concert.createOne({ data: { group, dateFrom, dateTo, program: { connect: pieces }, location: locationInput } });
  }));
};
var seedConcerts = async (context) => {
  const concerts = await context.db.Concert.findMany();
  if (concerts.length)
    return;
  return (0, import_lodash.chain)(concertSeeds).map((years, group) => years.map(seedConcertYear(context, group))).flattenDeep().value();
};
var seedDb = async (context) => {
  await Promise.all([
    seedAlbums(context),
    seedArticles(context),
    seedVideos(context),
    seedTeams(context),
    seedLocations(context),
    seedPieces(context)
  ]);
  await seedConcerts(context);
};

// config/db.ts
var DBConfig = {
  development: {
    provider: "postgresql",
    url: "postgres://postgres:postgres@localhost:5432/mantra",
    enableLogging: true,
    useMigrations: true,
    onConnect: seedDb,
    idField: { kind: "uuid" }
  },
  production: {
    provider: "postgresql",
    url: process.env.DATABASE_URL,
    enableLogging: true,
    useMigrations: true,
    onConnect: seedDb,
    idField: { kind: "uuid" }
  }
};

// config/graphql.ts
var GQLConfig = {
  ["development" /* development */]: {},
  ["production" /* production */]: {
    playground: true,
    apolloConfig: { introspection: true }
  }
};

// config/server.ts
var PORT = Number(process.env.PORT ?? 3e3);
var ServConfig = {
  development: { port: 3e3 },
  production: {
    cors: { origin: ["*"] },
    port: PORT
  }
};

// config/index.ts
var configs = {
  ["development" /* development */]: {
    db: DBConfig.development,
    server: ServConfig.development,
    graphql: GQLConfig.development
  },
  ["production" /* production */]: {
    db: DBConfig.production,
    server: ServConfig.production,
    graphql: GQLConfig.production
  }
};
var Config = configs["development"];

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    ...Config,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data
    },
    lists,
    session
  })
);
