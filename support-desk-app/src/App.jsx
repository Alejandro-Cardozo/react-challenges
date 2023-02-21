import TeamMembers from './components/TeamMembers';
import useFetch from './hooks/useFetch';

const base_url =
  'https://randomuser.me/api/?results=8&inc=name,gender,dob,email,phone,picture,location,nat,login&nat=us,fr,gb,br,de,es,mx';

function App() {
  const { users, isLoading, hasError } = useFetch(base_url);

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
    <main className='home'>
      <h1>Meet our team</h1>
      <TeamMembers users={users} />
    </main>
  );
}

export default App;
