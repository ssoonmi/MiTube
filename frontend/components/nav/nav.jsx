import React from 'react';
import AuthSection from './auth_section';

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-left-section">
        <div><i className="fas fa-bars fa-2x"></i></div>
        <i className="fab fa-youtube"></i>
        <a href='#/'><img src={window.logo}/></a>
      </div>
      <div className="nav-search"></div>
      <AuthSection {...props}/>
    </nav>
  );
};

export default Nav;
