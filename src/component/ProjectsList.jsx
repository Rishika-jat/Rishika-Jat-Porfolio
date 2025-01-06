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
    photo: "src/assets/Projects/Todolist.png",
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
    photo: "src/assets/Projects/Add to cart.png",
    github: "https://github.com/rishika-jat/add-to-cart",
    liveDemo: "https://yourusername.github.io/add-to-cart"
  },
  {
    name:"IT Solution Website",
    description:"IT Solution showcase this site is designed to be fully flexible and adaptable to any device screen, providing a seamless experience across all platforms truly responsive design. 💻📱",
    technologies : [
        {icon:FaHtml5, label:"HTML5"},
        {icon:FaCss3Alt, label:"CSS3"},
        {icon:FaBootstrap, label:"Bootstrap"}
    ],
    photo:"src/assets/Projects/Boostrap_website.png",
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
    photo:"src/assets/Projects/ageCalculator.png",
    github:"https://github.com/Rishika-jat/IT-Solution-Website",
    liveDemo:"https://rishika-bootstrap-demo-website.netlify.app/"
  },
  
  {
    name:"E-Commerce",
    description:"The E-commerce  Project showcasing products with responsive design and filter options, shopping cart, and Wishlist. It offers basic user authentication enhancing shopping experience.",
    technologies : [
       {icon:FaReact, label:"ReactJS"},
       {icon:RiTailwindCssFill, label:"tailwindCSS"},
       {icon:SiRedux, label:"Redux"}
    ],
    photo:"src/assets/Projects/Ecommerce.png",
    github:"https://github.com/Rishika-jat/Ecommerce",
    liveDemo:"https://rishika-jat-ecommerce-web.netlify.app/"
  }
];
