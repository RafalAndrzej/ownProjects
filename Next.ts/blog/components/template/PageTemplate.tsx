import React, { useState, useEffect, useContext } from 'react';

import DeviceTypeContext from '../../context/DeviceTypeContext';

import { MenuStructure } from '../../types/globalTypes';
import AsideSection from './content/asideSection/AsideSection';
import MainSection from './content/mainSection/MainSection';

import classes from './PageTemplate.module.css';

const PageTemplate: React.FC<{ menuList: MenuStructure[]; children: React.ReactNode }> = (props) => {
   const deviceCtx = useContext(DeviceTypeContext);

   const [screenWidth, setScreenWidth] = useState<number | null>(null);

   useEffect(() => {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
      deviceCtx.changeDeviceType(screenWidth! < 700);
   }, [screenWidth, deviceCtx]);

   return (
      <React.Fragment>
         <aside className={classes.beginPage}></aside>
         <AsideSection menuList={props.menuList}></AsideSection>
         <MainSection>{props.children}</MainSection>
      </React.Fragment>
   );
};

export default PageTemplate;
