import React from 'react'
import './Card.scss'
const OurProjectsCards = ({ title }) => {
  return (
    <>
      <div className="card_container">
        <div className="card_background">
          <h4 className="card_title">{title}</h4>
        </div>
      </div>
    </>
  )
}

export default OurProjectsCards
