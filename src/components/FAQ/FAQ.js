import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FaqData} from '../../data/dataStore';
import FAQElement from './FAQElement';

const FAQ = () => (
 
  <Container>
    <Hero titleText={FaqData.title}
      imageBackground={FaqData.image}
    />
    {FaqData.questions.map(({key, question, answer}) => (
      <FAQElement answer={answer} question={question} key={key}/>
    ))}
  </Container>
);

export default FAQ;