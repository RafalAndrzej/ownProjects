import Router, { useRouter } from 'next/router';

import React from 'react';

import EventItem from '../../components/template/content/mainSection/EventItem';

import { Announcements, Turystyka } from '../../types/globalTypes';
import classes from './pageRenderer.module.css';

const SelectedEventsPage: React.FC<{ content: (Announcements & Turystyka)[] }> = (props) => {
   const router = useRouter();

   const eventSelected = props.content.find((el) => el.id === router.query.slug![1]) as Announcements &
      Turystyka;

   return (
      <div className={classes.allPageContent}>
         <EventItem
            image={eventSelected.image}
            description={eventSelected.description}
            date={eventSelected.date}
            title={eventSelected.title}
            id={eventSelected.id}></EventItem>
      </div>
   );
};

export default SelectedEventsPage;
