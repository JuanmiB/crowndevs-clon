import { IMAGEN_BACKGROUND, INFO_CARD } from '../../assets/images'
import Card from '../../components/Card'
import ProjectLayout from '../../layout/Projects'
import ProjectsHeader from '../../components/OurProjects/Header'
import OurProjectsCards from '../../components/OurProjects/Card'

export default function Main () {
  return (
    <main className='main'>
      <div className="main_bgImgContainer">
        <div className="main_bgImgContainer_box">
          <div className='main_bgImgContainer_box_card'>
            <img src={IMAGEN_BACKGROUND} alt="imagen de fondo" />
          </div>
        </div>
      </div>
      <div style={{ margin: '0 20px' }}>

        <div className='main_appSeccion'>
          <div className='main_firstSeccion'>
            <div className='divider div_flat'></div>
            <div className='divider div_rectum'></div>
            <div className='main_firstSeccion_content'>
              <div className='main_firstSeccion_content_title'>
                <h1>Titulo de la seccion</h1>
              </div>
              <div className='main_firstSeccion_content_description'>
                <p>Descripcion de la seccion</p>
              </div>
              <div className='main_firstSeccion_content_button'>
                <button>Boton de la seccion</button>
              </div>
            </div>

          </div>
          <div>dasdas</div>
          <div>dsadasd</div>
          <div>saddas</div>
          <div>dasdas</div>
          <div>dsadsadas</div>
        </div>

        <section className='seccionMethodology'>
          <span>Nuestra metodologia</span>
          <div className='cardContainer'>
            {
              INFO_CARD.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                  />
                )
              })
            }
          </div>
        </section>

        <ProjectLayout>
          {/* HEADER */}
          <ProjectsHeader />

            {/* DIVIDER */}
          <div>Divider</div>

            {/* CONTENT */}
          <OurProjectsCards title={'proyecto'}/>
        </ProjectLayout>
      </div>
    </main>
  )
}
