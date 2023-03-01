import PropTypes from 'prop-types'
import classes from './Overlay.module.css'

const Overlay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>
}

Overlay.propTypes = {
  children: PropTypes.object.isRequired
}

export default Overlay
