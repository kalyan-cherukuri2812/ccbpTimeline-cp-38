import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {coursedetails} = props
  const {courseTitle, description, duration, tagsList} = coursedetails
  return (
    <div>
      <div className="cr-div1">
        <h1 className="cr-h">{courseTitle}</h1>
        <div className="cr-div2">
          <AiFillClockCircle />
          <p className="cr-t-p">{duration}</p>
        </div>
      </div>
      <p className="desc-p">{description}</p>
      <ul className="cr-ul">
        {tagsList.map(each => (
          <p className="cr-li" key={each.id}>
            {each.name}
          </p>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
