import React from 'react'

const OurProjectsCards = ({ title }) => {
  return (
    <>
      <div className="our-projects-card__container">
        <div className="our-projects-card__background">
          <span className="our-projects-card__title">{title}</span>
        </div>
      </div>
    </>
  )
}

export default OurProjectsCards
