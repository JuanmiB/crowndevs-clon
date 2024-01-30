import React from 'react'
import './Card.scss'
const OurProjectsCards = ({ title }) => {
  return (
    <>
      <div className="card_container">
        <div className="card_background">
          <span className="card_title">{title}</span>
        </div>
      </div>
    </>
  )
}

export default OurProjectsCards
