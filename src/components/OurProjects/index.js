import OurProjectsCards from './Card/Card'
import { projects } from '../../utils/constants'
import './styles.css'
import Divider from '../Divider/index.js'
import ArrowsContainer from './Head/index.jsx'
import useCarousel from '../../hooks/useCarousel.jsx'

const OurProjects = () => {
  const width = window.innerWidth
  const { counter, slide, containerElement: projectElements } = useCarousel(0, projects, width > 1280 ? 480 : 320)

  return (
    <section style={{ color: '#fff', marginTop: '55px' }}>
      <ArrowsContainer title={'Proyectos'} onSlide={slide} />
      <Divider className={'div_flat'} />
      <div
        className='projectsContainer'
        ref={projectElements}
        style={{ transform: `translate(${counter}px)` }}
      >
        {projects.map((project, index) => (
          <OurProjectsCards key={index} title={project.title} />
        ))}
      </div>
    </section>
  )
}

export default OurProjects
