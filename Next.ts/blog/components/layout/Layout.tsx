import { useContext, useState, useEffect } from 'react';
import DeviceTypeContext from '../../context/DeviceTypeContext';

import { PropsChildren } from '../../types/globalTypes';

import NavigationPage from '../navigation/Navigation';

import classes from './Layout.module.css';

const LayoutPage: React.FC<PropsChildren> = (props) => {
   const [darkSheme, setDarkSheme] = useState(false);
   useEffect(() => {
      const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkSheme(defaultDark);
   }, []);

   // Changing initial Scheme Color
   if (darkSheme) {
      document.body.setAttribute('dark-scheme', `${darkSheme}`);
   }
   function onClickChangeSchemeHandler() {
      if (darkSheme) {
         document.body.removeAttribute('dark-scheme');
      }
      setDarkSheme(!darkSheme);
   }

   const mobileCtx = useContext(DeviceTypeContext);

   if (mobileCtx.isMobilDevice) {
      return (
         <div className={`${classes.wrapper} ${classes['wrapper-mobile']}`}>
            <NavigationPage onClickFn={onClickChangeSchemeHandler} currentSheme={darkSheme} />
            {mobileCtx.isMobilDevice ? (
               <main className={`${classes.main} ${classes.mobilViev}`}>{props.children}</main>
            ) : (
               <main className={classes.main}>{props.children}</main>
            )}
         </div>
      );
   }

   return (
      <div className={classes.wrapper}>
         <NavigationPage onClickFn={onClickChangeSchemeHandler} currentSheme={darkSheme} />
         <main className={classes.main}>{props.children}</main>
      </div>
   );
};

export default LayoutPage;
