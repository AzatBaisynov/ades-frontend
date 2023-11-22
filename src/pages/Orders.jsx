// import { Link } from "react-router-dom"


const Orders = () => {
  return (
    <main className="page">
      <section className="order">
        <div className="order__container">
          <div className="order__wrapper">
            <h1 className="order__title def-title">Заказать</h1>
            <input className="order__search-input" type="text" placeholder="Поиск" />
            <table className="order__table">
              <thead>
                <tr> 
                  <th>#</th>
                  <th>Код</th>
                  <th>Штрих код</th>
                  <th>Статус</th>
                  <th>Дата</th>
                  <th>Вес</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                  <td>Данные</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Orders