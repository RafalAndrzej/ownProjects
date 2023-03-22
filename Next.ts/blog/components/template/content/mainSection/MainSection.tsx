import { useContext } from 'react';

import AppStateContext from '../../../../context/AppStateContext';

import { PropsChildren } from '../../../../types/globalTypes';

import classes from './MainSection.module.css';

const MainSection: React.FC<PropsChildren> = (props) => {
   const appStateCtx = useContext(AppStateContext);

   return appStateCtx.isVisible ? (
      <section onClick={appStateCtx.onClickMenuVisibleHandler} className={classes.mainSection}>
         {props.children}
      </section>
   ) : (
      <section className={classes.mainSection}>{props.children}</section>
   );
};

export default MainSection;
