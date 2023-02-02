import { useParams } from 'react-router';
import CommentList from '../components/CommentList';
import NewComment from '../components/NewComment';
import videos from '../data/videos';

const VideoPage = () => {
  const { videoId } = useParams();

  const video = videos.filter((el) => el.id === videoId)[0];

  return (
    <div className='container'>
      <iframe
        className='youtube'
        src={video.url}
        title={video.title}
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <h2>{video.title}</h2>
      <div className='commentList'>
        <NewComment videoId={videoId} />
        <CommentList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
