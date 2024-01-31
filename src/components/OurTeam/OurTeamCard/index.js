import React from 'react'
import './styles.scss'
const OurTeamCards = ({ member }) => {
  return (
    <div className='our-team-cards__container'>
      {/* <div > */}
        <img className='our-team-cards__img' alt='' src={member.img}/>
      {/* </div> */}
      <span className='our-team-cards__name'>{member.name}</span>
      <span className='our-team-cards__role'>{member.role}</span>
    </div>
  )
}

export default OurTeamCards
