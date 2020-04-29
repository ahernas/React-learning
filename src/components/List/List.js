import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
    }

    static defaultProps = {
        children: <p>Interesting things I want to check out!</p>,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title}
                      imageBackground={this.props.image}
                />

                <div className={styles.description}>
                    {this.props.children}
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
