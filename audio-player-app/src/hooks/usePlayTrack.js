import { useEffect } from 'react'

const usePlayTrack = (isPlaying, audioRef, currentTrack) => {
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, audioRef, currentTrack])
}

export default usePlayTrack
