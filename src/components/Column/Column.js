import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from './Icon.js';

import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Column extends React.Component {

    static propTypes = {
      cards: PropTypes.array,
      title: PropTypes.node,
      icon: PropTypes.string,
      addCard: PropTypes.func,
      onCardClick: PropTypes.func,
    }
    
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {title, icon, cards, addCard, onCardClick} = this.props;
      return (
        <section className={styles.component}> 
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3> 
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} onClick={() => {
                onCardClick(cardData);
              }}/>
            ))}
          </div>
          
          {addCard && <div>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>}

        </section> 
        
      );
    }
}

export default Column;