import { apiAccountType } from 'src/redux/pages/Login/types';
import { UserState } from 'src/redux/user/types';

export const modelizeAccount = (apiAccount: apiAccountType): UserState => ({
  id: apiAccount.ID,
  email: apiAccount.email,
  token: apiAccount.token,
  lastname: apiAccount.lastname,
  firstname: apiAccount.firstname,
  isAdmin: apiAccount.Admin
});
