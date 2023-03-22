import React, { useState, useEffect } from 'react';
import { SliderStructure } from '../../types/globalTypes';

import SlidesPictures from '../SlidesPictures/SlidesPictures';

import classes from './Slider.module.css';

const Slider: React.FC<{ allPictures: SliderStructure[] }> = (props) => {
   const [currentPicture, setCurrentPicture] = useState(0);

   // dots click
   function changePosition(e: React.MouseEvent<HTMLSpanElement>) {
      const event = e.currentTarget.getAttribute('possition');
      setCurrentPicture(+event! - 1);
   }

   const allPicture = props.allPictures;
   let visiblePictures: SliderStructure[];
   switch (true) {
      case currentPicture === 0:
         visiblePictures = allPicture.slice(0, currentPicture + 3);
         visiblePictures.unshift(allPicture[allPicture.length - 2], allPicture[allPicture.length - 1]);
         break;

      case currentPicture === 1:
         visiblePictures = allPicture.slice(0, currentPicture + 3);
         visiblePictures.unshift(allPicture[allPicture.length - 1]);
         break;

      case currentPicture === allPicture.length - 2:
         visiblePictures = allPicture.slice(-4);
         visiblePictures.push(allPicture[0]);
         break;

      //last one
      case currentPicture === allPicture.length - 1:
         visiblePictures = allPicture.slice(-3);
         visiblePictures.push(allPicture[0], allPicture[1]);
         break;

      default:
         visiblePictures = allPicture.slice(currentPicture - 2, currentPicture + 3);
   }

   useEffect(() => {
      function nextSlide() {
         if (currentPicture + 1 > allPicture.length - 1) {
            setCurrentPicture(0);
         } else {
            setCurrentPicture((curState) => curState + 1);
         }
      }
      const timer = setTimeout(() => {
         nextSlide();
      }, 5000);

      return () => {
         clearTimeout(timer);
      };
   }, [currentPicture, allPicture.length]);

   return (
      <React.Fragment>
         <SlidesPictures
            visiblePictures={visiblePictures}
            allPicture={props.allPictures}
            possition={currentPicture}></SlidesPictures>

         <div className={classes.dots}>
            {allPicture.map(function (el, key) {
               if (currentPicture + 1 === key + 1) {
                  return (
                     <span
                        key={el.id}
                        possition={key + 1}
                        className={classes.active}
                        onClick={changePosition}></span>
                  );
               } else {
                  return <span key={el.id} possition={key + 1} onClick={changePosition}></span>;
               }
            })}
         </div>
      </React.Fragment>
   );
};

export default Slider;
