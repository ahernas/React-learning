import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

import {settings} from '../../data/dataStore.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        columns: PropTypes.array.isRequired,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title}
                      imageBackground={this.props.image}
                />

                <div className={styles.description}>
                    {this.props.description}
                </div>

                <div className={styles.columns}>
                    <Column key="1" titleColumn={"Animals"}/>
                    <Column key="2" titleColumn={"Plants"}/>
                    <Column key="3" titleColumn={"Minerals"}/>
                </div>

            </section>
        )
    }
}

export default List;
