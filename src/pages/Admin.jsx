import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


const Admin = () => {

  const [data, setData] = useState([])
  const [check, setCheck] = useState(false)

  const getData = async () => {
    const resp = await axios('https://ades.kg:8083/storage/all')
    console.log(resp)
    setData(resp.data)
    setCheck(resp.data[0].isActive)
  }

  const changeShop = async (e) => {
    console.log(e.target.id)
    const resp = await axios('https://ades.kg:8083/storage/active/' + e.target.id)
    console.log(resp.data)
    setCheck(!check)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main className="page">
      <section className="admin">
        <div className="admin__container">

          <div className="admin__btn-wrapper">
            <h2 className="admin__btn-title def-title">Активный магазин</h2>
            <div className="admin__btn__inner">
              <div class="form_radio_btn">
                <input id={data[0]?.id} type="radio" name="radio" value="1" onChange={changeShop} checked={check} />
                <label for={data[0]?.id}>E shop</label>
              </div>
  
              <div class="form_radio_btn">
                <input id={data[1]?.id} type="radio" name="radio" value="2" onChange={changeShop} checked={!check} />
                <label for={data[1]?.id}>U shop</label>
              </div>
            </div>
          </div>

          <div className="admin__wrapper">
            <div className="admin__content-wrapper">
            <h1 className="admin__title def-title">E shop</h1>
              <Link to="/excel/1/cn" className="admin__link">Link</Link>
              <p className="admin__text">
                Загрузить Excel по магазину 1 (Китай)
              </p>
              <Link to="/excel/1/kg" className="admin__link">Link</Link>
              <p className="admin__text">
                Загрузить Excel по магазину 1 (Бишкек)
              </p>
              <button className="admin__download" 
                onClick={() => {
                  const resp = axios('https://ades.kg:8083/users/shop/' + data[0].id, {
                    method: "GET",
                    responseType: 'blob'
                  }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `users.xlsx`); // Имя файла, которое вы установили в бэкенде
                    document.body.appendChild(link);
                    link.click();

                    // Очистка
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  })
                    .catch((error) => {
                      console.error('Ошибка при скачивании файла:', error);
                    });
                }}
              >Excel</button>
              <p className="admin__text">загрузить список клиентов магазина</p>
            </div>

            <div className="admin__content-wrapper">
            <h1 className="admin__title def-title">U shop</h1>
              <Link to="/excel/2/ch" className="admin__link">Link</Link>
              <p className="admin__text">
                Загрузить Excel по магазину 1 (Китай)
              </p>
              <Link to="/excel/2/kg" className="admin__link">Link</Link>
              <p className="admin__text">
                Загрузить Excel по магазину 1 (Бишкек)
              </p>
              <button className="admin__download"
                onClick={() => {
                  const resp = axios('https://ades.kg:8083/users/shop/' + data[1].id, {
                    method: "GET",
                    responseType: 'blob'
                  }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `users.xlsx`); // Имя файла, которое вы установили в бэкенде
                    document.body.appendChild(link);
                    link.click();

                    // Очистка
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  })
                    .catch((error) => {
                      console.error('Ошибка при скачивании файла:', error);
                    });
                }}
              >Excel</button>
              <p className="admin__text">загрузить список клиентов магазина</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Admin