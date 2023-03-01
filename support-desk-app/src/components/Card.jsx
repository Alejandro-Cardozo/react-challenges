import PropTypes from 'prop-types'
import classes from './Card.module.css'

const Card = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>
  }
  const userData = {
    completeName: `${user.name.first} ${user.name.last}` || '',
    age: user.dob.age || 0,
    email: user.email || '',
    number: user.phone || '',
    picture: user.picture.large || '',
    country: user.location.country || '',
    gender: user.gender || '',
    flag: `https://flagcdn.com/w80/${user.nat.toLowerCase()}.png`
  }

  return (
    <div className={classes.card}>
      <img className={classes.picture} src={userData.picture} alt={userData.completeName} />
      <img className={classes.flag} src={userData.flag} alt={userData.country} />
      <div className={classes.content}>
        <span
          className={`${classes.age} ${
            userData.gender === 'female' ? classes.female : classes.male
          }`}
        >
          {userData.gender === 'female' ? '♀' : '♂'} {userData.age}
        </span>
        <h3 className={classes.title}>{userData.completeName} </h3>
        <p>{userData.email.replace('example', 'ourteam')}</p>
        <p>{userData.number}</p>
      </div>
      <div>
        <a href={`mailto:${userData.email.replace('example', 'ourteam')}`}>
          <button className={classes.btn}>Send a message</button>
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  user: PropTypes.object.isRequired
}
export default Card
