import './App.css'
import { ProviderUser } from './components/Users/context'
import { RouterProvider } from 'react-router'
import { router } from './router'
import AddRecipe from './components/Recipes/AddRecipe'
import store from './components/Recipes/store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'


function App() {
    const addToList=()=>{

    }
  return(<>

         <ThemeProvider theme={theme}>
         <Provider store={store}>
         <ProviderUser>
           <RouterProvider router={router} />
         </ProviderUser>
         <AddRecipe addToList={addToList}/>
         </Provider>
       </ThemeProvider>
    </>
    )
}

export default App

//  {/* <Provider store={store}>  {/* ✅ עטיפת כל האפליקציה ב-Redux Provider */}
//  <ProviderUser>
//  <RouterProvider router={router} />
// </ProviderUser>
// <AddRecipe addToList={addToList} />
// </Provider> */}
