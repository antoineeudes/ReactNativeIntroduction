import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationStateType } from '../../redux/types';
import { actions as loginActions } from '../../redux/pages/Login';
import Home from './Home';

const mapStateToProps = (state: ApplicationStateType) => ({});
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: () => dispatch(loginActions.LogoutAction()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
