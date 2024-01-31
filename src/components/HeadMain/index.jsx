import Button from '../Button/index'
import Divider from '../Divider'
import './Styles.scss'
export default function HeadMain () {
  return (
    <div className='appSeccion'>
      <div className='firstSeccion'>
        <Divider className={'div_flat'} />
        <Divider className={'div_rectum'} />
        <div className='firstSeccion_content'>
          <div className='firstSeccion_content_title'>
            <h1>Human Centralice Technologies</h1>
          </div>
          <div className='firstSeccion_content_description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className='firstSeccion_content_button'>
            <Button text={'LEARN MORE'} />
          </div>
        </div>
      </div>
    </div>
  )
}
