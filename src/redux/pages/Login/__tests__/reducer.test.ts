import {
    LoginSuccessAction,
    LoginAction,
    LoginErrorAction
} from '../actions';
import loginReducer, { initialState } from '../reducer';
import { userFixture } from '../../../user/fixtures';
import { userCredentials } from '../fixtures';

describe('loginReducer', () => {
    it('shoult set the loader when the request is sent', () => {
        expect(loginReducer(initialState, LoginAction(userCredentials))).toEqual({
        ...initialState,
        isLoading: true
        });
    });
    it('should unset the loader when the request is a success', () => {
        expect(
        loginReducer(
            { ...initialState, isLoading: true },
            LoginSuccessAction(userFixture)
        )
        ).toEqual({ ...initialState, isLoading: false });
    });
    it('should unset the loader and store the error message when the request is not a success', () => {
        expect(
        loginReducer(
            { ...initialState, isLoading: true },
            LoginErrorAction('error message')
        )
        ).toEqual({ isLoading: false, errorMessage: 'error message' });
    });
});
