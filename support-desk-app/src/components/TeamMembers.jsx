import Card from "./Card";

const TeamMembers = ({ users }) => {
  return (
    <div className='team'>
      {users.map(user => <Card key={user.login.uuid} user={user} />)}
    </div>
  )
}

export default TeamMembers;