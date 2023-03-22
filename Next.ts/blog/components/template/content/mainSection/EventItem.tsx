import Image from 'next/image';
import { useRouter } from 'next/router';

import React from 'react';

import Button from '../../../ui/Button';
import classes from './EventsItems.module.css';

const EventItem: React.FC<{ id: string; image: string; title: string; description: string; date: string }> = (
   props
) => {
   const router = useRouter();

   return (
      <React.Fragment>
         <div className={classes.img}>
            <Image src={props.image} alt={props.title} fill sizes="100%"></Image>
         </div>
         <div className={classes.text}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p className={classes.date}>{props.date}</p>

            {router.query.slug!.length === 1 && router.query.slug ? (
               <Button className={classes.link} href={`/${router.query.slug[0]}/${props.id}`}>
                  Czytaj więcej
               </Button>
            ) : (
               <Button className={classes.btn} onClick={router.back}>
                  Powrót do poprzedniej strony
               </Button>
            )}
         </div>
      </React.Fragment>
   );
};
export default EventItem;
