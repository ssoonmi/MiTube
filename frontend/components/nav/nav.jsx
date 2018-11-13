import React from 'react';
import AuthSection from './auth_section';

const Nav = ({loggedIn}) => {
  return (
    <nav>
      <AuthSection loggedIn={loggedIn}/>
    </nav>
  );
};

export default Nav;
