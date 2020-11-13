import './App.css';
import React, {useState} from 'react';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider} from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

function App() {
  
  const countriesquery = gql`
  {
    countries {
      code,
      name,
      continent {name}
    }
  }`;

  const { loading, error, data } = useQuery(countriesquery);

  if (loading) // If still loading
    return "Loading...";
  if (error) // It there came an error
    return `Error ${error.message}`;

  return ( // When there is data
    <div className="App">
      <table>
        <tr>
          <th>Code</th>
          <th>Country</th>
          <th>Continent</th>
        </tr>
        <tbody>
          {
            data.countries.map((country, index) => 
              
              <tr key={index}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td>{country.continent.name}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
/*  

===== Companies query =======


const companiesquery = gql`
  {
    companies {
      name,
      websiteUrl
    }
  }`;

  const { loading, error, data } = useQuery(companiesquery);

  if (loading) // If still loading
    return "Loading...";
  if (error) // It there came an error
    return `Error ${error.message}`;

  return ( // When there is data
    <div className="App">
      <table>
        <tbody>
          {
            data.companies.map((company, index) => 
              <tr key={index}>
                <td>{company.name}</td>
                <td><a href={company.websiteUrl}>{company.websiteUrl}</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

===== Cities query =======

const cityquery = gql`
  {
    cities {
      name,
      country {name},
    }
  }`;

  const { loading, error, data } = useQuery(cityquery);

  if (loading) // If still loading
    return "Loading...";
  if (error) // It there came an error
    return `Error ${error.message}`;

  return ( // When there is data
    <div className="App">
      <table>
        <tbody>
          {
            data.cities.map((city, index) => 
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.country.name}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

===== Jobs query =======

const jobquery = gql`
  {
    jobs { 
      title, 
      company{name}, 
      applyUrl, 
    }
  }`;

  const { loading, error, data } = useQuery(jobquery);

  if (loading) // If still loading
    return "Loading...";
  if (error) // It there came an error
    return `Error ${error.message}`;

  return ( // When there is data
    <div className="App">
      <table>
        <tbody>
          {
            data.jobs.map((job, index) => 
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company.name}</td>
                <td><a href={job.applyUrl}>{job.applyUrl}</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

===== First query =======

  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs',
  });

  const[jobs, setJobs] = useState([]);

  client
  .query({
    query: gql`
    {
      jobs {
        title,
        company{name},
        applyUrl,
      }
    }
    `
  })
  .then(result=> setJobs(result.data   .jobs));

  return (
    <div className="App">
      <table>
        <tbody>{
          jobs.map((job, index) =>
            <tr key = {index}>
              <td>{job.title}</td>
              <td>{job.company.name}</td>
              <td><a href={job.applyUrl}>{job.applyUrl}</a></td>
            </tr >
          )
        }</ tbody>
        </table>
    </div>
  );
}
*/

export default App;