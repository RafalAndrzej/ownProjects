import { useContext } from 'react';
import AppStateContext from '../../../context/AppStateContext';
import DeviceTypeContext from '../../../context/DeviceTypeContext';

import Button from '../../ui/Button';

import classes from './HamburgerBox.module.css';

const HamburgerBox: React.FC = () => {
   const deviceCtx = useContext(DeviceTypeContext);
   const appStateCtx = useContext(AppStateContext);

   return (
      <div className={classes.box}>
         {deviceCtx.isMobilDevice && !appStateCtx.isVisible && (
            <div onClick={appStateCtx.onClickMenuVisibleHandler} className={classes.svg}>
               <svg fill="var(--svg-color)" viewBox="0 0 100 100" width="50" height="50">
                  <rect
                     className={`${classes.svg} ${classes.line} ${classes.top}`}
                     width="50"
                     height="10"
                     x="5"
                     y="25"
                     rx="5"></rect>
                  <rect
                     className={`${classes.svg} ${classes.line} ${classes.middle}`}
                     width="50"
                     height="10"
                     x="5"
                     y="45"
                     rx="5"></rect>
                  <rect
                     className={`${classes.svg} ${classes.line} ${classes.bottom}`}
                     width="50"
                     height="10"
                     x="5"
                     y="65"
                     rx="5"></rect>
               </svg>
            </div>
         )}

         {deviceCtx.isMobilDevice && appStateCtx.isVisible && (
            <div
               onClick={appStateCtx.onClickMenuVisibleHandler}
               className={`${classes.svg} ${classes['menu-visible']}`}>
               <svg fill="var(--svg-color)" viewBox="0 0 100 100" width="50" height="50">
                  <rect
                     className={`${classes.line} ${classes.top}`}
                     width="50"
                     height="10"
                     x="10"
                     y="60"
                     rx="5"></rect>

                  <rect
                     className={`${classes.line} ${classes.bottom}`}
                     width="50"
                     height="10"
                     x="10"
                     y="30"
                     rx="5"></rect>
               </svg>
            </div>
         )}

         {appStateCtx.isLogin ? (
            <Button onClick={appStateCtx.onClickLoginHandler} className={classes.btn}>
               {deviceCtx.isMobilDevice ? 'Wyloguj' : 'Wyloguj się'}
            </Button>
         ) : (
            <Button onClick={appStateCtx.onClickLoginHandler} className={classes.btn}>
               {deviceCtx.isMobilDevice ? 'Zaloguj' : 'Zaloguj się'}
            </Button>
         )}
      </div>
   );
};

export default HamburgerBox;
