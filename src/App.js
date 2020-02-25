import React from 'react';

import getCountries from './api';

import { CountryCards, Search } from './components';

import styles from './App.module.css';

class App extends React.Component {
  state = {
    countries: [],
    searchTerm: '',
  }

  async componentDidMount() {
    this.setState({ countries: await getCountries() });
  }

  searchCountry = async (country) => {
    const { countries } = this.state;

    const countryy = countries.find((country) => country.name.includes('country'));

    console.log(countryy);

    this.setState({ countries: await getCountries(country) });
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });

    this.searchCountry(this.state.searchTerm)
  }

  render() {
    const { countries, searchTerm } = this.state;

    console.log(countries);

    return (
      <div className={styles.container}>
        <h1>Countries API</h1>
        <input 
            className={styles.search}
            value={searchTerm} 
            onChange={(e) => this.handleChange(e)}
            placeholder="Type Country + Enter"
        />
        {countries.length ? <CountryCards countries={countries} /> : null}
      </div>
    )
  }
}

export default App;
