import classes from './Card.module.css';

const Card = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>;
  }

  const userData = {
    completeName:
      `${user.name.title}. ${user.name.first} ${user.name.last}` || '',
    age: user.dob.age || 0,
    email: user.email || '',
    number: user.phone || '',
    picture: user.picture.large || '',
    country: user.location.country || '',
    flag: `https://flagcdn.com/w80/${user.nat.toLowerCase()}.png`,
  };

  return (
    <div className={classes.card}>
      <img src={userData.picture} alt={userData.completeName} />
      <img src={userData.flag} width='80' alt={userData.country} />
      <div className='content'>
        <h3 className='title'>
          {userData.completeName} <span>({userData.age})</span>
        </h3>
        <p className='email'>
          {userData.email.replace('example', 'ourteam')}
        </p>
        <p className='number'>{userData.number}</p>
      </div>
      <div className='actions'>
        <a href={`mailto:${userData.email.replace('example', 'ourteam')}`}>
          <button>send a message</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
