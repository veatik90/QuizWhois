export interface IUserInfo {
  email: string;
  login: string;
  roles: {
    isAdmin: boolean;
    isPlayer: boolean;
  };
}
