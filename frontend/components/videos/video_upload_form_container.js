import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import VideoForm from './video_form';
import {createVideo} from '../../actions/videos/videos_actions';

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId
  const video = {
    title: '',
    description: '',
    url: '',
    file: '',
    thumbnail: '',
  };
  return {
    video,
    channelId
  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    submitForm: (video, channelId) => dispatch(createVideo(video, channelId, history)),
    history
  }
};

export default withRouter(connect(msp, mdp)(VideoForm))
