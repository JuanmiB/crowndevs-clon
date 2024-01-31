import ProjectsHeader from '../OurProjects/Head/Header.jsx'
import OurTeamCards from './OurTeamCard/index'
import './styles.scss'
import { teamMembers } from '../../utils/constants'
export default function OurTeam () {
  return (
    <div className='ourTeam'>
      <ProjectsHeader title={'Our Team'} />

      <div className='divider div_flat'></div>

      <div className="our-team__container">
        {
          teamMembers.map((item, i) => {
            return (
            <OurTeamCards
            key={i}
            member={item} />
            )
          })
        }
      </div>
      {/* <div>
        <img
          className="our-team__text-background"

        />
      </div>
      <div className="our-team__text-background2__container">
        <img
          className="our-team__text-background2"
          src
          alt=""
        />
      </div> */}
    </div>
  )
}
