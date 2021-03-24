import React from 'react';

import CountryCard from './CountryCard/CountryCard';

import styles from './CountryCards.module.css'

const CountryCards = ({ countries }) => {
    return (
        <div className={styles.container}>
            {countries.map((country) => <CountryCard country={country} />)}
        </div>
    );
}

export default CountryCards;