import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ChannelButton from '../util/channel_button';

class SideNav extends React.Component {
  componentDidMount() {
    const {showModal, openModal, currentUserId, fetchSubscriptions, subscribedChannelIds} = this.props;
    if (showModal) {
      openModal();
    }
    if (currentUserId && !subscribedChannelIds) {
      fetchSubscriptions(currentUserId);
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
    const {showModal, hideSideNav, sideNav, currentUserId, subscribedChannelIds, channels} = this.props;
    const modalStyle = showModal ? {top: '0', height: '100vh'} : {};
    let subscriptions;
    if (currentUserId && subscribedChannelIds) {
      subscriptions = subscribedChannelIds.map((id) => {
        const channel = channels[id];
        return (
          <Link key={id} to={`/channels/${id}`}>
            <li className="side-nav-link">
              <span><ChannelButton classNames={"profile-btn"} channel={channel} size={'24px'}/></span>
              {channel.name}
            </li>
          </Link>
        );
      });
    }
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
              <NavLink exact to="/">
                <li className="side-nav-link">
                  <span><i className="fas fa-home"></i></span>
                  Home
                </li>
              </NavLink>
              <NavLink to="/trending">
                <li className="side-nav-link">
                  <span><i className="fas fa-fire"></i></span>
                  Trending
                </li>
              </NavLink>
              <NavLink to="/subscriptions">
                <li className="side-nav-link">
                  <span><i className="fas fa-users"></i></span>
                  Subscriptions
                </li>
              </NavLink>
            </section>
            <section>
              <li className="side-nav-li-header">
                <Link to="/">
                  LIBRARY
                </Link>
              </li>
              <NavLink to="/history">
                <li className="side-nav-link">
                  <span><i className="fas fa-history"></i></span>
                  History
                </li>
              </NavLink>
              <NavLink to="/liked_videos">
                <li className="side-nav-link">
                  <span><i className="fas fa-thumbs-up"></i></span>
                  Liked videos
                </li>
              </NavLink>
            </section>
            <section>
              <li className="side-nav-li-header">
                <Link to="/subscriptions">
                  SUBSCRIPTIONS
                </Link>
              </li>
              {subscriptions}
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