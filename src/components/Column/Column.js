import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from './Icon.js';

import PropTypes from 'prop-types';
import {settings} from "../../data/dataStore.js";

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        cards: PropTypes.array,
    }

    addCard(title) {
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                        title,
                    }
                ]
            }
        ));
    }

    render() {
        console.log(this.props.icon);
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    {this.props.title}
                    <span className={styles.icon}>
                        <Icon name={this.props.icon}/>
                    </span>
                </h3>

                <div>
                    {this.state.cards.map(({key, ...cardProps}) => (
                        <Card key={key} {...cardProps} />
                    ))}
                </div>

                <div>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
                </div>

            </section>
        )
    }
}

Column.propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
    cards: PropTypes.array,
};

export default Column;