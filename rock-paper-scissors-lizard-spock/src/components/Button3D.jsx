// Styles
import classes from './Button3D.module.css'

const Button3D = ({ image, fallbackImage, text, onActionSelected }) => {
  return (
    <button className={classes.pushable} onClick={() => onActionSelected(text)}>
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
