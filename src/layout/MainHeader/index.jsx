import '../../index.scss'
import HeadMain from '../../components/HeadMain'
import MetodMain from '../../components/MetodMain'
import OurProjects from '../../components/OurProjects'
import OurTeam from '../../components/OurTeam'
import Footer from '../../components/Footer'

export default function MainLayout () {
  return (
    <div className='main_container'>
      <HeadMain />
      <MetodMain />
      <OurProjects />
      <OurTeam/>
      <Footer/>
    </div>
  )
}
