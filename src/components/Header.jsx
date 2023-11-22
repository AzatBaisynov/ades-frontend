import {Link, useNavigate} from 'react-router-dom'

import headerLogo from '../assets/img/main-logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { UNAUTH_ACTION } from '../store/actionCreators/isAuth';

const Header = () => {

  const distpatch = useDispatch()
  const navigate = useNavigate()
  const selector = useSelector(state => state)

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            <img
              className="header__logo-img"
              src={headerLogo}
              alt="Логотип"
            />
          </Link>
          <div className="header__wrapper">
            <div className="header__contacts">
              <a className="header__phone header__links" href="tel:+996225905055">
                +996 225 905 055
              </a>
              <span className="header__time header__links">12:00-18:00</span>
            </div>
            <div className="header__reg-wrapper">
              {
                !selector.isAuth && <Link to="/login" className="header__sign-in header__links">
                Войти
              </Link>
              }
              {
                !selector.isAuth && <Link to="/registration" className="header__sign-up header__links">
                  Зарегистрироваться
                </Link>
              }
              {
                selector.isAuth && <button className="header__sign-up header__links" onClick={() => {
                  navigate('/profile')
                }}>ЛИЧНЫЙ КАБИНЕТ</button>
              }
              {
                selector.isAuth && <button className="header__sign-up header__links" onClick={() => {
                  navigate('/tracking')
                }}>ОТСЛЕЖИВАНИЕ</button>
              }
              {
                selector.isAuth && <button className="header__sign-up header__links" onClick={() => {
                  distpatch(UNAUTH_ACTION())
                  navigate('/')
                }}>Выйти</button>
              }
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;