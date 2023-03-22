import { useContext } from 'react';
import DeviceTypeContext from '../../context/DeviceTypeContext';

import HamburgerBox from './hamburger/HamburgerBox';
import Logo from './logo/Logo';
import MenuList from './menuList/MenuList';

import classes from './Navigation.module.css';

const NavigationPage: React.FC<{ onClickFn: () => void; currentSheme: boolean }> = (props) => {
   const deviceCtx = useContext(DeviceTypeContext);

   return (
      <header className={classes.header}>
         <aside></aside>
         {deviceCtx.isMobilDevice ? (
            <nav className={classes['mobile-nav']}>
               <HamburgerBox />
               <MenuList />
               <Logo onClickFn={props.onClickFn} currentSheme={props.currentSheme} />
            </nav>
         ) : (
            <nav>
               <HamburgerBox />
               <MenuList />
               <Logo onClickFn={props.onClickFn} currentSheme={props.currentSheme} />
            </nav>
         )}
      </header>
   );
};

export default NavigationPage;
