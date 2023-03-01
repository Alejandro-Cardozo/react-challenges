import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import Card from './Card'
import Modal from './UI/Modal'
import { useState } from 'react'

const TeamMembers = ({ users }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const sendMessageHandler = (userName) => {
    setShowModal((prev) => !prev)
    setSelectedUser(userName)
  }
  return (
    <section className='team'>
      {users.map((user) => (
        <Card key={user.login.uuid} user={user} onSendMessage={sendMessageHandler} />
      ))}
      {showModal &&
        createPortal(
          <Modal name={selectedUser} onCloseModal={sendMessageHandler} />,
          document.getElementById('modal')
        )}
    </section>
  )
}

TeamMembers.propTypes = {
  users: PropTypes.array
}

export default TeamMembers
