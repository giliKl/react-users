import { createContext, Dispatch, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Types/User'
import LogIn from './components/logIn'
type action = {
  type: string;
  data: User
}
const userReducer = (state: User, action: action) => {
  switch (action.type) {
    case 'Log In':
      state.name = state.name != action.data.name ? action.data.name : state.name;
      state.email = state.email != action.data.email ? action.data.email : state.email;
      return state
    case 'update':
      state.name = action.data.name ?? state.name;
      state.lastName = action.data.lastName ?? state.lastName;
      state.address = action.data.address ?? state.address;
      state.email = action.data.address ?? state.email;
      state.numberPhone = action.data.numberPhone ?? state.numberPhone;
      state.password = action.data.password ?? state.password;
      return state
    default:
      return state
  }
}
type userContextType = [User, Dispatch<action>];
export const userContext = createContext<userContextType>([{} as User, () => { }]);
function App() {
  const [user, userDispatch] = useReducer(userReducer, {} as User);
  return (
    <>
    <userContext.Provider value={[user,userDispatch]}>
    <LogIn/>
    </userContext.Provider>

    </>
  )
}

export default App
