import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero';
import {InfoData} from '../../data/dataStore';
import styles from '../Home/PagesStyles.scss';

const Info = () => (
    
  <Container>
    <Hero titleText={InfoData.title}
      imageBackground={InfoData.image}
    />
    <h2 className={styles.header}>{InfoData.header}</h2>
    <p className={styles.text}>{InfoData.text}</p>
  </Container>
);

export default Info;
