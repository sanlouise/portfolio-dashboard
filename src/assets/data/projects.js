import dressy from '../images/projects/dressy.png';
import conscioux from '../images/projects/conscioux_s.png';
import weather_app from '../images/projects/weather_api_s.png';

const projects = [
  {
    id: 1,
    name: "React Ecommerce App",
    technologies: ["React", " & Redux"],
    description: "This is a test",
    points: [
      "Developed from scratch with scaffolding.",
      "Designed UI with custom CSS, Sass, Twitter Bootstrap and JavaScript/JQuery.",
      "Used Yahoo API for tracking stock markets.",
      "Applied Devise gem for user authentication.",
      "Implemented auto complete search function using AJAX.",
      "Deployed application using Heroku with PostgreSQL."
    ],
    src: dressy,
    github: "https://github.com/sanlouise/ecommerce-react/",
    url: "https://ecommerce-react-redux.herokuapp.com/",
  },
  {
    id: 2,
    name: "React Component Library",
    technologies: ["React"],
    description: "Published to NPM as sl-react-components-library",
    points: [
      "Developed from scratch with scaffolding.",
      "Designed UI with custom CSS, Sass, Twitter Bootstrap and JavaScript/JQuery.",
      "Used Yahoo API for tracking stock markets.",
      "Applied Devise gem for user authentication.",
      "Implemented auto complete search function using AJAX.",
      "Deployed application using Heroku with PostgreSQL."
    ],
    src: "https://github.com/sanlouise/ecommerce-react/raw/master/src/assets/images/readme.png",
    github: "https://github.com/sanlouise/react-components-library",
    url: "",
  },
  {
    id: 3,
    name: "React Weather App",
    technologies: ["React", " & Redux", " & Highcharts"],
    description: "Users can retrieve the temperature, pressure and humidity of their favorite cities.",
    points: [
      "Built with React and Redux best practices in mind.",
      "Integrated Openweather API for data retrieval.",
      "Used Axios for AJAX requests.",
      "Used Google Maps API for location rendering.",
      "Used Highcharts for charts.",
    ],
    src: weather_app,
    github: "https://github.com/sanlouise/weather-app",
    url: "",
  },
  {
    id: 4,
    name: "Conscioux",
    technologies: ["Ruby on Rails"],
    description: "Users can easily search for high-quality, eco-friendly cosmetics.",
    points: [
      "Designed UI with custom css and JavaScript/JQuery.",
      "Applied Devise gem for user authentication.",
      "Implemented auto complete search function using AJAX.",
      "Deployed application using Heroku with PostgreSQL."
    ],
    src: conscioux,
    github: "https://github.com/sanlouise/conscioux",
    url: "http://www.conscioux.com/",
  },
  {
    id: 5,
    name: "Stock Tracker",
    technologies: ["Ruby on Rails"],
    description: "Users can easily search and track stocks. They can also follow what their friends are tracking.",
    points: [
      "Developed from scratch with scaffolding.",
      "Designed UI with custom css and JavaScript/JQuery.",
      "Used Yahoo API for tracking stock markets.",
      "Applied Devise gem for user authentication.",
      "Implemented auto complete search function using AJAX.",
      "Deployed application using Heroku with PostgreSQL."
    ],
    src: "http://www.sandrahallie.com/assets/Stocktracker_s-515adf869ce1d5580da6ae381a9bdc89adadbee0715fb366aba1f10a9e3e5bd9.jpg",
    github: "https://github.com/sanlouise/stocktracker",
    url: "http://socialstocktracker.herokuapp.com/",
  },

];

export default projects;
