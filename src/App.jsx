import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'

function App() {
  const isLogin = !!localStorage.getItem("token")
  return (
    <Routes>
      <Route path="/" element={isLogin ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
