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
    _id: 0,
    title: "Doggo",
    homepageURL: "https://gussel87.github.io/Doggo",
    description: "An app about dogs",
    image: "./img/doggo.jpg",
    repoURL: "https://github.com/gussel87/Doggo",
    tags: [Tags.FRONT_END, Tags.JQUERY]
  },
  {
    _id: 1,
    title: "Eat at burggies",
    homepageURL: "https://gussel87.github.io/Doggo",
    description: "An app about dogs",
    image: "./img/eat-da-burger.jpg",
    repoURL: "https://github.com/gussel87/Doggo",
    tags: [Tags.FRONT_END, Tags.JQUERY, Tags.BACK_END, Tags.HANDLEBARS]
  },
  {
    _id: 2,
    title: "Note Taker",
    homepageURL: "https://gussel87.github.io/Doggo",
    description: "An app about dogs",
    image: "./img/note-taker.jpg",
    repoURL: "https://github.com/gussel87/Doggo",
    tags: [Tags.BACK_END, Tags.EXPRESS]
  },
  {
    _id: 3,
    title: "Weather Dashboard",
    homepageURL: "https://gussel87.github.io/Doggo",
    description: "An app about dogs",
    image: "./img/weather-dashboard.jpg",
    repoURL: "https://github.com/gussel87/Doggo",
    tags: [Tags.FRONT_END, Tags.JQUERY]
  }
];

export default API;