import Button from '../Button/index'
export default function HeadMain () {
  return (
        <div className='main_appSeccion'>
        <div className='main_firstSeccion'>
          <div className='divider div_flat'></div>
          <div className='divider div_rectum'></div>
          <div className='main_firstSeccion_content'>
            <div className='main_firstSeccion_content_title'>
              <h1>Human Centralice Technologies</h1>
            </div>
            <div className='main_firstSeccion_content_description'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className='main_firstSeccion_content_button'>
              <Button text={'LEARN MORE'} />
            </div>
          </div>
        </div>
      </div>
  )
}
