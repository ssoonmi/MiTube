import React from 'react';

class ChannelSubscriptionBtn extends React.Component {
  constructor(props) {
    super(props);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  subscribe(e) {
    e.preventDefault();
    const {subscribe, channel, currentUserId, history} = this.props;
    if (currentUserId) {
      subscribe(currentUserId, channel.id);
    } else {
      history.push('/session/new');
    }
  }

  unsubscribe(e) {
    e.preventDefault();
    const {unsubscribe, currentUserId, channel} = this.props;
    unsubscribe(currentUserId, channel.id);
  }
  
  render() {
    const {channel, homePage} = this.props;
    return (
      <>
        { channel.subscribed ? 
          homePage ? 
              (null) :
              (<div
                className="unsubscribe-button"
                onClick={this.unsubscribe}>
                SUBSCRIBED <span>{channel.numSubscribers}</span>
              </div>)
          : (
            <div 
              className="subscribe-button"
              onClick={this.subscribe}>
              SUBSCRIBE <span>{channel.numSubscribers}</span>
            </div>
          )
        }
      </>
    );
  }
}

export default ChannelSubscriptionBtn;