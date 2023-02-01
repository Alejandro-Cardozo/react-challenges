import { useNavigate } from "react-router-dom";
import classes from './VideoThumbnail.module.css';

const VideoThumbnail = ({ video }) => {
  const { id, title, thumbnail } = video;

  let navigate = useNavigate();
  function handleClick() {
    navigate(`/watch/${id}`);
  }

  return (
    <div onClick={handleClick} className={classes.thumbnail}>
      <figure>
        <img src={thumbnail} alt={title} style={{width:'100%'}} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};

export default VideoThumbnail;
