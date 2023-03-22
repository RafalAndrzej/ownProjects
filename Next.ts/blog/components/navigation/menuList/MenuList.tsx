import { useState, useEffect } from 'react';

import ItemsList from './ItemsList';

import { MenuStructure, DataStructure } from '../../../types/globalTypes';
import classes from './MenuList.module.css';

const MenuList: React.FC = () => {
   const [menuList, setMenuList] = useState<MenuStructure[]>([]);

   useEffect(() => {
      async function mainManyListRender(start: number, end: number) {
         const response = await fetch('/data/demo.json');
         const data: DataStructure = await response.json();
         return data.menu.slice(start, end);
      }
      mainManyListRender(0, 3).then((menuList) => setMenuList(menuList));
   }, []);

   return <ItemsList content={menuList} className={classes.list}></ItemsList>;
};

export default MenuList;
