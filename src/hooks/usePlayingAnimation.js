import { useEffect, useRef } from 'react'

const usePlayAnimation = (audioRef, progressBarRef, duration, setTimeProgress) => {
  const playAnimationRef = useRef()

  const repeat = () => {
    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    )

    playAnimationRef.current = window.requestAnimationFrame(repeat)
  }

  useEffect(() => {
    playAnimationRef.current = window.requestAnimationFrame(repeat)
    return () => window.cancelAnimationFrame(playAnimationRef.current)
  }, [audioRef, duration, progressBarRef, setTimeProgress])
}

export default usePlayAnimation
