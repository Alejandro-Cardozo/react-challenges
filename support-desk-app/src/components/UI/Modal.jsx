import Overlay from './Overlay'

import classes from './Modal.module.css'

const Modal = () => {
  return (
    <Overlay>
      <div className={classes.modal}>
        <div className={classes.modalBox}>
          <h3 className={classes.modalTitle}>Send a message to ...</h3>
          <form className={classes.modalForm}>
            <label htmlFor='name'>Your name</label>
            <input type='text' name='name' id='name' required autoFocus maxLength={30} />
            <label htmlFor='message'>Message</label>
            <textarea type='text' name='message' id='message' rows={5} required maxLength={150}></textarea>
          </form>
          <div className={classes.modalActions}>
            <button className={`${classes.btn} ${classes.modalBtn}`}>Send Message</button>
          </div>
          <button className={`${classes.btn} ${classes.cancelBtn}`}>X</button>
        </div>
      </div>
    </Overlay>
  )
}

export default Modal
