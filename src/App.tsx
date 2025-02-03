import './App.css'
import { ProviderUser } from './components/context'
import { RouterProvider } from 'react-router'
import { router } from './router'
import store from './components/Recipes/store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ProviderUser>
            <RouterProvider router={router} />
          </ProviderUser>
        </Provider>
      </ThemeProvider>
    </>
  )
}
export default App