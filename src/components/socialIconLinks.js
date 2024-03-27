import React from "react"
import { info } from "../json"
import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconInstagram from './images/instagram'

const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href={info.github} target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      {/* <a href={info.instagram} target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`}  />
      </a> */}
      
    </>
  )
}

export default SocialIconLinks
