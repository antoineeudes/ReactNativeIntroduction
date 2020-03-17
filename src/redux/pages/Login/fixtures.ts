import {
    apiAccountType,
    UserLoginFormData,
    LoginPageState
} from './types';
  
export const apiUserFixture: apiAccountType = {
    ID: 1,
    CreatedAt: '2019-12-10T14:59:18.922651Z',
    UpdatedAt: '2019-12-10T14:59:18.922651Z',
    DeletedAt: null,
    email: 'james@bond.com',
    password: '',
    firstname: 'James',
    lastname: 'Bond',
    token: 'fakeToken',
    Admin: false
};

export const userCredentials: UserLoginFormData = {
    email: 'james@bond.com',
    password: 'iAmSecret'
};

export const loginPageStateFixture: LoginPageState = {
    isLoading: false,
    errorMessage: null
};
