import { useState } from 'react'
import Dance from './pages/Dance'
import { Routes, Route } from 'react-router-dom';



function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Dance />} />
    </Routes>
  )
}

export default App
