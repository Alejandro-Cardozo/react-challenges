import { Navigate, useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';
import videos from '../data/videos';
import YouTube from 'react-youtube';

const VideoPage = () => {
  const { videoId } = useParams();

  const video = videos.filter((el) => el.id === videoId)[0];

  // Handling Invalid IDs
  if (!video) {
    return <Navigate to='/404' replace />;
  }

  const { title, youtubeId } = video;

  const opts = {
    height: '500',
    width: '880',
    title: title,
    frameBorder: 0,
    allowFullScreen: true,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='container'>
      <YouTube videoId={youtubeId} title={title} opts={opts} />
      <h2>{title}</h2>
      <div className='commentList'>
        <NewComment videoId={videoId} />
        <CommentList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
