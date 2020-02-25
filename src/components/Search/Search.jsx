import React, { useState } from 'react';

import styles from './Search.module.css';

const Search = ({ searchCountry}) => {
    const [ value, setValue ] = useState('');

    const handleSubmit = (event) => {
        searchCountry(value);

        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className={styles.search}
                value={value} 
                onChange={({ target: { value }}) => setValue(value)}
                placeholder="Type Country + Enter"
            />
        </form>
    );
}

export default Search;