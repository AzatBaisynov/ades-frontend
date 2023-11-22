import telegramSVG from "../assets/img/telegram.svg"
import whatsapSvg from "../assets/img/whatsapp.svg"
import instagramSVG from "../assets/img/instagram.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__wrapper">
          <li className="footer__blocks">
            <a className="footer__logo" href="home.html"></a>
            <p className="footer__logo-text">
              Логистическая компания по поиску, выкупу, доставки товаров из Китая.
            </p>
          </li>
          <li className="footer__blocks footer__blocks--second">
            <div className="footer__inner">
              <a className="footer__links footer__links-location" href="https://go.2gis.com/amdqr">
                Кыргызстан, Бишкек
                <span className="footer__location-span">Анкара 10Б, бутик 6</span>
              </a>
            </div>
            <div className="footer__inner">
              <a className="footer__links footer__links--phone" href="tel:+996225905055">
                <span />
                +996 225 905 055
              </a>
              <span className="footer__links footer__links--time">
                <span />
                12:00-18:00
              </span>
            </div>
          </li>
          <li className="footer__blocks footer__blocks--social">
            <a className="footer__social" href="https://t.me/+Yn4OkYESMvU5Mjky">
              <img src={telegramSVG} alt="" width={25} height={25} />
            </a>
            <a className="footer__social" href="https://wa.me/996225905055">
              <img src={whatsapSvg} alt="" width={25} height={25} />
            </a>
            <a className="footer__social" href="https://instagram.com/ades_express_cargo?igshid=NzZlODBkYWE4Ng==">
              <img src={instagramSVG} alt="" width={25} height={25} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;