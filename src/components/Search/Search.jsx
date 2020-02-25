import React, { useState } from 'react';

import styles from './Search.module.css';

const Search = ({ handleChange, searchTerm }) => {
    // const [ value, setValue ] = useState('');

    return (
        <input 
            className={styles.search}
            value={searchTerm} 
            onChange={({ target: { value }}) => handleChange(value)}
            placeholder="Type Country + Enter"
        />
    );
}

export default Search;