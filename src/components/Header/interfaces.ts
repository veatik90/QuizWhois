export interface IUserInfo {
  email: string;
  login: string;
  roles: {
    isAdmin: boolean; // flag if user is admin or not
    isPlayer: boolean; // flag if user is player or not
  };
}
