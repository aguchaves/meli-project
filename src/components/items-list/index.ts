import { connect } from 'react-redux';
import ItemsList from './ItemsList';
import { RootState } from '../../redux/store';

interface StateProps {
  readonly list: RootState["items"]["list"];
}

const mapStateToProps = (state: RootState): StateProps => ({
  list: state.items.list
})

export default connect(
  mapStateToProps
)(ItemsList)
export type ReduxProps = StateProps;