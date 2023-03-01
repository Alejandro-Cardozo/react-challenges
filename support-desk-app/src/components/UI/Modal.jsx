import PropTypes from 'prop-types'
import Overlay from './Overlay'

import classes from './Modal.module.css'
import { useEffect, useState } from 'react'

const Modal = ({ name, onCloseModal }) => {
  const [messageSent, setMessageSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    setIsSending(true)
    setMessageSent(true)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsSending(false)
    }, 1500)

    return () => {
      clearTimeout(timerId)
    }
  }, [messageSent])

  const modal_form = (
    <form className={classes.modalForm} onSubmit={submitHandler}>
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

  const modal_success = isSending ? (
    <p>Sending message...</p>
  ) : (
    <p>Success! You can close this window now.</p>
  )
  const modal_title = isSending
    ? 'Please Wait'
    : messageSent
    ? `Your message was sent to ${name}!`
    : `Send a message to ${name}`

  return (
    <Overlay onClick={onCloseModal.bind(null, null)}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modalBox}>
          <h3 className={classes.modalTitle}>{modal_title}</h3>
          {messageSent ? modal_success : modal_form}
          <button
            className={`${classes.btn} ${classes.cancelBtn}`}
            onClick={onCloseModal.bind(null, null)}
          >
            X
          </button>
        </div>
      </div>
    </Overlay>
  )
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func
}
export default Modal
