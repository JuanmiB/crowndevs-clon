import '../../index.scss'
import HeadMain from '../../components/HeadMain'
import MetodMain from '../../components/MetodMain'
import OurProjects from '../../components/OurProjects'

export default function MainLayout () {
  return (
    <div className='main_container'>
      <HeadMain />
      <MetodMain />
      <OurProjects />

    </div>
  )
}
