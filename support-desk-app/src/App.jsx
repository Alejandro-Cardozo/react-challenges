import { useEffect, useState } from 'react';
import TeamMembers from './components/TeamMembers';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://randomuser.me/api/?results=8&inc=name,gender,dob,email,phone,picture,location,nat,login&nat=us,fr,gb,br,de,es,mx'
        );
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.log(error.message ? error.message : 'Something went wrong...');
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className='home'>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isLoading && hasError) {
    return (
      <div className='home'>
        <p>Oops, something went wrong. Please try to reload the page.</p>
      </div>
    );
  }

  return (
    <div className='home'>
      <h1>Meet our team</h1>
      <TeamMembers users={users} />
    </div>
  );
}

export default App;
