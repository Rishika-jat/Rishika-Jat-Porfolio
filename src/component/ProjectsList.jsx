import { FaHtml5, FaCss3Alt, FaJs,FaBootstrap ,FaReact} from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


export const ProjectsList = [
  {
    name: "To-Do List",
    description: "A fully functional To-Do List app with task addition, deletion, editing,  and store task in local storage, and filter options to sort by status—Pending, Done, and All.💻",
    technologies: [
      { icon: FaHtml5, label: "HTML5" },
      { icon: FaCss3Alt, label: "CSS3" },
      { icon: FaJs, label: "JavaScript" }
    ],
    photo: "/Todolist.png",
    github: "https://github.com/Rishika-jat/To-Do-List",
    liveDemo: "https://rishika-jat-to-do-list.netlify.app/"
  },
  {
    name: "Add to Cart",
    description: "A simple Add to Cart feature that allows users to add, increase, decrease, and remove items seamlessly, with real-time total price updates and order confirmation.",
    technologies: [
      { icon: FaHtml5, label: "HTML5" },
      { icon: FaCss3Alt, label: "CSS3" },
      { icon: FaJs, label: "JavaScript" }
    ],
    photo: "/Add to cart.png",
    github: "https://github.com/rishika-jat/add-to-cart",
    liveDemo: "https://rishika-jat-add-to-cart.netlify.app/"
  },
  {
    name:"IT Solution Website",
    description:"IT Solution showcase this site is designed to be fully flexible and adaptable to any device screen, providing a seamless experience across all platforms truly responsive design. 💻📱",
    technologies : [
        {icon:FaHtml5, label:"HTML5"},
        {icon:FaCss3Alt, label:"CSS3"},
        {icon:FaBootstrap, label:"Bootstrap"}
    ],
    photo:"/Boostrap_website.png",
    github:"https://github.com/Rishika-jat/IT-Solution-Website",
    liveDemo:"https://rishika-bootstrap-demo-website.netlify.app/"
  },
  {
    name:"Age Calculator",
    description:"The Age Calculator project is a app that calculates age from the user’s date of birth, displaying the result in years, months, and days. It features intuitive input handling .",
    technologies : [
        {icon:FaHtml5, label:"HTML5"},
        {icon:FaCss3Alt, label:"CSS3"},
        {icon:FaJs, label:"JavaScript"}
    ],
    photo:"/ageCalculator.png",
    github:"https://github.com/Rishika-jat/Age-Calculator",
    liveDemo:"https://rishika-jat-age-calculator.netlify.app/"
  },
  
  {
    name:"E-Commerce",
    description:"The E-commerce  Project showcasing products with responsive design and filter options, shopping cart, and Wishlist. It offers basic user authentication enhancing shopping experience.",
    technologies : [
       {icon:FaReact, label:"ReactJS"},
       {icon:RiTailwindCssFill, label:"tailwindCSS"},
       {icon:SiRedux, label:"Redux"}
    ],
    photo:"/Ecommerce.png",
    github:"https://github.com/Rishika-jat/Ecommerce",
    liveDemo:"https://rishika-jat-ecommerce-web.netlify.app/"
  },
  {
    name:"Weather App",
    description:"Weather App it features reusable UI components, real-time weather updates via Fetch API, and location-based highlights. You can check out a detailed 24-hour forecast and a 7-day forecast. The app uses Context API for seamless state management and is fully responsive, ensuring it works on all devices.",
    technologies:[
      {icon:FaReact, label:"ReactJS"},
       {icon:RiTailwindCssFill, label:"tailwindCSS"},
    ],
    photo:"/Weather App.png",
    github:"https://github.com/Rishika-jat/Weather-App",
    liveDemo:"https://rishika-jat-weather-app.netlify.app/"
  },
  {
    name:"Youtube Clone",
    description:"CSS. This project replicates the look and feel of YouTube's interface, featuring a responsive design that adapts seamlessly to different devices.",
    technologies:[
      {icon:FaHtml5, label:"HTML5"},
      {icon:FaCss3Alt, label:"CSS3"},
    ],
    photo:"/YoutubeClone.png",
    github:"https://github.com/Rishika-jat/Youtube-Clone",
    liveDemo:"https://rishika-jat-youtube-clone.netlify.app/"
  }
];
