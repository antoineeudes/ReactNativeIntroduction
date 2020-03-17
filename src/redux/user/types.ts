export interface UserState {
  token: string | null;
  lastname: string | null;
  firstname: string | null;
  id: number | null;
  isAdmin: boolean;
  email: string | null;
}
