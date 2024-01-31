import SocialMedia from '../SocialMedia'
import BackgroundFooter from '../../assets/footerBgImg.png'
import LocationIcon from '../../assets/locationIcon.png'
import './styles.scss'
import Form from '../Form'
export default function Footer () {
  return (
    <div className="footer" id="footer">
      <div className="footer__container">
        <img className="footer__img" alt="" src={LocationIcon} />
        <span className="footer__title">ARGENTINA</span>
        <span className="footer__description">
          Av. Libertador 2890, CABA, Buenos Aires
        </span>
        <span className="footer__description">+54 911 4638 9423</span>
        <span className="footer__description">hello@crowndevs.com</span>
      </div>

      <Form />
      <img
        className="footer__background__image"
        alt=""
        src={BackgroundFooter}
      />
      <SocialMedia />
    </div>
  )
}
