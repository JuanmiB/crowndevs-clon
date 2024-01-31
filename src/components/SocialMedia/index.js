import React from 'react'
import {
  PiInstagramLogoThin,
  PiFacebookLogoThin,
  PiLinkedinLogoThin,
  PiGithubLogoLight
} from 'react-icons/pi'
import './styles.scss'

const SocialMedia = () => {
  const openUrl = (link) => {
    window.open(`https://${link}.com`, '_blank')
  }

  return (
    <div className="social-media">
      <div className="social-media__container">
        <PiFacebookLogoThin className="social-media__icons" onClick={() => openUrl('facebook')} size={50} />
        <PiInstagramLogoThin className="social-media__icons" onClick={() => openUrl('instagram')} size={50} />
        <PiLinkedinLogoThin className="social-media__icons" onClick={() => openUrl('linkedin')} size={50} />
        <PiGithubLogoLight className="social-media__icons" onClick={() => openUrl('github')} size={50} />
      </div>
      <div className="social-media__rights-text">
        <span>© 2020 CrownDevs Agency. All rights reserved.</span>
      </div>
    </div>
  )
}

export default SocialMedia
