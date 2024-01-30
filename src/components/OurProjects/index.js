import ProjectLayout from '../../layout/Projects'
import ProjectsHeader from '../OurProjects/Header'
import OurProjectsCards from '../OurProjects/Card'
export default function OurProjects () {
  return (
        <ProjectLayout>
        {/* HEADER */}
        <ProjectsHeader />

        {/* DIVIDER */}
        <div className='divider div_flat'></div>

        {/* CONTENT */}
        <div className='projectsContainer'>
          <OurProjectsCards title={'Proyecto 1'} />
          <OurProjectsCards title={'Proyecto 2'} />
          <OurProjectsCards title={'Proyecto 3'} />
          <OurProjectsCards title={'Proyecto 4'} />
        </div>
      </ProjectLayout>
  )
}
