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
        <div className="info">
          <h3>
            Welcome to Dummy Employees.This webpage presents you the one of the
            top employees working in our company.
          </h3>
          <p>
            Have a look and we have made some graphical results on this data.
          </p>
        </div>

        <Employees employees={fectchData} baseUrl={baseUrl} />
      </BreakpointProvider>
      <h3 className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
        repellat accusantium commodi aperiam consequatur itaque quaerat
        perspiciatis, incidunt unde earum cum neque dolor dignissimos molestiae
        tenetur animi quam quis.
      </h3>
    </main>
  );
}

export default App;
