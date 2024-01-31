import '../../index.scss'
import HeadMain from '../../components/HeadMain'
import OurMetod from '../../components/OurMetod'
import OurProjects from '../../components/OurProjects'
import OurTeam from '../../components/OurTeam'
import Footer from '../../components/Footer'

export default function MainLayout () {
  return (
    <div className='main_container'>
      <HeadMain />
      <OurMetod />
      <OurProjects />
      <OurTeam/>
      <Footer/>
    </div>
  )
}
