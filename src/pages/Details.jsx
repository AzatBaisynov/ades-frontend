

const Details = () => {
  return (
    <main className="page">
      <section className="details">
        <div className="details__container">
          <div className="details__title-wrapper">
            <h1 className="details__title details__fonts-style">
              Здравствуйте вас приветствует логистическая компания ADES EXPRESS. 7-12
              дней со дня поступления на склад.
            </h1>
          </div>
          <h2 className="details__subtitle details__fonts-style">
            Дорогие клиенты перед тем, как оформлять заказ, просим внимательно
            прочитать условия заказа!
          </h2>
          <ul className="details__list">
            <li className="details__items">
              Внимательно прочитайте список запрещенных товаров.
            </li>
            <li className="details__items">
              Хрупкие, легко ломающиеся товары просим не заказывать. При случае заказа
              сообщать заранее- для того, чтобы мы сделали вам обрешетку.
            </li>
            <li className="details__items">
              За заводской брак ответственность не несем.
            </li>
            <li className="details__items">
              Проверяйте личный код и адрес при заказе.
            </li>
            <li className="details__items">
              При заказе габаритных товаров от 50 кг- просим предупреждать- будет
              выдан другой адрес
            </li>
            <li className="details__items">
              Также за обрешетку взимается плата и вес товара считается вместе с
              обрешеткой.
            </li>
            <li className="details__items">
              Купленный товар возврату не подлежит- мы отвечаем только за перевозку
            </li>
            <li className="details__items">
              Сроки доставки указаны без учета задержек и форс мажорных ситуаций.
            </li>
            <li className="details__items">Минимальный допустимый вес 0,1кг.</li>
            <li className="details__items">
              Вес считается вместе с упаковкой (упаковка вашего поставщика).
            </li>
            <li className="details__items">
              Бесплатное хранение -15 дней, далее-20 сом . После 1 месяца- идёт
              утилизация товара!
            </li>
          </ul>
          <h2 className="details__red-subtitle details__fonts-style">
            Запрещенные к перевозке через АВТО товары из Китая:
          </h2>
          <ul className="details__red-list">
            <li className="details__red-items">
              Горючие вещества, сжатые газы, аэрозоли и вещи их содержащие
            </li>
            <li className="details__red-items">Медикаменты</li>
            <li className="details__red-items">
              Запрещены продукты питания, чай и все что связано с пищевой продукцией.
            </li>
            <li className="details__red-items">Колющие и режущие предметы</li>
            <li className="details__red-items">Горючие вещества, спирты</li>
            <li className="details__red-items">
              Товары военного предназначения (экипировка, баллистические калькуляторы,
              прицелы и тп.)
            </li>
          </ul>
          <div className="details__text-wrapper">
            <p className="details__fonts-style">
              За сохранность предметов из хрупких материалов таких как хрусталь,
              керамика, фарфор, гипс, зеркала, стекло, стаканы, вазы и т.д., компания
              ответственности не несет! Если заказываете хрупкий товар - заранее
              предупреждайте для обрешетки товара!
            </p>
          </div>
          <h2 className="details__attention details__fonts-style">
            ВНИМАНИЕ!
          </h2>
          <h2 className="details__red-title details__fonts-style">
            Если вы хотите заказать жидкость, аккумуляторы, технику и т.д - СВЯЖИТЕСЬ С НАШИМ МЕНЕДЖЕРОМ ОН ВЫДАСТ ВАМ ДРУГОЙ АДРЕС СКЛАДА, ПРИВЕЗЕМ ОТ 50КГ И ВЫШЕ ЛЮБОЙ ТОВАР!
          </h2>
        </div>
      </section>
    </main>
  )
}

export default Details