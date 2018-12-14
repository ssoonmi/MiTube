import React from 'react';
import MainSwitches from './main_switches';

class Main extends React.Component {
  render() {
    const { sideNav, modal } = this.props;
    const listStyle = (sideNav && !modal) ? { marginLeft: "calc(240px)" } : {};
    return (
      <main style={listStyle}>
        <MainSwitches/>
      </main>
    );
  }
}

export default Main;