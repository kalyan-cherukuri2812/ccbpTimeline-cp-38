import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectsTimeline = props => {
  const {Projectsdetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = Projectsdetails
  return (
    <div>
      <img className="pr-img" src={imageUrl} alt="project" />
      <div className="cr-div1">
        <h1 className="cr-h">{projectTitle}</h1>
        <div className="cr-div2">
          <AiFillCalendar />
          <p className="cr-t-p">{duration}</p>
        </div>
      </div>
      <p className="desc-p">{description}</p>
      <a className="anc" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectsTimeline
