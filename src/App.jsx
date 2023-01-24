import { useEffect, useState } from 'react';
import TeamMembers from './components/TeamMembers';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://randomuser.me/api/?results=8&inc=name,dob,email,phone,picture,location,nat,login');
      const data = await response.json();
      setUsers(data.results);
    };

    fetchUser();
  }, []);

  if (!users.length) {
    return <div className='home'><p>Loading...</p></div>
  }

  return (
    <div className='home'>
      <h1>Meet our team</h1>
      <TeamMembers users={users} />
    </div>
  );
}

export default App;
