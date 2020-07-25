import React from 'react';

import getCountries from './api';

import { CountryCards } from './components';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    countries: [],
  }

  async componentDidMount() {
    const countries = await getCountries();

    this.setState({ countries });
  }

  render() {
    const { countries } = this.state;

    return (
      <div className={styles.container}>
        <h1>Countries API</h1>
        {countries.length ? <CountryCards countries={countries} /> : null}
      </div>
    )
  }
}

export default App;
