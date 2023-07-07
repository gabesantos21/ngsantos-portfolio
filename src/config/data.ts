import { NavItem, CardProps } from './interface';
import {
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
} from 'react-icons/di';

import { BiLogoFirebase, BiLogoDjango, BiLogoPostgresql } from 'react-icons/bi';

const projects: Array<CardProps> = [
  {
    id: 1,
    title: 'Game Hub',
    tags: [DiMongodb, DiReact, DiNodejsSmall],
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description:
      "Welcome to the Game Hub, a vibrant online community where gaming enthusiasts come together to connect, discover, and explore their favorite games. Whether you're a casual gamer, an eSports enthusiast, or a game developer, this hub has something for everyone.",
  },
  {
    id: 2,
    title: 'E-commerce Website',
    tags: [DiJavascript1, DiAngularSimple, DiNodejsSmall],
    img: 'https://plus.unsplash.com/premium_photo-1670863088251-500151f2117b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80',
    description:
      'A fully functional e-commerce website built with React for the frontend, Node.js and Express for the backend. It includes features such as user authentication, product listing, shopping cart functionality, and payment integration.',
  },
  {
    id: 3,
    title: 'Social Media App',
    tags: [DiJavascript1, DiReact, DiMongodb],
    img: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description:
      'A social media application built using React for the frontend, Node.js for the backend, and MongoDB as the database. Users can create profiles, make posts, follow other users, and interact through comments and likes.',
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    tags: [DiJavascript1, DiReact],
    img: 'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description:
      'A weather forecast application built using React. It utilizes a weather API to provide real-time weather data for different locations. Users can search for cities and view detailed weather information such as temperature, humidity, and wind speed.',
  },
  {
    id: 5,
    title: 'Task Management App',
    tags: [DiJavascript1, DiReact, BiLogoFirebase],
    img: 'https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description:
      'A task management application built using Vue.js framework and Firebase as the backend. Users can create tasks, set deadlines, mark tasks as complete, and organize them into categories for efficient task management.',
  },
  {
    id: 6,
    title: 'Recipe Sharing Platform',
    tags: [DiPython, BiLogoDjango, BiLogoPostgresql],
    img: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    description:
      'A web platform built with Django and PostgreSQL that allows users to share and discover recipes. Users can create, browse, and search for recipes, as well as save their favorite recipes to their profile.',
  },
];

const navItems: Array<NavItem> = [
  {
    title: 'Download CV',
    href: '#',
  },
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/About',
  },
  {
    title: 'Projects',
    href: '/Projects',
  },
  {
    title: 'Contact',
    href: '/Contact',
  },
];

const credentials = {
  linkedIn: 'https://www.linkedin.com/in/nathaniel-gabriel-santos-45011b170/',
  github: 'https://github.com/gabesantos21',
};

export default {
  projects,
  navItems,
  credentials,
};
