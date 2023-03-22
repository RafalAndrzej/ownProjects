import React, { useEffect, useRef, RefObject, useState, useContext } from 'react';

import AppStateContext from '../../../context/AppStateContext';
import MenuItem from './MenuItem';

import { MenuStructure } from '../../../types/globalTypes';
import classes from './itemList.module.css';

const ItemsList: React.FC<{
   content: MenuStructure[];
   className?: string;
   ref?: RefObject<HTMLUListElement>;
}> = (props) => {
   const appStateCtx = useContext(AppStateContext);

   const containerRef = useRef() as RefObject<HTMLUListElement> | undefined;

   const [scroolY, setScrollY] = useState(0);
   const myHeight = scroolY > 200;

   function scroolFn() {
      setScrollY(window.scrollY);
   }

   if (myHeight) {
      containerRef?.current?.classList.add(`${classes.sticky}`);
   } else {
      containerRef?.current?.removeAttribute('class');
   }

   useEffect(() => {
      window.addEventListener('scroll', scroolFn);

      return () => {
         window.removeEventListener('scroll', scroolFn);
      };
   }, [myHeight]);

   if (props.className) {
      return (
         <ul className={props.className}>
            {props.content.map((menuItem) => (
               <li onClick={appStateCtx.HideAsideMenu} key={menuItem.id}>
                  <MenuItem href={menuItem.href} title={menuItem.title} />
               </li>
            ))}
         </ul>
      );
   }

   return (
      <React.Fragment>
         <ul ref={containerRef}>
            {props.content.map((menuItem) => (
               <li onClick={appStateCtx.HideAsideMenu} key={menuItem.id}>
                  <MenuItem href={menuItem.href} title={menuItem.title} />
               </li>
            ))}
            {!appStateCtx.isLogin && <div>Wymaga Logowania !</div>}
         </ul>
      </React.Fragment>
   );
};

export default ItemsList;
