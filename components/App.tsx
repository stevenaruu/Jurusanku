import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { Provider } from 'react-redux'
import { store } from '../app/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App