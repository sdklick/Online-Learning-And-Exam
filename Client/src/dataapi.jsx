const Qapi = [
  {
    qno: "i",
    qname: "1. JavaScript is the programming language of the _____",
    o1: ["Desktop", "Mobile", "Web", "Server"],
    ans: "Web",
  },
  {
    qno: "ii",
    qname: "2. Which type of JavaScript language is _____",
    o1: [
      "Object-oriented",
      "Object-based",
      "Functional programming",
      "All of the above",
    ],
    ans: "Object-based",
  },
  {
    qno: "iii",
    qname: "3. Which JavaScript method is used to write HTML output _____",
    o1: [
      "document.write()",
      "document.output()",
      "console.log()",
      "document.writeHTML()",
    ],
    ans: "document.write()",
  },
  {
    qno: "iv",
    qname:
      "4. Which JavaScript method is used to write into an alert box _____.",
    o1: [
      "window.alertHTML()",
      "window.alert()",
      "window.alertBox()",
      "window.alertContent()",
    ],
    ans: "window.alert()",
  },
  {
    qno: "v",
    qname: "5. In JavaScript, single line comment begins with ___.",
    o1: ["#", "/*", "$", "//"],
    ans: "//",
  },
];

const AboutsubApi = [
  {
    id: "i",
    subname: "GK",
  },
  {
    id: "ii",
    subname: "ENTERTAINMENT",
  },
  {
    id: "iii",
    subname: "SCIENCE",
  },
  {
    id: "iv",
    subname: "MYTHOLOGY",
  },
  {
    id: "v",
    subname: "SPORTS",
  },
  {
    id: "vi",
    subname: "GEOGRAPHY",
  },
  {
    id: "vii",
    subname: "HISTORY",
  },
  {
    id: "viii",
    subname: "POLITICS",
  },
  {
    id: "ix",
    subname: "ART",
  },
  {
    id: "x",
    subname: "CELEBRITIES",
  },
  {
    id: "xi",
    subname: "ANIMALS",
  },
  {
    id: "xii",
    subname: "VEHICLES",
  },
];

const AboutTechApi = [
  {
    id: "i",
    tname: "HTML5",
    ticon: "fab fa-html5",
  },
  {
    id: "ii",
    tname: "CSS3",
    ticon: "fab fa-css3",
  },
  {
    id: "iii",
    tname: "JAVASCRIPT",
    ticon: "fab fa-js",
  },
  {
    id: "iv",
    tname: "REACT",
    ticon: "fab fa-react",
  },
  {
    id: "v",
    tname: "BOOTSTRAP",
    ticon: "fab fa-bootstrap",
  },
  {
    id: "vi",
    tname: "NODE+EXPRESS",
    ticon: "fab fa-node",
  },
  {
    id: "vii",
    tname: "NPM",
    ticon: "fab fa-npm",
  },
  {
    id: "viii",
    tname: "MONGODB",
    ticon: "fa fa-database",
  },
];

const CategoryApi = [
  {
    id: "i",
    subname:"GENERAL KNOWLEDGE",
    subphoto:"https://source.unsplash.com/1600x700/?knowledge",
    subapi:"https://opentdb.com/api.php?amount=10&category=9"
  },
  {
    id: "ii",
    subname:"SCIENCE : COMPUTERS",
    subphoto:"https://source.unsplash.com/1600x700/?computer-science",
    subapi:"https://opentdb.com/api.php?amount=10&category=18"
  },
  {
    id: "iii",
    subname:"SCIENCE : MATHEMATICS",
    subphoto:"https://source.unsplash.com/1600x700/?mathematics",
    subapi:"https://opentdb.com/api.php?amount=10&category=19"
  },
  {
    id: "iv",
    subname:"SCIENCE : GADGETS",
    subphoto:"https://source.unsplash.com/1600x700/?gadgets",
    subapi:"https://opentdb.com/api.php?amount=10&category=30"
  },
  {
    id: "v",
    subname:"SCIENCE & NATURE",
    subphoto:"https://source.unsplash.com/1600x700/?nature",
    subapi:"https://opentdb.com/api.php?amount=10&category=17"
  },
  {
    id: "vi",
    subname:"GEOGRAPHY",
    subphoto:"https://source.unsplash.com/1600x700/?geography",
    subapi:"https://opentdb.com/api.php?amount=10&category=22"
  },
  {
    id: "vii",
    subname:"HISTORY",
    subphoto:"https://source.unsplash.com/1600x700/?history",
    subapi:"https://opentdb.com/api.php?amount=10&category=23"
  },
  {
    id: "viii",
    subname:"MYTHOLOGY",
    subphoto:"https://source.unsplash.com/1600x700/?hindu-mythology",
    subapi:"https://opentdb.com/api.php?amount=10&category=20"
  },
  {
    id: "ix",
    subname:"SPORTS",
    subphoto:"https://source.unsplash.com/1600x700/?sports",
    subapi:"https://opentdb.com/api.php?amount=10&category=21"
  },
  {
    id: "x",
    subname:"POLITICS",
    subphoto:"https://source.unsplash.com/1600x700/?politics",
    subapi:"https://opentdb.com/api.php?amount=10&category=24"
  },
  {
    id: "xi",
    subname:"ART",
    subphoto:"https://source.unsplash.com/1600x700/?art",
    subapi:"https://opentdb.com/api.php?amount=10&category=25"
  },
  {
    id: "xii",
    subname:"VEHICLES",
    subphoto:"https://source.unsplash.com/1600x700/?vehicles",
    subapi:"https://opentdb.com/api.php?amount=10&category=28"
  },
  {
    id: "xiii",
    subname:"ANIMALS",
    subphoto:"https://source.unsplash.com/1600x700/?animals",
    subapi:"https://opentdb.com/api.php?amount=10&category=27"
  },
  {
    id: "xiv",
    subname:"ENTERTAINMENT : BOOKS",
    subphoto:"https://source.unsplash.com/1600x700/?Book",
    subapi:"https://opentdb.com/api.php?amount=10&category=10"
  },
  {
    id: "xv",
    subname:"ENTERTAINMENT : FLIM",
    subphoto:"https://source.unsplash.com/1600x700/?flim",
    subapi:"https://opentdb.com/api.php?amount=10&category=11"
  },
  {
    id: "xvi",
    subname:"ENTERTAINMENT : MUSIC",
    subphoto:"https://source.unsplash.com/1600x700/?music",
    subapi:"https://opentdb.com/api.php?amount=10&category=12"
  },
  {
    id: "xvii",
    subname:"ENTERTAINMENT : MUSIC & THEATRES",
    subphoto:"https://source.unsplash.com/1600x700/?Theater-stage",
    subapi:"https://opentdb.com/api.php?amount=10&category=13"
  },
  {
    id: "xviii",
    subname:"ENTERTAINMENT : TELIVISION",
    subphoto:"https://source.unsplash.com/1600x700/?smart-tv",
    subapi:"https://opentdb.com/api.php?amount=10&category=14"
  },
  {
    id: "xix",
    subname:"ENTERTAINMENT : VIDEO GAMES",
    subphoto:"https://source.unsplash.com/1600x700/?video-games",
    subapi:"https://opentdb.com/api.php?amount=10&category=15"
  },
  {
    id: "xx",
    subname:"ENTERTAINMENT : BOARD GAMES",
    subphoto:"https://source.unsplash.com/1600x700/?board-games",
    subapi:"https://opentdb.com/api.php?amount=10&category=16"
  },
  {
    id: "xxi",
    subname:"ENTERTAINMENT : COMICS",
    subphoto:"https://source.unsplash.com/1600x700/?comics",
    subapi:"https://opentdb.com/api.php?amount=10&category=29"
  },
  {
    id: "xxii",
    subname:"ENTERTAINMENT : JAPANESE ANIME",
    subphoto:"https://source.unsplash.com/1600x700/?japanese-anime",
    subapi:"https://opentdb.com/api.php?amount=10&category=31"
  },
  {
    id: "xxiii",
    subname:"ENTERTAINMENT : CARTOON & MOTION",
    subphoto:"https://source.unsplash.com/1600x700/?cartoon",
    subapi:"https://opentdb.com/api.php?amount=10&category=32"
  },
  {
    id: "xxiv",
    subname:"CELEBRITIES",
    subphoto:"https://source.unsplash.com/1600x700/?cosmetic",
    subapi:"https://opentdb.com/api.php?amount=10&category=26"
  },
];

export { Qapi, AboutsubApi, AboutTechApi, CategoryApi };
