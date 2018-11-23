import React from 'react';
import AuthSection from './auth_section';
import NavSearchContainer from './nav_search_container';

const Nav = (props) => {
  // <div><i className="fas fa-bars fa-2x"></i></div>
  return (
    <nav>
      <div className="nav-left-section">
        <i className="fab fa-youtube"></i>
        <a href='#/'><img src={window.logo}/></a>
      </div>
      <NavSearchContainer />
      <AuthSection {...props}/>
    </nav>
  );
};

export default Nav;
