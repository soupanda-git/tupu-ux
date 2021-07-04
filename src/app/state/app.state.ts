export interface State {
  currentUser: UserState,
}

export interface UserState {
  Name: string,
  Id: string,
  Email: string,
  Roles: string[]
}
