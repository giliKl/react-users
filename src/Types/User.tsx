export type User = {
    id?: number,
    name?: string,
    lastName?: string,
    email?: string,
    password?: string,
    address?: string,
    numberPhone?: string
};
export type Action =
    | { type: 'LOG IN', data: User }
    | { type: 'DELETE_USER', id: number }
    | { type: 'UPDATE_USER', data: Partial<User> };

    export const userReducer = (state: User, action: Action) => {
        switch (action.type) {
          case 'LOG IN':
            return {...state,...action.data};
          case 'UPDATE_USER':
            return { ...state, ...action.data };
        case 'DELETE_USER':
            return {} as User
          default:
            return state
        }
      }