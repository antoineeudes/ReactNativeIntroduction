import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationStateType } from '../../redux/types';
import { actions as loginActions } from '../../redux/pages/Login';
import Login from './Login';
import { selectLoginIsLoading, selectLoginError } from '../../redux/pages/Login/selector';

const mapStateToProps = (state: ApplicationStateType) => ({
    isLoading: selectLoginIsLoading(state),
    errorMessage: selectLoginError(state)
});
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    loginRequest: (email: string, password: string) => dispatch(loginActions.LoginAction(
        { email: email, password: password }
    )),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
