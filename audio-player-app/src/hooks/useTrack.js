import { useCallback, useState } from 'react'

const useTrack = (tracks) => {
  const [trackIndex, setTrackIndex] = useState(0)
  const [currentTrack, setCurrentTrack] = useState(tracks[0])

  const handleNext = useCallback(() => {
    const nextTrackIndex = (trackIndex + 1) % tracks.length
    setTrackIndex(nextTrackIndex)
    setCurrentTrack(tracks[nextTrackIndex])
  }, [trackIndex, tracks])

  const handlePrevious = useCallback(() => {
    const previousTrackIndex = trackIndex === 0 ? tracks.length - 1 : trackIndex - 1
    setTrackIndex(previousTrackIndex)
    setCurrentTrack(tracks[previousTrackIndex])
  }, [trackIndex, tracks])

  const handleSelected = useCallback((index) => {
    setTrackIndex(index)
    setCurrentTrack(tracks[index])
  }, [trackIndex, tracks])

  return [currentTrack, trackIndex, handleNext, handlePrevious, handleSelected]
}

export default useTrack
