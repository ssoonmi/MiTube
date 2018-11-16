import React from 'react';
import AuthSection from './auth_section';

const Nav = ({loggedIn, logout, username, email, channelId, iconUrl}) => {
  return (
    <nav>
      <div className="nav-left-section">
        <div><i className="fas fa-bars fa-2x"></i></div>
        <i className="fab fa-youtube"></i>
        <a href='#/'><img src={window.logo}/></a>
      </div>
      <div className="nav-search"></div>
      <AuthSection channelId={channelId} loggedIn={loggedIn} logout={logout} username={username} iconUrl={iconUrl} email={email}/>
    </nav>
  );
};

export default Nav;
