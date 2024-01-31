import OurTeamCards from './OurTeamCard/index'
import ArrowsContainer from '../OurProjects/Head/index.jsx'
import Divider from '../Divider/index.js'
import useCarousel from '../../hooks/useCarousel.jsx'
import { teamMembers } from '../../utils/constants'
import './styles.scss'

export default function OurTeam () {
  const width = 250
  const { counter, slide, containerElement } = useCarousel(0, teamMembers, width)

  return (
    <section className='ourTeam'>
      <ArrowsContainer title={'Our Team'} onSlide={slide} />

      <Divider className={'div_flat'} />

      <div className="our-team__container" ref={containerElement} style={{ transform: `translate(${counter}px)` }}>
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
    </section>
  )
}
