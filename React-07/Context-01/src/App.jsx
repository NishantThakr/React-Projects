import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/porfile'
function App() {


  return (
    <UserContextProvider>
      <h1>React with nemo</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App