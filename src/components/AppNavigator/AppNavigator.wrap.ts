import { connect } from 'react-redux';
import { ApplicationStateType } from '../../redux/types';
import { selectUser } from '../../redux/user/selector';
import AppNavigator from './AppNavigator';

const mapStateToProps = (state: ApplicationStateType) => ({
    user: selectUser(state)
});
  
const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
