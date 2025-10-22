import * as React from "react";
import { useMediaQuery } from "react-responsive";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

const MobileContext = React.createContext<boolean>(false);
const TabletContext = React.createContext<boolean>(false);
const LandscapeContext = React.createContext<boolean>(false);

export const DeviceProvider: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_BREAKPOINT - 1}px)` });
  const isTablet = useMediaQuery({ query: `(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: ${TABLET_BREAKPOINT - 1}px)` });
  const isLandscape = useMediaQuery({ query: `(orientation: landscape)` });

  return (
    <MobileContext.Provider value={isMobile}>
      <TabletContext.Provider value={isTablet}>
        <LandscapeContext.Provider value={isLandscape}>
          {children}
        </LandscapeContext.Provider>
      </TabletContext.Provider>
    </MobileContext.Provider>
  );
};

export const useIsMobile = () => {
  return React.useContext(MobileContext);
};

export const useIsTablet = () => {
  return React.useContext(TabletContext);
};

export const useIsLandscape = () => {
  return React.useContext(LandscapeContext);
};
