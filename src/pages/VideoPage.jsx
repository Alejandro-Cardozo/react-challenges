import { useParams } from 'react-router';
import CommentList from '../components/CommentList';
import videos from '../data/videos';

const VideoPage = () => {
  const { videoId } = useParams();

  const video = videos.filter((el) => el.id === videoId)[0];

  return (
    <div div className='container'>
      <iframe
        className='youtube'
        src={video.url}
        title={video.title}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <h2>{video.title}</h2>
      <div className='commentList'>
        // new comment component
        <CommentList videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
