// Icons
import { BsMusicNoteBeamed } from 'react-icons/bs'

// Styles
import classes from './DisplayTrack.module.css'

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds
  }

  return (
    <>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className={classes['audio-info']}>
        <div className={classes['audio-image']}>
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt='audio avatar' />
          ) : (
            <div className={classes['icon-wrapper']}>
              <span className={classes['audio-icon']}>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div>
          <p className={classes.title}>{currentTrack.title}</p>
          <p className={classes.text}>{currentTrack.author}</p>
        </div>
      </div>
    </>
  )
}
export default DisplayTrack
