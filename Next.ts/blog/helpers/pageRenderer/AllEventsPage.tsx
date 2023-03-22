import React, { useState, useEffect } from 'react';

import EventsItems from '../../components/template/content/mainSection/EventsItems';

import { Announcements, Turystyka } from '../../types/globalTypes';

// Event not older than: {numberOfDays}
const numberOfDays = 30;
const newsFromNumberOfDays = numberOfDays * 24 * 60 * 60 * 1000;

const AllEventsPage: React.FC<{ content: (Announcements & Turystyka)[] }> = (props) => {
   useEffect(() => {
      setCurrentDay(new Date().getTime() - newsFromNumberOfDays);
   }, []);

   // Set current data for latest events
   const [currentDay, setCurrentDay] = useState<number>(0);

   // remove filter by data from events
   const [allEvents, setAllEvents] = useState(false);

   function allEvenstHandler() {
      setAllEvents((prev) => !prev);
   }

   return (
      <React.Fragment>
         <h2>{!allEvents ? `Wpisy z ostatnich ${numberOfDays} dni` : 'Wszystkie wpisy'}</h2>
         <EventsItems
            content={props.content}
            data={currentDay}
            removeFilterHandler={allEvenstHandler}
            allEventsFilter={allEvents}></EventsItems>
      </React.Fragment>
   );
};

export default AllEventsPage;
