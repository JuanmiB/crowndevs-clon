import { IMAGEN_BACKGROUND } from '../../assets/images'
import './styles.scss'
export default function MainBgLayout () {
  return (
    <div className="bgImgContainer">
      <div className="bgImgContainer_box">
        <div className='bgImgContainer_box_card'>
          <img src={IMAGEN_BACKGROUND} alt="imagen de fondo" />
        </div>
      </div>
    </div>
  )
}
