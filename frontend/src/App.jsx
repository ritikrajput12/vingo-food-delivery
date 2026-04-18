import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/signUp.jsx'
import SignIn from './pages/signIn.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import useGetCurrentUser from './hooks/useGetCurrentUser.jsx'
import { useSelector } from 'react-redux'

export const serverUrl = "http://localhost:8000"

function App() {
  useGetCurrentUser()
  const {userData}=useSelector(state=>state.user)
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default App