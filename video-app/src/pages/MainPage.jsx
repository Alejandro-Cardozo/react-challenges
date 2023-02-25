import VideoThumbnail from '../components/VideoThumbnail';
import videos from '../data/videos'
import Header from '../components/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <h1>Your favorite videos are here</h1>
        <div className="videoList">
          {videos.map((video) => (
            <VideoThumbnail key={video.id} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
