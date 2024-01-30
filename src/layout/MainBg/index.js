import { IMAGEN_BACKGROUND } from '../../assets/images'
export default function MainBgLayout () {
  return (
    <div className="main_bgImgContainer">
      <div className="main_bgImgContainer_box">
        <div className='main_bgImgContainer_box_card'>
          <img src={IMAGEN_BACKGROUND} alt="imagen de fondo" />
        </div>
      </div>
    </div>
  )
}
