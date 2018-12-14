export const SHOW_SIDE_NAV = "SHOW_SIDE_NAV";
export const HIDE_SIDE_NAV = "HIDE_SIDE_NAV";
export const SHOW_SIDE_NAV_MODAL = "SHOW_SIDE_NAV_MODAL";
export const HIDE_SIDE_NAV_MODAL = "HIDE_SIDE_NAV_MODAL";

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

export const showSideNavModal = () => {
  return {
    type: SHOW_SIDE_NAV_MODAL,
  };
};

export const hideSideNavModal = () => {
  return {
    type: HIDE_SIDE_NAV_MODAL,
  };
};
