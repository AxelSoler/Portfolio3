import yellowroomsimg from "../../img/projects/YellowRooms.png";
import monsterimg from "../../img/projects/MonsterHunterWorld.png";
import budgetimg from "../../img/projects/SuperBudgetApp.jpg";
import spaceimg from "../../img/projects/SpaceTravelersHub.png";
import cocktailimg from "../../img/projects/Cocktail.png";
import sonicimg from "../../img/projects/SonicLeaderboard.png";
import mycroverseimg from "../../img/projects/Mycroverse2.0.png";

const projects = [
  {
    name: "American Fleet Insurance",
    description:
      "American Fleet Insurance is the fastest growing commercial vehicle insurance agency in the US. We build operational software to decrease the sales process timeline.",
    image: yellowroomsimg,
    technologies: ["JavaScript", "React", "CSS", "Tailwind"],
    live: "private",
    repository: "private",
    position: "Front End Developer",
    company: "GoodSoftwareDev"
  },
  {
    name: "YellowRooms",
    description:
      "A full-stack hotel booking platform where users can search, reserve, and manage their stay in stylish Yellow Rooms. Built with React and Ruby on Rails for a seamless experience.",
    image: yellowroomsimg,
    technologies: ["JavaScript", "React", "CSS", "Ruby", "Rails"],
    live: "https://yellow-rooms.netlify.app/",
    repository: "https://github.com/AxelSoler/YellowRooms-Front",
    position: "Full Stack Developer",
    company: "Microverse"
  },
  {
    name: "Monster Hunter World",
    description:
      "An interactive web application that provides detailed data and statistics on all monsters from the Monster Hunter World game. Users can filter, explore, and learn about each creature’s behavior and attributes.",
    image: monsterimg,
    technologies: ["CSS", "JavaScript", "React", "Redux"],
    live: "https://classy-banoffee-260a19.netlify.app/",
    repository: "https://github.com/AxelSoler/monster-hunter-world",
    position: "Full Stack Developer",
    company: "Microverse"
  },
  {
    name: "Super Budget App",
    description:
      "A mobile-first budgeting app that helps users track their expenses and categorize transactions. Built with Ruby on Rails and tested with RSpec to ensure performance and reliability.",
    image: budgetimg,
    technologies: ["CSS", "Ruby", "Rails", "RSpec"],
    live: "private",
    repository: "https://github.com/AxelSoler/super-budget-app",
    position: "Full Stack Developer",
    company: "Microverse"
  },
  {
    name: "Space Travelers Hub",
    description:
      "A space-themed web app where users can book missions and join rockets. It simulates a commercial space travel experience, integrating Redux for efficient state management.",
    image: spaceimg,
    technologies: ["CSS", "JavaScript", "React", "Redux"],
    live: "https://spiffy-marigold-45bbb6.netlify.app/",
    repository: "https://github.com/AxelSoler/space-travelers-hub",
    position: "Front End Developer",
    company: "Microverse"
  },
  {
    name: "Cocktail",
    description:
      "A dynamic interface to explore Margarita cocktail recipes using an external API. Users can view detailed descriptions, leave likes, and add comments to their favorite drinks.",
    image: cocktailimg,
    technologies: ["CSS", "HTML", "JavaScript"],
    live: "https://axelsoler.github.io/JavaScript-capstone-project/dist/",
    repository: "https://github.com/AxelSoler/JavaScript-capstone-project",
    position: "Front End Developer",
    company: "Microverse"
  },
  {
    name: "Sonic Leaderboard",
    description:
      "A real-time leaderboard application inspired by Sonic, where players can submit and view scores. Fully responsive and powered by asynchronous JavaScript and an external API.",
    image: sonicimg,
    technologies: ["CSS", "HTML", "JavaScript"],
    live: "https://axelsoler.github.io/Leaderboard/dist/",
    repository: "https://github.com/AxelSoler/Leaderboard",
    position: "Front End Developer",
    company: "Microverse"
  },
  {
    name: "Mycroverse-2.0",
    description:
      "A sleek and modern landing page promoting an educational program. Highlights the course benefits and encourages visitors to enroll through interactive design.",
    image: mycroverseimg,
    technologies: ["CSS", "HTML", "JavaScript"],
    live: "https://axelsoler.github.io/HTML-CSS-JavaScript-capstone-project---Mycroverse-2.0/",
    repository:
      "https://github.com/AxelSoler/HTML-CSS-JavaScript-capstone-project---Mycroverse-2.0",
    position: "Front End Developer",
    company: "Microverse"
  }
];

export default projects;
