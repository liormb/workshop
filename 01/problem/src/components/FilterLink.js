import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, { filter }) => ({
  onClick() {
    dispatch(setVisibilityFilter(filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
