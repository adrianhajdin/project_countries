import React from 'react';

import getCountries from './api';

import { CountryCards, Search } from './components';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    countries: [],
  }

  async componentDidMount() {
    const countries = await getCountries();

    this.setState({ countries });
  }

  searchCountry = async (value) => {
    const { countries } = this.state;

    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()));

    this.setState({ countries: filteredCountries });
  }

  render() {
    const { countries } = this.state;

    console.log(countries);

    return (
      <div className={styles.container}>
        <h1>Countries API</h1>
        <Search searchCountry={this.searchCountry} />
        {countries.length ? <CountryCards countries={countries} /> : null}
      </div>
    )
  }
}

export default App;
