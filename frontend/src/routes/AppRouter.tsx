import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/index'
import Login from '@/pages/auth/Login'
import About from '@/pages/landing-pages/About'
import Blog from '@/pages/landing-pages/Blog'
import FAQ from '@/pages/landing-pages/FAQ'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <About /> }/>
        <Route path='/blog' element={ <Blog /> }/>
        <Route path='/faq' element={ <FAQ /> }/>
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  )
}

export default AppRouter