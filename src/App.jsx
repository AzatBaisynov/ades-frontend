import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Main'
import Details from './pages/Details'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Tracking from './pages/Tracking'
import Admin from './pages/Admin'
import Excel from './pages/Excel'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/style/index.css'
import { useSelector } from 'react-redux'
import LoginAdmin from './pages/LoginAdmin'

const App = () => {

  const selector = useSelector(state => state)

  return (
    <>
      <Router>
        <Header />
        <Routes>

        <Route element={ <Main /> } path="/" />
        <Route element={ <Details /> } path="/details" />
        <Route element={<Login />} path="/login" />
        <Route element={<Registration />} path="/registration" />
        <Route element={<LoginAdmin />} path="/admin" />
          <Route element={<Tracking />} path="/tracking" />
        {
          selector.isAuth && (
            <>
                <Route element={<Profile />} path="/profile" />
                <Route element={<Admin />} path="/adminpage" />
                <Route element={<Excel />} path="/excel/:store/:type/" />
            </>
          )
        }

        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;