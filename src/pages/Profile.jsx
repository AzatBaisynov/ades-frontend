import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


const Profile = () => {

  const [data, setData] = useState({})

  const getData = async () => {
    const info = await axios("https://ades.kg:8083/users/info", {
      headers: {
        "Authorization" : localStorage.getItem('token')
      }
    })
    console.log(info.data)
    info.data.personal_code = info.data.personal_code.replace("U", "U-").replace("E", "E-")
    setData(info?.data)
  }

  useEffect(() => {
    getData()
  },[])

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      const code = 'test'
      navigator.clipboard.writeText(text).then(() => {
        console.log(`Текст скопирован: ${text}`);
      }).catch((error) => {
        console.error("Ошибка при копировании текста:", error);
      });
    }
  }

  const handleCopyAddress = () => {
    const t1 = "1"+document.querySelector("#t1").innerText
    const t2 = "2"+document.querySelector("#t2").innerText
    const t3 = "3"+document.querySelector("#t3").innerText
    const t4 = "4"+document.querySelector("#t4").innerText

    const text = t1 + "\n" + t2 + "\n" + t3 + "\n" + t4

    navigator.clipboard.writeText(text).then(() => {
      console.log(`Текст скопирован: ${text}`);
    }).catch((error) => {
      console.error("Ошибка при копировании текста:", error);
    });
  }

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title def-title">ВАШ ЛИЧНЫЙ КОД</h1>
          <div className="profile__wrapper">
            <div className="profile__blocks profile-important">
              <div className="profile-important__wrapper">
                <h2 className="profile-important__title">Важно!</h2>
                <p className="profile-important__text">
                  Не забудьте ознакомиться со списком запрещенных к перевозке товаров
                  из КИТАЯ.
                </p>
                <span className="profile-important__price">
                  4,5$ - 1 кг/ до 200г - 100 сом за вес
                </span>
              </div>
              <Link to="/details" className="profile-important__btn def-btn">ЧИТАТЬ ВСЕМ</Link>
            </div>
            <div className="profile__blocks profile-bio">
              <span className="profile-bio__name">{data?.name} {data?.surname}</span>
              <span className="profile-bio__code">际{data?.personal_code}</span>
              <span className="profile-bio__phone">{data?.phone}</span>
              <button className="profile-bio__btn def-btn" onClick={() => handleCopy(data?.personal_code)}>Скопировать код</button>
            </div>
            <div className="profile__blocks profile-address">
              <ol className="profile-address__list">
                <li className="profile-address__items" id="t1">{data?.personal_code}</li>
                <li className="profile-address__items" id="t2">{data?.storage?.phone}</li>
                <li className="profile-address__items" id="t3">{data?.storage?.address1}</li>
                <li className="profile-address__items" id="t4">{data?.storage?.address2?.replace('E-ваш код', data?.personal_code).replace('U- ваш код', data?.personal_code)}</li>
              </ol>
              <button className="profile-address__btn def-btn" onClick={() => handleCopyAddress()}>
                Скопировать адрес склада
              </button>
            </div>
            <div className="profile__blocks profile-attention">
              <h2 className="profile-attention__title">ВНИМАНИЕ!</h2>
              <p className="profile-attention__text def-text">
                Если вы хотите заказать жидкость, аккумуляторы, технику и крупногабаритный груз - <span>СВЯЖИТЕСЬ С НАШИМ МЕНЕДЖЕРОМ, ОН ВЫДАСТ ВАМ ДРУГОЙ АДРЕС СКЛАДА</span>, цена за 1кг/2.8-3.5$. 
              </p>
              <a className="profile-attention__btn def-btn" href='tel:+996225905055'>
                +996225905055
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-video">
        <div className="profile-video__container">
          <div className="profile-video__blocks">
            <div className="profile-video__info profile-address">
              <h2 className="profile-video__title def-title">Poizon</h2>
              <ol className="profile-address__list">
                <li className="profile-address__items">际{data?.personal_code}</li>
                <li className="profile-address__items">{data?.storage?.phone}</li>
                <li className="profile-address__items">{data?.storage?.address1}</li>
                <li className="profile-address__items">{data?.storage?.address2?.replace('E-ваш код', data?.personal_code).replace('U- ваш код', data?.personal_code)}</li>
              </ol>
              <button className="profile-address__btn def-btn" onClick={() => handleCopyAddress()}>
                Скопировать
              </button>
            </div>
            <div className="profile-video__iframe">
              <iframe width="389" height="692" src="https://www.youtube.com/embed/D3q0165-izE" title="IMG 7898" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div className="profile-video__blocks">
            <div className="profile-video__info profile-address">
              <h2 className="profile-video__title def-title">PINDUODUO</h2>
              <ol className="profile-address__list">
                <li className="profile-address__items">际{data?.personal_code}</li>
                <li className="profile-address__items">{data?.storage?.phone}</li>
                <li className="profile-address__items">{data?.storage?.address1}</li>
                <li className="profile-address__items">{data?.storage?.address2?.replace('E-ваш код', data?.personal_code).replace('U- ваш код', data?.personal_code)}</li>
              </ol>
              <button className="profile-address__btn def-btn" onClick={() => handleCopyAddress()}>
                Скопировать
              </button>
            </div>
            <div className="profile-video__iframe">
              <iframe width="389" height="692" src="https://www.youtube.com/embed/AnCMj48Digc" title="IMG 7889" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div className="profile-video__blocks">
            <div className="profile-video__info profile-address">
              <h2 className="profile-video__title def-title">TAOBAO</h2>
              <ol className="profile-address__list">
                <li className="profile-address__items">际{data?.personal_code}</li>
                <li className="profile-address__items">{data?.storage?.phone}</li>
                <li className="profile-address__items">{data?.storage?.address1}</li>
                <li className="profile-address__items">{data?.storage?.address2?.replace('E-ваш код', data?.personal_code).replace('U- ваш код', data?.personal_code)}</li>
              </ol>
              <button className="profile-address__btn def-btn" onClick={() => handleCopyAddress()}>
                Скопировать
              </button>
            </div>
            <div className="profile-video__iframe">
              <iframe width="389" height="692" src="https://www.youtube.com/embed/Xf9SDCixUoQ" title="IMG 7885" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div className="profile-video__blocks">
            <div className="profile-video__info profile-address">
              <h2 className="profile-video__title def-title">1688</h2>
              <ol className="profile-address__list">
                <li className="profile-address__items">际{data?.personal_code}</li>
                <li className="profile-address__items">{data?.storage?.phone}</li>
                <li className="profile-address__items">{data?.storage?.address1}</li>
                <li className="profile-address__items">{data?.storage?.address2?.replace('E-ваш код', data?.personal_code).replace('U- ваш код', data?.personal_code)}</li>
              </ol>
              <button className="profile-address__btn def-btn" onClick={() => handleCopyAddress()}>
                Скопировать
              </button>
            </div>
            <div className="profile-video__iframe">
              <iframe width="389" height="692" src="https://www.youtube.com/embed/2y9nttGDxgc" title="IMG 7887" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile