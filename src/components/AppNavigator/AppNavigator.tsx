import React from 'react';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import { UserState } from 'src/redux/user/types';

interface Props {
  user: UserState;
}

const AppNavigator: React.FunctionComponent<Props> = ({ user }: Props) => (
  user.token ? <Home /> : <Login />
)

export default AppNavigator;
