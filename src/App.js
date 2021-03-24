<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> 6c9257f9212e3d7b91a08a81f9161a17b14cffc9

import getCountries from './api';

import { CountryCards } from './components';

import styles from './App.module.css';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const func = async () => {
      const countries = await getCountries();
  
      setCountries(countries);
    }

    func();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Countries API</h1>
      {countries.length && <CountryCards countries={countries} />}
    </div>
  )
}

export default App


