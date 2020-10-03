// import axios from "axios"
import Tags from "./Tags";

const API = {
  getRepos: async () => {
    return portfolioList;
  },
  getTags: async () => {
    const validTags = [];
    for (let tag in Tags) {
      validTags.push(Tags[tag]);
    }
    return validTags;
  }
}

const portfolioList = [
  {
    _id: 294938780,
    title: "budget-tracker",
    "description": "Budget tracking Progressive Web App. Uses MongoDB, Express, Chart.js and webpack",
    repoURL: "https://github.com/Andrew836-dev/budget-tracker",
    homepageURL: "https://andrew-budget.herokuapp.com",
    image: "./img/budget-tracker.jpg",
    tags: [Tags.BACK_END, Tags.EXPRESS, Tags.MONGO, Tags.NODE]
    },
  {
    _id: 291241222,
    title: "Doggo",
    homepageURL: "https://andrew836-dev.github.io/doggo",
    description: "The only place you need to know for dog-breed insight! Uses jQuery, tippy.js, Bulma and remote APIs",
    image: "./img/doggo.jpg",
    repoURL: "https://github.com/Andrew836-dev/doggo",
    tags: [Tags.FRONT_END, Tags.JQUERY]
  },
  {
    _id: 286739967,
    title: "Eat at burggies",
    homepageURL: "https://andrew-burger.herokuapp.com/",
    description: "Full stack app to log types of burgers. Uses Node, Express, mySQL, handlebars.js",
    image: "./img/eat-da-burger.jpg",
    repoURL: "https://github.com/Andrew836-dev/eat-da-burger",
    tags: [Tags.FRONT_END, Tags.JQUERY, Tags.BACK_END, Tags.HANDLEBARS, Tags.MYSQL, Tags.FULL_STACK]
  },
  {
    _id: 266445740,
    title: "Javascript-tetris",
    repoURL: "https://github.com/Andrew836-dev/Javascript-tetris",
    "description": "Tetris game based on a FreeCodeCamp tutorial video. I've added on-screen arrows for touch screen control.",
    homepageURL: "https://andrew836-dev.github.io/Javascript-tetris/",
    image: "./img/javascript-tetris.jpg",
    tags: [Tags.FRONT_END]
    },
  {
    _id: 282750559,
    title: "note-taker",
    "description": "A server app to handle writing/saving/deleting notes. My first express app.",
    repoURL: "https://github.com/Andrew836-dev/note-taker",
    homepageURL: "https://take-note-andrew.herokuapp.com/",
    image: "./img/note-taker.jpg",
    tags: [Tags.BACK_END, Tags.EXPRESS]
  },
  {
    _id: 288408739,
    title: "schoolgle",
    repoURL: "https://github.com/Andrew836-dev/schoolgle",
    "description": "Schoolgle is an app to help find information about schools in your area. Uses jQuery, Materialize, Express, handlebars.js and mySQL.",
    homepageURL: "https://schoolgle.herokuapp.com",
    image: "./img/schoolgle.jpg",
    tags: [Tags.BACK_END, Tags.EXPRESS, Tags.HANDLEBARS, Tags.NODE, Tags.MYSQL, Tags.FULL_STACK, Tags.FRONT_END, Tags.JQUERY]
  },
  {
    _id: 296858212,
    title: "user-list",
    "description": "React page for displaying a table of users/employees",
    repoURL: "https://github.com/Andrew836-dev/user-list",
    homepageURL: "https://andrew836-dev.github.io/user-list",
    image: "./img/user-list.png",
    tags: [Tags.FRONT_END, Tags.REACT, Tags.BOOTSTRAP]
  },
  {
    _id: 273736455,
    "description": "Weather information at your fingertips. Uses jQuery, Bootstrap and remote APIs",
    title: "weather-dashboard",
    repoURL: "https://github.com/Andrew836-dev/weather-dashboard",
    homepageURL: "https://andrew836-dev.github.io/weather-dashboard/",
    image: "./img/weather-dashboard.jpg",
    tags: [Tags.FRONT_END, Tags.JQUERY, Tags.BOOTSTRAP]
  }
];

export default API;