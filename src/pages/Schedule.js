import React from 'react'
import CourseSchedule from '../components/CourseSchedule'

const Schedule = (props) => {
    let times = ["0800", "0830", "0900", "0930", "1000", "1030", "1100", "1130", "1200", "1230", "1300", "1330", "1400", "1430", "1500", "1530", "1600", "1630", "1700", "1730", "1800", "1830"];

    return (
        <div className="scheduleContainer">
            <div className="schedule" aria-labelledby="schedule-heading">
                    <span className="day-slot" aria-hidden="true" style={{ gridColumn: "monday", gridRow: "days" }}>Monday</span>
                    <span className="day-slot" aria-hidden="true" style={{ gridColumn: "tuesday", gridRow: "days" }}>Tuesday</span>
                    <span className="day-slot" aria-hidden="true" style={{ gridColumn: "wednesday", gridRow: "days" }}>Wednesday</span>
                    <span className="day-slot" aria-hidden="true" style={{ gridColumn: "thursday", gridRow: "days" }}>Thursday</span>
                    <span className="day-slot" aria-hidden="true" style={{ gridColumn: "friday", gridRow: "days" }}>Friday</span>
                    {times.map(time => {
                        return <CourseSchedule key={time} timeSlot={time} courses={props.courses} />
                    })}
                </div>
        </div>
    )
}

export default Schedule