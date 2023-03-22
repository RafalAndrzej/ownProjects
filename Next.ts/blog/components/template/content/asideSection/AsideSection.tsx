import Image from 'next/image';

import { useContext } from 'react';

import DeviceTypeContext from '../../../../context/DeviceTypeContext';
import AppStateContext from '../../../../context/AppStateContext';

import ItemsList from '../../../navigation/menuList/ItemsList';

import { MenuStructure } from '../../../../types/globalTypes';
import classes from './AsideSection.module.css';

const AsideSection: React.FC<{ menuList: MenuStructure[] }> = (props) => {
   const deviceCtx = useContext(DeviceTypeContext);
   const appStateCtx = useContext(AppStateContext);

   let assideMenyClass = '';
   if (deviceCtx.isMobilDevice) {
      assideMenyClass = appStateCtx.isVisible
         ? `${classes.asideMenu} ${classes.asideMenuMobile} ${classes['asideMenuMobile-visible']}`
         : `${classes.asideMenu} ${classes.asideMenuMobile} ${classes['asideMenuMobile-hidden']}`;
   } else {
      assideMenyClass = classes.asideMenu;
   }

   return !appStateCtx.isLogin ? (
      <div className={assideMenyClass}>
         <ItemsList content={props.menuList}></ItemsList>
      </div>
   ) : (
      <section className={assideMenyClass}>
         <div className={classes.box}>
            <Image src="/images/person.jpg" alt="Person Image" width={80} height={80}></Image>
            <p>Mariusz Loremipsum </p>
         </div>

         <ItemsList content={props.menuList}></ItemsList>
      </section>
   );
};

export default AsideSection;
