import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
export default function ProjectsHeader () {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Proyectos</h3>
              <div className="our-projects__header__container-arrows">
                <MdKeyboardArrowLeft
                  size={35}
                  className="our-projects__header__arrow"
                  />
                <MdKeyboardArrowRight
                  size={35}
                  className="our-projects__header__arrow"
                  />
              </div>
          </div>
  )
}
