import VideoThumbnail from '../components/VideoThumbnail';
import videos from '../data/videos'

const MainPage = () => {
  return (
    <div className='container'>
      <h1>Your favorite videos are here</h1>
      <div className="videoList">
        {videos.map((video) => (
          <VideoThumbnail key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
