import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Home/PagesStyles.scss';

const FAQElement = ({question, answer}) => (
  <div>
    <h2 className={styles.header}>{question}</h2>
    <p className={styles.text}>{answer}</p>
  </div>
);

FAQElement.propTypes = {
  question: PropTypes.node,
  answer: PropTypes.node,
};

export default FAQElement;