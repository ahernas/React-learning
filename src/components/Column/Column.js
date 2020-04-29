import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.titleColumn}</h3>
            </section>
        )
    }
}

Column.propTypes = {
    titleColumn: PropTypes.node.isRequired,
};

export default Column;