import React from 'react';

import Button from '../../../ui/Button';

import { Announcements, Turystyka } from '../../../../types/globalTypes';
import classes from './EventsItems.module.css';
import EventItem from './EventItem';

const EventsItems: React.FC<{
   content: (Announcements & Turystyka)[];
   data?: number;
   removeFilterHandler: () => void;
   allEventsFilter: boolean;
}> = (props) => {
   function sortValue<T extends Announcements & Turystyka>() {
      return (a: T, b: T) => new Date(b.date).getTime() - new Date(a.date).getTime();
   }

   const sortAllEvents = props.content.sort(sortValue());
   const latestEvents = props.content
      .filter((events) => new Date(events.date).getTime() >= props.data!)
      .sort(sortValue());

   return (
      <React.Fragment>
         <ul className={classes.content}>
            {(props.allEventsFilter ? sortAllEvents : latestEvents).map((el) => (
               <li key={el.id} className={classes.items}>
                  <EventItem
                     image={el.image}
                     description={el.description}
                     date={el.date}
                     title={el.title}
                     id={el.id}></EventItem>
               </li>
            ))}
         </ul>
         <Button className={classes.btn} onClick={props.removeFilterHandler}>
            {props.allEventsFilter ? 'Powrót do najnowszych wpisów' : 'Zobacz pozostałe wpisy'}
         </Button>
      </React.Fragment>
   );
};

export default EventsItems;
