import axios from 'axios';

const getCountries = async (country) => {
    let response = null;

    if(country) {
        response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
    } else {
        response = await axios.get('https://restcountries.eu/rest/v2/all');
    }

    const countries = response.data;

    const strippedCountries = countries.map((country) => {
        const { name, nativeName, alpha2Code, subregion, capital, population, area, currencies, flag } = country;

        return { name, nativeName, alpha2Code, subregion, capital, population, area, currencies, flag };
    })

    return strippedCountries;
}

export default getCountries;