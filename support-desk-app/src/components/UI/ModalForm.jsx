// React stuff
import PropTypes from 'prop-types'

// Styles
import classes from './ModalForm.module.css'

const ModalForm = ({ onSubmit }) => {
  return (
    <form className={classes.modalForm} onSubmit={onSubmit}>
      <label htmlFor='name'>Your name</label>
      <input type='text' name='name' id='name' required autoFocus maxLength={30} />
      <label htmlFor='message'>Message</label>
      <textarea
        type='text'
        name='message'
        id='message'
        rows={5}
        required
        maxLength={150}
      ></textarea>
      <div className={classes.modalActions}>
        <button className={`${classes.btn} ${classes.modalBtn}`}>Send Message</button>
      </div>
    </form>
  )
}

ModalForm.propTypes = {
  onSubmit: PropTypes.func
}
export default ModalForm
