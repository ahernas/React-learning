import {connect} from 'react-redux';
import {getCardsForSearch } from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';
import {createActionChangeSearch} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.id),
  searchString: props.match.params.id,
  openList: (cardData) => {
    const column = state.columns.find(column => column.id == cardData.columnId);
    props.history.push(`/list/${column.listId}`);
  },
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionChangeSearch(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);