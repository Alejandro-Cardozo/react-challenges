import { Navigate, useParams } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';
import videos from '../data/videos';
import YouTube from 'react-youtube';
import Header from '../components/Header';

const VideoPage = () => {
  const { videoId } = useParams();

  const video = videos.filter((el) => el.id === videoId)[0];

  // Handling Invalid IDs
  if (!video) {
    return <Navigate to='/404' replace />;
  }

  const { title, youtubeId } = video;
  const [width] = useWindowSize();

  const opts = {
    height: width / 3,
    width: width / 2,
    title: title,
    frameBorder: 0,
    allowFullScreen: true,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const youtube = !width ? (
    <p>Loading...</p>
  ) : (
    <YouTube videoId={youtubeId} title={title} opts={opts} />
  );
  return (
    <>
      <Header />
      <div className='container'>
        {youtube}
        <h2>{title}</h2>
        <div className='commentList'>
          <NewComment videoId={videoId} />
          <CommentList videoId={videoId} />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
