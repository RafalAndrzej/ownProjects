import Image from 'next/image';

import { SliderStructure } from '../../types/globalTypes';
import classes from './SlidesPictures.module.css';

const SlidesPictures: React.FC<{
   visiblePictures: SliderStructure[];
   allPicture: SliderStructure[];
   possition: number;
}> = (props) => {
   return (
      <div className={classes.box}>
         {props.visiblePictures.map((el, key) => (
            <div key={el.id}>
               <Image src={el.src} alt={`picture ${props.possition + key}`} fill sizes="100%"></Image>
               <span>{props.allPicture[props.possition]?.nazwaFirmy}</span>
            </div>
         ))}
      </div>
   );
};
export default SlidesPictures;
