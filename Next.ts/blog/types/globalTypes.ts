import { ParsedUrlQuery } from 'querystring';

// Local Types

interface Content {
   content: {
      ogloszenia: Announcements[];
      turystyka: Turystyka[];
   }[];
}
//React
declare module 'react' {
   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      possition?: number;
   }
}

//Next
//    const { page } = context.params as IParams;
export interface IParams extends ParsedUrlQuery {
   page: string;
}

//My export Types
export interface Turystyka {
   id: string;
   date: string;
   image: string;
   title: string;
   description: string;
}

export interface Announcements extends Turystyka {
   isfavorite: boolean;
   isFeature: boolean;
}

export interface PropsChildren {
   children: React.ReactNode;
}

export interface MenuStructure {
   id: string;
   title: string;
   href: string;
}

export interface SliderStructure {
   id: string;
   src: string;
   nazwaFirmy: string;
}

export interface DataStructure extends Content {
   menu: MenuStructure[];
   slider: SliderStructure[];
}
