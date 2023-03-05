// Hooks
import useSound from 'use-sound';

// Utilities
import onPressButton from '../sounds/onPressButton.ogg'

// Styles
import classes from './Button3D.module.css'

const Button3D = ({ image, fallbackImage, text, onActionSelected }) => {
  const [play] = useSound(onPressButton);

  const buttonHandler = () => {
    play();
    onActionSelected(text)
  }

  return (
    <button className={classes.pushable} onClick={buttonHandler}>
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
