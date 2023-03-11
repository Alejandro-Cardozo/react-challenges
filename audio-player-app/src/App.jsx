// Components
import AudioPlayer from './components/AudioPlayer'
import TrackList from './components/TrackList'
// Hooks
import useTrack from './hooks/useTrack'
import { useState } from 'react'
// Data
import { tracks } from './data/tracks'

function App () {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, trackIndex, handleNext, handlePrevious, handleSelected] =
    useTrack(tracks)

  return (
    <>
      <AudioPlayer
        {...{
          currentTrack,
          handleNext,
          handlePrevious,
          isPlaying,
          setIsPlaying
        }}
      />
      <TrackList {...{ handleSelected, trackIndex, isPlaying }} />
    </>
  )
}

export default App
