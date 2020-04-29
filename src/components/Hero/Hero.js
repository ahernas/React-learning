import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

class Hero extends React.Component {
    render() {
        return (
            <header className={styles.component}>
                <h2 className={styles.title}>{this.props.titleText}</h2>
                <img className={styles.image} src={this.props.imageBackground}/>
            </header>
        )
    }
}

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
};

export default Hero;