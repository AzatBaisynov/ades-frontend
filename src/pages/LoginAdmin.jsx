import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_ACTION } from '../store/actionCreators/isAuth'


const LoginAdmin = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const selector = useSelector((state) => state)

  useEffect(() => {
    if (selector.isAuth) {
      navigate('/adminpage')
    }
  }, [])

  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <main className="page">
      <section className="login">
        <div className="login__container">
          <h1 className="login__title def-title">ВХОД В ЛИЧНЫЙ КАБИНЕТ</h1>
          <h2 className="login__subtitle">Все поля заполнения обязательны*</h2>
          <form className="login__form">
            <input className="login__input" type="email" placeholder="E-mail или Ваш код" onInput={(e) => {
              setData({ ...data, email: e.target.value })
            }} />
            <input
              className="login__input"
              type="password"
              placeholder="Пароль"
              onInput={(e) => {
                setData({ ...data, password: e.target.value })
              }}
            />
            <div className="login__checkbox-wrapper">
              <input type="checkbox" id="password" />
              <label className="login__label" htmlFor="password">
                запомнить меня на этом устройстве
              </label>
            </div>
          </form>
          <button className="login__btn def-btn" onClick={async () => {
            console.log(data)
            const auth = await axios('https://ades.kg:8083/test/auth/login', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              data: JSON.stringify(data)
            })
            dispatch(AUTH_ACTION(`Bearer ${auth.data.access_token}`))
            navigate('/adminpage')
          }}>ВОЙТИ</button>
        </div>
      </section>
    </main>
  )
}

export default LoginAdmin