import { connect } from 'react-redux';
import ItemDetail from './ItemDetail';
import { RootState } from '../../redux/store';

interface StateProps {
}

const mapStateToProps = (state: RootState): StateProps => ({})

export default connect(
  mapStateToProps
)(ItemDetail)
export type ReduxProps = StateProps;