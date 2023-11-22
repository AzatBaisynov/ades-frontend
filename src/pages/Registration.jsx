import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AUTH_ACTION } from '../store/actionCreators/isAuth';
import { useDispatch } from 'react-redux';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .max(50, 'Максимум 50 букв')
    .matches(/^[а-яА-Я]+$/, 'Используйте только русские символы')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .max(50, 'Максимум 50 букв')
    .matches(/^[а-яА-Я]+$/, 'Используйте только русские символы')
    .required('Обязательное поле'),
  day: Yup.number()
    .typeError('День должен быть числом')
    .positive('День должен быть положительным числом')
    .integer('День должен быть целым числом')
    .min(1, 'День должен быть больше 0')
    .max(31, 'День должен быть не больше 31')
    .required('День обязателен для заполнения'),
  month: Yup.number()
    .typeError('Месяц должен быть числом')
    .positive('Месяц должен быть положительным числом')
    .integer('Месяц должен быть целым числом')
    .min(1, 'Месяц должен быть больше 0')
    .max(12, 'Месяц должен быть не больше 12')
    .required('Месяц обязателен для заполнения'),
  year: Yup.number()
    .typeError('Год должен быть числом')
    .positive('Год должен быть положительным числом')
    .integer('Год должен быть целым числом')
    .min(1900, 'Год должен быть не раньше 1900')
    .max(new Date().getFullYear(), 'Год не должен быть больше текущего')
    .required('Год обязателен для заполнения'),
  city: Yup.string()
    .trim()
    .min(2, 'Длина должна быть больше 1 символа')
    .max(50, 'Длина не должна превышать 50 символов')
    .matches(/^[а-яА-Я]+$/, 'Используйте только русские символы')
    .required('Город обязателен для заполнения'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Используйте только цифры')
    .required('Номер телефона обязателен для заполнения'),
  email: Yup.string()
    .email('Неверный email')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=-]+$/,
      'Пароль может содержать только латинские буквы, цифры и символы: !@#$%^&*()_+=-'
    )
    .required('Пароль обязателен для заполнения'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('Обязателен для заполнения'),
})

const Registration = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <main className="page">
      <section className="reg">
        <div className="reg__container">
          <div className="reg__wrapper">
            <h1 className="reg__title def-title">СОЗДАТЬ АККАУНТ</h1>
            <h2 className="reg__subtitle">Все поля заполнения обязательны*</h2>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                day: '',
                month: '',
                year: '',
                city: '',
                phoneNumber: 996,
                whatsApp: false,
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values) => {
                values.dateOfBirth = `${values.day}.${values.month}.${values.year}`
                delete values.day
                delete values.month
                delete values.year
                delete values.confirmPassword
                values.name = values.firstName
                values.surname = values.lastName
                values.phone = values.phoneNumber
                values.residenceCity = values.city
                values.role = "user_role"
                console.log(values)
                try {
                  const resp = await axios('https://ades.kg:8083/users', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: JSON.stringify(values)
                  })
                  const auth = await axios('https://ades.kg:8083/test/auth/login', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                      email : resp.data.personal_code,
                      password: values.password
                    })
                  })
                  dispatch(AUTH_ACTION(`Bearer ${auth.data.access_token}`))
                  navigate('/profile')
                } catch(err) {
                  alert("Ошибка создания пользователя")
                  console.log(err)
                }
              }}
            >
              {({errors, touched}) => (
                <Form className="reg__form">
                  <div className="reg__inputs-wrapper">
                    <Field name="firstName" className={`reg__input ${touched?.firstName && errors?.firstName ? 'reg__input-invalid' : ''}`} type="text" placeholder="Имя" />
                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                  </div>
                  <div className="reg__inputs-wrapper">
                    <Field name="lastName" className={`reg__input ${touched?.lastName && errors?.lastName ? 'reg__input-invalid' : ''}`} type="text" id="surname" placeholder="Фамилия" />
                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                    <label className="reg__label" htmlFor="surname">
                      *Введите свое имя на русском языке
                    </label>
                  </div>
                  <div className="reg__inputs-wrapper">
                  <div className="reg__date-wrapper">
                    <Field name="day" className={`reg__input reg__date-input ${touched?.day && errors?.day ? 'reg__input-invalid' : ''}`} type="text" id="date" placeholder="Дата" />
                    
                    <Field name="month" className={`reg__input ${touched?.month && errors?.month ? 'reg__input-invalid' : ''}`} type="text" placeholder="месяц" />
                    <Field name="year" className={`reg__input ${touched?.year && errors?.year ? 'reg__input-invalid' : ''}`} type="text" placeholder="год" />
                  </div>
                  <label className="reg__label reg__date-label" htmlFor="date">
                      *Введите свою дату рождения
                    </label>
                  <ErrorMessage name="day" component="div" className="invalid-feedback" />
                  <ErrorMessage name="month" component="div" className="invalid-feedback" />
                  <ErrorMessage name="year" component="div" className="invalid-feedback" />
                  </div>
                  <div className="reg__inputs-wrapper">
                    <Field name="city" className={`reg__input ${touched?.city && errors?.city ? 'reg__input-invalid' : ''}`} type="text" placeholder="Город/Регион проживания" />
                    <ErrorMessage name="city" component="div" className="invalid-feedback" />
                  </div>
                  <div className="reg__inputs-wrapper">
                    <Field name="phoneNumber" className={`reg__input ${touched?.phoneNumber && errors?.phoneNumber ? 'reg__input-invalid' : ''}`} type="text" id="phone" placeholder="номер телефона" />
                    <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                    <div className="reg__checkbox-wrapper">
                      <Field name="whatsApp" className="reg__checkbox" type="checkbox" id="checkbox" />
                      <label className="reg__label reg__checkbox-label" htmlFor="checkbox" >
                        На этом номере есть whatsApp
                      </label>
                    </div>
                  </div>
                  <div className="reg__inputs-wrapper">
                    <Field name="email" className={`reg__input ${touched?.email && errors?.email ? 'reg__input-invalid' : ''}`} type="email" placeholder="адрес электронной почты" />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>
                  <div className="reg__inputs-wrapper">
                    <Field name="password" className={`reg__input ${touched?.password && errors?.password ? 'reg__input-invalid' : ''}`} type="password" placeholder="Пароль" />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    <label className="reg__label" htmlFor="#">
                      *минимально 6 символов
                    </label>
                  </div>
                  <div className="reg__inputs-wrapper">
                    <Field name="confirmPassword" className={`reg__input ${touched?.confirmPassword && errors?.confirmPassword ? 'reg__input-invalid' : ''}`} type="password" placeholder="Повторите пароль" />
                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                    <label className="reg__label" htmlFor="#">
                      *минимально 6 символов
                    </label>
                  </div>
                  <button className="reg__btn def-btn" type="submit">
                    Зарегистрироваться
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Registration