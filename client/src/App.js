import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App