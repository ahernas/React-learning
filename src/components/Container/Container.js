import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
    
  render() {
    const {children} = this.props;
    return (
      <div className={styles.component}>{children}</div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;