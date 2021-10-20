import { React, useState, useEffect } from 'react';
import { BreakpointProvider } from 'react-socks';
import Employees from './Components/Employees';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
// import axios from 'axios';

function App() {
  const [fectchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const baseUrl =
    'https://616ef1ab715a630017b399d8.mockapi.io/api/v1/employees';

  useEffect(() => {
    setLoading(true);
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <Navbar />
        <Loading />
      </main>
    );
  }

  if (error || !Array.isArray(fectchData)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <main>
      <Navbar />
      <BreakpointProvider>
        <Employees employees={fectchData} baseUrl={baseUrl} />
      </BreakpointProvider>
    </main>
  );
}

export default App;
