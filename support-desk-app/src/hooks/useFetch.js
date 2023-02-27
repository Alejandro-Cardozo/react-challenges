import { useEffect, useState } from 'react';

function useFetch(url) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
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

  return { users, isLoading, hasError };
}

export default useFetch;
