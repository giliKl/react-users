import {  useState } from 'react'
import './App.css'
import LogIn from './components/logIn'
import { ProviderUser } from './components/context'
import UserDetails from './components/UserDetails'
import Update from './components/Update'
import Registration from './components/Registration'
import { RouterProvider } from 'react-router'
import { router } from './router'


function App() {
    
  return(<>
  <ProviderUser>
  <RouterProvider router={router}/>
    </ProviderUser>
    </>
    )
}

export default App
