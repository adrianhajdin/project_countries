import React from 'react';

import styles from './CountryCard.module.css';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const CountryCard = ({ country: { name, nativeName, subregion, capital, population, area, currencies, flag }}) => (
  <Card className={styles.card} onClick={() => window.open`https://en.wikipedia.org/wiki/${name}`}>
    <CardActionArea>
      <CardMedia className={styles.cardImage} image={flag} title={`${name} flag`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{name} {`(${nativeName})`}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Region: {subregion}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Capital: {capital}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Population: {population}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Area: {area}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">Currency: {currencies[0].name} ({currencies[0].code})</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default CountryCard;