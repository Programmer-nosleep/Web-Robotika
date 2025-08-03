import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/index'
import Login from '../pages/auth/Login'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  )
}

export default AppRouter