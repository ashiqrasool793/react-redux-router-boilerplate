import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 769 });
  return isNotMobile ? children : null;
};

export const isAndroid = false;
