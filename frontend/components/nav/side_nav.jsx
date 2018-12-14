import React from 'react';
import {Link} from 'react-router-dom';

class SideNav extends React.Component {
  componentDidMount() {
    if (this.props.showModal) {
      this.props.openModal();
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.sideNav != this.props.sideNav && !this.props.sideNav) {
      this.props.hideSideNav();
      if (this.props.showModal) {
        this.props.closeModal();
      }
    } else if (this.props.showModal) {
      if(oldProps.modal != this.props.modal && !this.props.modal && this.props.sideNav) {
        this.props.hideSideNav();
      }
    } else if (oldProps.sideNav != this.props.sideNav && this.props.sideNav) {
      this.props.showSideNav();
      if (this.props.showModal) {
        this.props.openModal();
      }
    }
    
  }

  componentWillUnmount() {
    if (this.props.showModal) {
      this.props.closeModal();
    }
  }

  render() {
    const {showModal, hideSideNav, sideNav} = this.props;
    const modalStyle = showModal ? {top: '0', height: '100vh'} : {};
    if (sideNav) {
      return (
        <aside className="side-nav" style={modalStyle}>
          <ul>
            {showModal ?
              (
                <div className="side-nav-header">
                  <i onClick={hideSideNav} className="fas fa-bars"></i>
                  <i className="fab fa-youtube"></i>
                  <a href='#/'><img src={window.logo} /></a>
                </div>
              ): (null)
            }
            <section>
              <Link to="/">
                <li className="side-nav-link">
                  <span><i className="fas fa-home"></i></span>
                  Home
                </li>
              </Link>
              <Link to="/">
                <li className="side-nav-link">
                  <span><i className="fas fa-fire"></i></span>
                  Trending
                </li>
              </Link>
              <Link to="/">
                <li className="side-nav-link">
                  <span><i className="fas fa-users"></i></span>
                  Subscriptions
                </li>
              </Link>
            </section>
            <section>
              <li className="side-nav-li-header">
                <Link to="/">
                  LIBRARY
                </Link>
              </li>
              <Link to="/">
                <li className="side-nav-link">
                  <span><i className="fas fa-history"></i></span>
                  History
                </li>
              </Link>
              <Link to="/">
                <li className="side-nav-link">
                  <span><i className="fas fa-thumbs-up"></i></span>
                  Liked videos
                </li>
              </Link>
            </section>
            <section>
              <li className="side-nav-li-header">
                <Link to="/">
                  SUBSCRIPTIONS
                </Link>
              </li>
            </section>
          </ul>
        </aside>
      )
    } else {
      return (
        null
      );
    }
  }
}

export default SideNav;