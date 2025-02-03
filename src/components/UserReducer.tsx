import { User } from "../Types/UserType";

export type Action =
  {
    type: string;
    data: User
  }

export const UserReducer = (state: User, action: Action) => {
  switch (action.type) {
    case 'LOG IN':
      return { ...state, ...action.data };
    case 'LOG OUT':
      return {} as User;
    case 'SIGN UP':
      return { ...state, ...action.data };
    case 'UPDATE_USER':
      return { ...state, ...action.data };
    case 'DELETE_USER':
      return {} as User
    default:
      return state
  }
}