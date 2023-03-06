// Hooks
import useSound from 'use-sound'

// Utilities
import onPressButton from '../sounds/onPressButton.ogg'
import onReleasedButton from '../sounds/onReleasedButton.ogg'

// Styles
import classes from './Button3D.module.css'

const Button3D = ({ image, fallbackImage, text, onActionSelected }) => {
  const [playPressButton] = useSound(onPressButton)
  const [playReleaseButton] = useSound(onReleasedButton)

  return (
    <button
      className={classes.pushable}
      onMouseDown={playPressButton}
      onMouseUp={playReleaseButton}
      onClick={() => onActionSelected(text)}
    >
      <span className={classes.shadow} />
      <span className={classes.edge} />
      <span className={classes.front}>
        <picture>
          <source srcSet={image} />
          <img src={fallbackImage} alt={text} />
        </picture>
      </span>
    </button>
  )
}

export default Button3D
