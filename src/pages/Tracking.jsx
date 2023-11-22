import axios from 'axios'
import { useState } from 'react'


const Tracking = () => {

  const [data, setData] = useState(null)
  const [search, setSearch] = useState("")

  const getPercent = (precent) => {
    switch (precent) {
      case "in_storage": {
        return "40%"
      }
      case "on_the_way": {
        return "70%"
      }
      case "delivered": {
        return "100%"
      }
    }
  }

  return (
    <main className="page">
      <section className="tracking">
        <div className="tracking__container">
          <div className="tracking__wrapper">
            <h1 className="tracking__title def-title">ОТСЛЕЖИВАНИЕ</h1>
            <h2 className="tracking__subtitle">
              Узнайте, где на данный момент находится Ваш груз или посылка
            </h2>
            <div className="tracking__input-wrapper">
              <input
                className="tracking__input tracking-input"
                type="text"
                id="tracking"
                placeholder="Введите ваш номер тут..."
                onInput={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <label className="tracking__label tracking-label" htmlFor="tracking">
                Введите Ваш трек номер и ножмите кнопку “Отследить”.
              </label>
            </div>
            <button
              className="tracking__btn def-btn"
              onClick={async () => {
                const response = await axios('https://ades.kg:8083/product/hatch/' + search)
                console.log(response)
                setData(response.data)
              }}
            >ОТСЛЕДИТЬ</button>
          </div>
          {
            data && (
              <div className="tracking__status tracking-status">
                <h3 className="tracking-status__title">Текущий статус:</h3>
                <div className="tracking-status__line">
                  <div className="tracking-status__inner" style={{
                    width: getPercent(data?.status)
                  }}>
                    {
                      data?.status === "in_storage" && <span>на складе</span>
                    }
                    {
                      data?.status === "on_the_way" && <span>в пути</span>
                    }
                    {
                      data?.status === "delivered" && <span>в кыргызстане</span>
                    }
                  </div>
                </div>
                <span className="tracking-status__subtitle">Информация:</span>
                <ul className="tracking-status__info tracking-info">
                  <li className="tracking-info__items">
                    <span className="tracking-info__naming">Штрих:</span>
                    <span className="tracking-info__date">{data?.hatch}</span>
                  </li>
                  <li className="tracking-info__items">
                    <span className="tracking-info__naming">Дата:</span>
                    <span className="tracking-info__date">{data?.dateCreated.slice(0, 16)}</span>
                  </li>
                  <li className="tracking-info__items">
                    <span className="tracking-info__naming">Был принят на склад:</span>
                    <span className="tracking-info__date">
                      {
                        data?.status === "in_storage" && "на складе"
                      }
                      {
                        data?.status === "on_the_way" && "в пути"
                      }
                      {
                        data?.status === "delivered" && "в кыргызстане"
                      }
                    </span>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Tracking