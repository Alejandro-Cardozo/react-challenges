import PropTypes from 'prop-types'
import classes from './Overlay.module.css'

const Overlay = (props) => {
  return (
    <div onClick={props.onClick} className={classes.overlay}>
      {props.children}
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default Overlay
