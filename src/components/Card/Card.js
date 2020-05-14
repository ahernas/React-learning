import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

  render() {
    const {title, onClick} = this.props;
    return (
      <section className={styles.component} onClick={onClick}>
        <h3>{title}</h3>
      </section>
    );
  }
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Card;