export const SHOW_SIDE_NAV = "SHOW_SIDE_NAV";
export const HIDE_SIDE_NAV = "HIDE_SIDE_NAV";

export const showSideNav = () => {
  return {
    type: SHOW_SIDE_NAV,
  };
};

export const hideSideNav = () => {
  return {
    type: HIDE_SIDE_NAV,
  };
};
