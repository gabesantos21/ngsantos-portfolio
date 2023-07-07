import { NavItem, CardProps } from './interface';

const projects: Array<CardProps> = [
  {
    id: 1,
    title: 'Sample Project 1',
    tags: [
      'Javascript',
      'Typescript',
      'Angular',
      'NodeJs',
      'Javascript',
      'Typescript',
      'Angular',
      'NodeJs',
    ],
    img: 'https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in Iceland, and is one of the most popular sights in the park. It is surrounded by dark lava columns, which gave rise to its name. The base of this waterfall is noteworthy for its sharp rocks.',
  },
  {
    id: 3,
    title: 'Sample Project 2',
    tags: ['Javascript', 'Typescript', 'Angular', 'NodeJs'],
    img: 'https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in Iceland, and is one of the most popular sights in the park. It is surrounded by dark lava columns',
  },
  {
    id: 3,
    title: 'Sample Project 3',
    tags: ['Javascript', 'Typescript', 'Angular', 'NodeJs'],
    img: 'https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'The base of this waterfall is noteworthy for its sharp rocks.',
  },
  {
    id: 4,
    title: 'Sample Project 4',
    tags: ['Javascript', 'Typescript', 'Angular', 'NodeJs'],
    img: 'https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in Iceland, and is one of the most popular sights in the park. It is surrounded by dark lava columns, which gave rise to its name. The base of this waterfall is noteworthy for its sharp rocks.',
  },
  {
    id: 5,
    title: 'Sample Project 5',
    tags: ['Javascript', 'Typescript', 'Angular', 'NodeJs'],
    img: 'https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in Iceland, and is one of the most popular sights in the park. It is surrounded by dark lava columns, which gave rise to its name. The base of this waterfall is noteworthy for its sharp rocks.',
  },
  {
    id: 6,
    title: 'Sample Project 6',
    tags: ['Javascript', 'Typescript', 'Angular', 'NodeJs'],
    img: 'https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description:
      'Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in Iceland, and is one of the most popular sights in the park. It is surrounded by dark lava columns, which gave rise to its name. The base of this waterfall is noteworthy for its sharp rocks.',
  },
];

const NAV_ITEMS: Array<NavItem> = [
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

export default {
  projects,
  NAV_ITEMS,
};
