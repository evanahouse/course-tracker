import React from 'react'
import CourseSchedule from '../components/CourseSchedule'

const Schedule = (props) => {
    let times = [["0800", "0900"], ["0830", "1000"], ["0900", "1000"], ["0930", "1100"], ["1000", "1100"], ["1030", "1200"], ["1100", "1200"], ["1130", "1300"], ["1200", "1300"], ["1230", "1400"], ["1300", "1400"], ["1330", "1500"], ["1400", "1500"], ["1430", "1600"], ["1500", "1600"], ["1530", "1700"], ["1600", "1700"], ["1630", "1800"], ["1700", "1800"], ["1730", "1900"], ["1800", "1900"], ["1830", "2000"]];
    
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