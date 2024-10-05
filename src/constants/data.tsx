import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { GoArrowRight } from "react-icons/go";

import heroImage from "../assets/heroImg.png";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";
import project10 from "../assets/project10.jpg";
import project11 from "../assets/project11.jpg";
import project12 from "../assets/project12.jpeg";
import project13 from "../assets/project13.jpeg";
import project14 from "../assets/project14.jpeg";
import project15 from "../assets/project15.jpeg";
import project16 from "../assets/project16.jpeg";
import project17 from "../assets/project17.jpeg";
import project18 from "../assets/project18.jpeg";
import project19 from "../assets/project19.jpeg";
import project20 from "../assets/project20.jpeg";


import aboutImage1 from "../assets/abt.png";
import aboutImage2 from "../assets/abt2.png";
import video from "../assets/video.mp4";

import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpeg";
import m7 from "../assets/m7.jpg";
import m8 from "../assets/m8.jpeg";
import m9 from "../assets/m9.jpg";
import m10 from "../assets/m10.jpg";

import interna from "../assets/Interna.png";


export const MARQUEE = [
  {
    id:1,
    imgSrc: m1
  },
  {
    id:2,
    imgSrc: m2
  },
  {
    id:3,
    imgSrc: m3
  },
  {
    id:4,
    imgSrc: m4
  },
  {
    id:5,
    imgSrc: m5
  },
  {
    id:6,
    imgSrc: m6
  },
  {
    id:7,
    imgSrc: m7
  },
  {
    id:8,
    imgSrc: m8
  },
  {
    id:9,
    imgSrc: m9
  },
  {
    id:10,
    imgSrc: m10
  },
]

export const LINKS = [
  { id: "/", name: "Home" },
  { id: "/portfolio", name: "Portfolio" },
  { id: "#contact", name: "Contact" },
];


export const HERO = {
    title: "Your Dream, Our Expertise",
    imgSrc: heroImage,
    description: "The Home of your Dreams, brought to life",
    buttonText: "Contact Us",
    link: "/contact",
    BtnIcon: GoArrowRight,
  };


export const PROJECTS = [
    {
      id: 1,
      title: "Street PhotoGraphy",
      imgSrc: project1,
      link: "https://example.com/ecommerce-website",
    },
    {
      id: 2,
      title: "Digital Art",
      imgSrc: project2,
      link: "https://example.com/social-media-app",
    },
    {
      id: 3,
      title: "Videography",
      imgSrc: project3,
      link: "https://example.com/portfolio-website",
    },
    {
      id: 4,
      title: "Concept Photography",
      imgSrc: project4,
      link: "https://example.com/blog-platform",
    },
    {
      id: 5,
      title: "Virtual Reality",
      imgSrc: project5,
      link: "https://example.com/task-management-tool",
    },
    {
      id: 6,
      title: "Fashion Design",
      imgSrc: project6,
      link: "https://example.com/online-learning-platform",
    },
    {
      id: 7,
      title: "My Books",
      imgSrc: project7,
      link: "https://example.com/recipe-app",
    },
    {
      id: 8,
      title: "Modelling",
      imgSrc: project8,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 9,
      title: "Modelling",
      imgSrc: project9,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 10,
      title: "Modelling",
      imgSrc: project10,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 11,
      title: "Modelling",
      imgSrc: project11,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 12,
      title: "Modelling",
      imgSrc: project12,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 13,
      title: "Modelling",
      imgSrc: project13,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 14,
      title: "Modelling",
      imgSrc: project14,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 15,
      title: "Modelling",
      imgSrc: project15,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 16,
      title: "Modelling",
      imgSrc: project16,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 17,
      title: "Modelling",
      imgSrc: project17,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 18,
      title: "Modelling",
      imgSrc: project18,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 19,
      title: "Modelling",
      imgSrc: project19,
      link: "https://example.com/fitness-tracker",
    },
    {
      id: 20,
      title: "Modelling",
      imgSrc: project20,
      link: "https://example.com/fitness-tracker",
    },
  ];

export const ABOUT = {
  title: "About Us",
  description:
    "Whether it’s a cozy home or a sleek office space, we’re all about mixing creativity with a keen eye for detail to make sure your vision comes to life. With years of experience and a bunch of happy clients, we’re here to make the process fun and easy while designing spaces that feel just right for you.",
  video: video,
  image1: aboutImage1,
  image2: aboutImage2,
  buttonText: "Our Portfolio",
};

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  title: "Contact Us",
  description: "Feel free to reach out to us for any inquiries or collaboration opportunities.",
  address: "123 Main St, City, State, ZIP",
  phone: "+1 (123456-7890",
  email: "contact@example.com",
  imgSrc: interna,
};

export const PALLET = [
  {
    id: 2,
    color: "#E6DCD3",
    name: "first",
  },
  {
    id: 3,
    color: "#B4A79E",
    name: "second",
  },{
    id: 4,
    color: "#BDA18C",
    name: "third",
  },{
    id: 5,
    color: "#3F352C",
    name: "fourth",
  },{
    id: 6,
    color: "#000000",
    name: "fifth",
  },
]

// first: "#E3D8C8",
//   second: "#B2A697",
//   third: "#C4B8A4",
//   fourth: "#D9C4AA",
//   fifth: "#A59380",