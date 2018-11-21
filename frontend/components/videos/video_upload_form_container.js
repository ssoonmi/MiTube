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
  const errors = state.errors.videos
  return {
    video,
    channelId,
    errors,
  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    submitForm: (video, channelId, enableSubmit) => dispatch(createVideo(video, channelId, history, enableSubmit)),
    history
  }
};

export default withRouter(connect(msp, mdp)(VideoForm))
