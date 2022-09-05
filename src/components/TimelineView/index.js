import './index.css'

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectsTimeline from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  return (
    <div className="bg-container">
      <h1 className="p">
        MY JOURNEY OF <br />
        <span className="h">CCBP 4.0</span>
      </h1>

      <div style={{width: '80%', height: '950px'}}>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(each =>
            each.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={each.id} coursedetails={each} />
            ) : (
              <ProjectsTimeline key={each.id} Projectsdetails={each} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
