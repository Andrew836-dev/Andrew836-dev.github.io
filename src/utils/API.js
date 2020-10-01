// import axios from "axios"

const API = {
  getRepos: async () => {
    console.log("calling API");
    return new Promise(resolve => {
      resolve(portfolioList);
    });
  }
}

const portfolioList = [
  {
    _id: 0,
    title: "Doggo",
    homepageURL: "https://gussel87.github.io/Doggo",
    description: "An app about dogs",
    image: "/img/doggo.png",
    repoURL: "https://github.com/gussel87/Doggo"
  }
];

export default API;