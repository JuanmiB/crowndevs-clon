import ProjectLayout from '../../layout/Projects'
import ProjectsHeader from './Head/Header.jsx'
import OurProjectsCards from './Card/Card'
import './styles.css'
// import { projects } from '../../utils/constants'
// import { useState, useEffect, useRef } from 'react'
export default function OurProjects () {
  return (
        <ProjectLayout>
        {/* HEADER */}
        <ProjectsHeader title={'Proyectos'} />

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
