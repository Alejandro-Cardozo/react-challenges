import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import Card from './Card'
import Modal from './UI/Modal'

const TeamMembers = ({ users }) => {
  return (
    <section className='team'>
      {users.map((user) => (
        <Card key={user.login.uuid} user={user} />
      ))}
      {createPortal(<Modal />, document.getElementById('modal'))}
    </section>
  )
}

TeamMembers.propTypes = {
  users: PropTypes.array
}

export default TeamMembers
