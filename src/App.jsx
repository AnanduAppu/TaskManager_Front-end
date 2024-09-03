

import Signup from './Pages/Authentication/Signup'
import Navbar from './Pages/Navbar'
import Login from './Pages/Authentication/Login'
import { Routes, Route } from 'react-router-dom';
import Hooks_display from './Hools/Hooks_display';
import TodoList from './Pages/to_do/TodoList';
import userContext from './contex/UserContex';
import { useState } from 'react';
import UseReducer from './Hools/UseReducer';
import LandingAssemble from './Pages/Ladingpage/LandingAssemble';
function App() {


const api = 'http://localhost:3005/user'

  return (
    <>
    <userContext.Provider value={api}>
    <div className='bg-gray-100  h-screen'>
    <Navbar/>
    <Routes>

    <Route path='/' element={<LandingAssemble/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
  

    </div>
    </userContext.Provider>
    </>
  )
}

export default App
