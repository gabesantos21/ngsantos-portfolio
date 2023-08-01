import { IconType } from 'react-icons';

export interface NavItem {
  title: string;
  href: string;
}

export interface CardProps {
  id: number;
  title: string;
  tags: IconType[];
  img: string;
  description: string;
}

export interface TechStackProps {
  id: number;
  name: string;
  logo: IconType;
}
