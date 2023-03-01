import Overlay from './Overlay'

import classes from './Modal.module.css'

const Modal = () => {
  return (
    <Overlay>
      <div className={classes.modal}>
        <div className={classes.modalBox}>
          <h3 className={classes.modalTitle}>Congratulations random Internet user!</h3>
          <p className={classes.modalText}>
            You&apos;ve been selected for a chance to get one year of subscription to use Wikipedia
            for free!
          </p>
          <div className={classes.modalActions}>
            <button className={classes.modalBtn}>Yay!</button>
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default Modal
