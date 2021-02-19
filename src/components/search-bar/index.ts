import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { saveList } from '../../redux/modules/items';
import { RootState } from '../../redux/store';

interface StateProps {
}

const mapStateToProps = (state: RootState): StateProps => ({

})

interface DispatchProps {
  readonly saveList: typeof saveList;
}

const mapDispatchToProps = {
  saveList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
export type ReduxProps = StateProps & DispatchProps;
