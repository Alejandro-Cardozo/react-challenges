import { useEffect, useState } from 'react'

const useVolume = (audioRef) => {
  const [volume, setVolume] = useState(60)
  const [muteVolume, setMuteVolume] = useState(false)

  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
      audioRef.current.muted = muteVolume
    }
  }, [audioRef, volume, muteVolume])

  return [volume, muteVolume, handleVolumeChange, setMuteVolume]
}

export default useVolume
