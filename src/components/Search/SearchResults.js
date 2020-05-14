import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {SearchData} from '../../data/dataStore';

class SearchResults extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
      searchString: PropTypes.string,
      changeSearchString: PropTypes.func,
      openList: PropTypes.func,
    };
    
    componentDidMount() {
      this.props.changeSearchString(this.props.searchString);
    }

    render() {
      const {cards, searchString, openList} = this.props;
      return <div>
        <Container>
          <Hero titleText={SearchData.title}
            imageBackground={SearchData.image}
          />
          <Column cards={cards} title={searchString} onCardClick={(card) => {
            openList(card);
          }}/>
        </Container>
      </div>;
    }
}

export default SearchResults;