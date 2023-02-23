import PropTypes from 'prop-types';
import Card from './Card';

const TeamMembers = ({ users }) => {
  return (
    <section className='team'>
      {users.map((user) => (
        <Card key={user.login.uuid} user={user} />
      ))}
    </section>
  );
};

TeamMembers.propTypes = {
  users: PropTypes.array,
};

export default TeamMembers;
