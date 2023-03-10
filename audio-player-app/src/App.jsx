// Components
import AudioPlayer from './components/AudioPlayer'
import TrackList from './components/TrackList'
// Hooks
import useTrack from './hooks/useTrack'
// Data
import { tracks } from './data/tracks'

function App() {
  const [currentTrack, handleNext, handlePrevious, handleSelected] =
    useTrack(tracks)

  return (
    <>
      <AudioPlayer {...{ currentTrack, handleNext, handlePrevious }} />
      <TrackList handleSelected={handleSelected} />
    </>
  )
}

export default App
