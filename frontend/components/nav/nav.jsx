import React from 'react';
import AuthSection from './auth_section';
import NavSearchContainer from './nav_search_container';

const Nav = (props) => {
  // <div><i className="fas fa-bars fa-2x"></i></div>
  const {sideNav, showSideNav, hideSideNav, showModal} = props;
  const toggleSideNav = sideNav ? hideSideNav(showModal) : showSideNav(showModal);

  return (
    <nav>
      <div className="nav-left-section">
        <i onClick={toggleSideNav.bind(this)} className="fas fa-bars"></i>
        <i className="fab fa-youtube"></i>
        <a href='#/'><img src={window.logo}/></a>
      </div>
      <NavSearchContainer />
      <AuthSection {...props}/>
    </nav>
  );
};

export default Nav;
