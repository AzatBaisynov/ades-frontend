import { Link } from 'react-router-dom'

import boxSVG from '../assets/img/box.svg'
import timeSVG from '../assets/img/time.svg'
import whyWeBgJPG from '../assets/img/why-we/whywe-bg.jpg'
import whyWe1SVG from '../assets/img/why-we/1.svg'
import whyWe4SVG from '../assets/img/why-we/4.svg'
import whyWe2SVG from '../assets/img/why-we/2.svg'
import whyWe5SVG from '../assets/img/why-we/5.svg'
import whyWe3SVG from '../assets/img/why-we/3.svg'
import whyWe6SVG from '../assets/img/why-we/6.svg'

const Main = () => {
  return (
    <main className="page">
      <section className="section__main main">
        <div className="main__container">
          <div className="main__wrapper">
            <h1 className="main__title def-title">
              ДОСТАВКА ТОВАРОВ ИЗ КИТАЯ ПО САМЫМ БЫСТРЫМ СРОКАМ
            </h1>
            <p className="main__text">
              Регистрируйся и получи свой код склада в Китае. Выкупай товары Оптом
              и Розницу самостоятельно или с помощью нашей компании, отслеживай их
              по трек номеру. Мы доставим ваши товары в Кыргызстан безопасно за
              самый короткий срок!
            </p>
            <Link to="/tracking" className="main__btn">
              ОТСЛЕЖИВАНИЕ
            </Link>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="services__container">
          <div className="services__wrapper">
            <h2 className="services__title def-title">
              Выкуп товара с китайских сайтов
            </h2>
            <h3 className="services__subtitle">
              Работаем со всеми известными китайскими маркетплейсами
            </h3>
            <ul className="services__list">
              <li className="services__items">Pinduoduo</li>
              <li className="services__items">Poizon</li>
              <li className="services__items">Taobao</li>
              <li className="services__items">1688 и.д.</li>
            </ul>
            <p className="services__text">
              Поможем зарегистрироваться на нужном сайте , найти товар у
              проверенного поставщика, , оформить заказ и произвести оплату.
            </p>
            <div className="services__blocks">
              <div className="services__inner">
                <div className="services__img-wrapper">
                  <img src={boxSVG} alt="" />
                </div>
                <div className="services__text-wrapper">
                  <h3 className="services__inner-title">Без знания китайского</h3>
                  <p className="services__inner-text">
                    Поможем оформить заказ. заполнить правильно адрес склада,
                    сохранив ваши силы и время
                  </p>
                </div>
              </div>
              <div className="services__inner">
                <div className="services__img-wrapper">
                  <img src={timeSVG} alt="" />
                </div>
                <div className="services__text-wrapper">
                  <h3 className="services__inner-title">
                    Доставим за 7-12 дней со дня поступления на склад в Китае
                  </h3>
                  <p className="services__inner-text">
                    Более 90 % клиентов имеют проблемы со сроками доставки, но
                    наше карго поможет получить ваши товары безопасно и быстро
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-we">
        <div className="why-we__container">
          <h2 className="why-we__title def-title">Почему стоит выбрать нас ?</h2>
          <div className="why-we__text-wrapper">
            <p className="why-we__text def-text">
              Если вы уже работаете или планируете работать с маркетплейсами
              данная услуга именно для вас. ADES CARGO EXPRESS доставят любой ваш
              груз в любом размере и количестве. Взять на себя всю работу начиная
              с проверки товара, обрешетки по желанию клиента, таможенного
              оформления документов и сертификатов, до доставки товара в
              Кыргызстан, его переупаковки, хранения и создания поставок на наш
              склад в Бишкеке.
            </p>
          </div>
          <div className="why-we__img-wrapper">
            <img className="why-we__img" src={whyWeBgJPG} alt="" />
          </div>
          <ul className="why-we__list">
            <li className="why-we__columns">
              <div className="why-we__columns-img">
                <img src={whyWe1SVG} alt="" />
              </div>
              <div className="why-we__columns-content">
                <h3 className="why-we__columns-title def-title">
                  Обрешетка хрупкого товара
                </h3>
                <p className="why-we__columns-text def-text">
                  По запросу у нас есть услугу обрешетки товара для защиты хрупких
                  и габаритных товаров. В конце вес считается вместе.
                </p>
              </div>
            </li>
            <li className="why-we__columns">
              <div className="why-we__columns-img">
                <img src={whyWe4SVG} alt="" />
              </div>
              <div className="why-we__columns-content">
                <h3 className="why-we__columns-title def-title">
                  Переупаковка и объединение
                </h3>
                <p className="why-we__columns-text def-text">
                  Мы соберем все ваши посылки и объединим, для удобного и
                  рационального использования объема
                </p>
              </div>
            </li>
            <li className="why-we__columns">
              <div className="why-we__columns-img">
                <img src={whyWe2SVG} alt="" />
              </div>
              <div className="why-we__columns-content">
                <h3 className="why-we__columns-title def-title">
                  Страхование груза
                </h3>
                <p className="why-we__columns-text def-text">
                  Если ваш товар поступит без вашего личного кода или не на тот
                  код, то она не потеряется, в нашем телеграмм канале вы сможете
                  найти свой груз.
                </p>
              </div>
            </li>
            <li className="why-we__columns">
              <div className="why-we__columns-img">
                <img src={whyWe5SVG} alt="" />
              </div>
              <div className="why-we__columns-content">
                <h3 className="why-we__columns-title def-title">
                  Собственный склад в Китае
                </h3>
                <p className="why-we__columns-text def-text">
                  Позволяет хранить неограчниенное количество заказов клиентов
                </p>
              </div>
            </li>
            <li className="why-we__columns">
              <div className="why-we__columns-img">
                <img src={whyWe3SVG} alt="" />
              </div>
              <div className="why-we__columns-content">
                <h3 className="why-we__columns-title def-title">
                  Доставка за 4,5$ за 1 кг
                </h3>
                <p className="why-we__columns-text def-text">
                  Стоимость рассчитывается в зависимости от обьема и веса груза.
                  Оптовый вес считаем от 50 кг считаем еще ниже!
                </p>
              </div>
            </li>
            <li className="why-we__columns">
              <div className="why-we__columns-img">
                <img src={whyWe6SVG} alt="" />
              </div>
              <div className="why-we__columns-content">
                <h3 className="why-we__columns-title def-title">
                  Отслеживание товара
                </h3>
                <p className="why-we__columns-text def-text">
                  Вы всегда можете отследить место- нахождение вашего товара по
                  трек-номеру
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Main