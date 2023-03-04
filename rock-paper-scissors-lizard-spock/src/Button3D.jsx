import classes from './Button3D.module.css'

const Button3D = ({ image, fallbackImage, text }) => {
  return (
    <button class={classes.pushable}>
      <span class={classes.shadow}></span>
      <span class={classes.edge}></span>
      <span class={classes.front}>
        <picture>
          <source srcset={image} />
          <img src={fallbackImage} alt={text} />
        </picture>
      </span>
    </button>
  )
}

export default Button3D
