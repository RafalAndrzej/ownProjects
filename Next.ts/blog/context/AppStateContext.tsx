import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

interface AppState {
   isVisible: boolean;
   HideAsideMenu: React.MouseEventHandler<HTMLLIElement> | undefined;
   onClickMenuVisibleHandler: React.MouseEventHandler<HTMLDivElement> | undefined;

   isLogin: boolean;
   onClickLoginHandler: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const AppStateContext = React.createContext<AppState>({
   isVisible: false,
   HideAsideMenu: () => {},
   onClickMenuVisibleHandler: () => {},

   isLogin: false,
   onClickLoginHandler: () => {},
});

export const AppStateContextProvider: React.FC<PropsChildren> = ({ children }) => {
   const [isVisible, setIsVisible] = useState(false);
   const [isLogin, setIsLogin] = useState(false);

   function onClickMenuVisibleHandler() {
      setIsVisible((prev) => !prev);
   }
   function HideAsideMenu() {
      setIsVisible(false);
   }

   function onClickLoginHandler() {
      setIsLogin((prev) => !prev);
   }

   return (
      <AppStateContext.Provider
         value={{
            isVisible,
            onClickMenuVisibleHandler,
            isLogin,
            HideAsideMenu,
            onClickLoginHandler,
         }}>
         {children}
      </AppStateContext.Provider>
   );
};

export default AppStateContext;
