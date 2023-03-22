import React, { useState } from 'react';

import { PropsChildren } from '../types/globalTypes';

interface DeviceContextObj {
   isMobilDevice: boolean;
   changeDeviceType: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeviceTypeContext = React.createContext<DeviceContextObj>({
   isMobilDevice: false,
   changeDeviceType: () => {},
});

export const DeviceTypeContextProvider: React.FC<PropsChildren> = (props) => {
   const [isMobilDevice, setIsMobilDevice] = useState(false);

   return (
      <DeviceTypeContext.Provider
         value={{
            isMobilDevice,
            changeDeviceType: setIsMobilDevice,
         }}>
         {props.children}
      </DeviceTypeContext.Provider>
   );
};

export default DeviceTypeContext;
