import React from 'react'

const formatTime = (time, i) => {
    time = time.split(" ")[1].split("-")[i].split("")
    time.splice(time.indexOf(":"), 1)
    time = time.join("")
    if (time.length === 3) {
        time = "0" + time
    }
    return time
}

const CourseSchedule = (props) => {
    let temp = props.courses.filter(course => props.timeSlot === formatTime(course.time, 0))
    return (
        <React.Fragment> 
            <h2 className="time-slot" style={{ gridRow: `time-${props.timeSlot}` }}>{props.timeSlot}</h2>
            <div className="course monday" style={{ gridColumn: "monday", gridRow: `time-${props.timeSlot}` }}>
                {temp.length > 0 && temp[0].time.split(" ")[0] === "M-W-F" ?
                    <div className="scheduleInstance">
                        <h3 className="course-name">{`${temp[0].subject} ${temp[0].number}`}</h3>
                        <h3 className="course-title">{temp[0].title}</h3>
                        <h3 className="course-time">{temp[0].time.split(" ")[1]}</h3>
                        <h3 className="course-teacher">{temp[0].teacher}</h3>
                    </div> : null}
            </div>
            <div className="course tuesday" style={{ gridColumn: "tuesday", gridRow: `time-${props.timeSlot}` }}>
                {temp.length > 0 && temp[0].time.split(" ")[0] === "T-Th" ?
                    <div className="scheduleInstance">
                        <h3 className="course-name">{`${temp[0].subject} ${temp[0].number}`}</h3>
                        <h3 className="course-title">{temp[0].title}</h3>
                        <h3 className="course-time">{temp[0].time.split(" ")[1]}</h3>
                        <h3 className="course-teacher">{temp[0].teacher}</h3>
                    </div> : null}
            </div>
            <div className="course wednesday" style={{ gridColumn: "wednesday", gridRow: `time-${props.timeSlot}` }}>
                {temp.length > 0 && temp[0].time.split(" ")[0] === "M-W-F" ?
                    <div className="scheduleInstance">
                        <h3 className="course-name">{`${temp[0].subject} ${temp[0].number}`}</h3>
                        <h3 className="course-title">{temp[0].title}</h3>
                        <h3 className="course-time">{temp[0].time.split(" ")[1]}</h3>
                        <h3 className="course-teacher">{temp[0].teacher}</h3>
                    </div> : null}
            </div>
            <div className="course thursday" style={{ gridColumn: "thursday", gridRow: `time-${props.timeSlot}` }}>
                {temp.length > 0 && temp[0].time.split(" ")[0] === "T-Th" ?
                    <div className="scheduleInstance">
                        <h3 className="course-name">{`${temp[0].subject} ${temp[0].number}`}</h3>
                        <h3 className="course-title">{temp[0].title}</h3>
                        <h3 className="course-time">{temp[0].time.split(" ")[1]}</h3>
                        <h3 className="course-teacher">{temp[0].teacher}</h3>
                    </div> : null}
            </div>
            <div className="course friday" style={{ gridColumn: "friday", gridRow: `time-${props.timeSlot}` }}>
                {temp.length > 0 && temp[0].time.split(" ")[0] === "M-W-F" ?
                    <div className="scheduleInstance">
                        <h3 className="course-name">{`${temp[0].subject} ${temp[0].number}`}</h3>
                        <h3 className="course-title">{temp[0].title}</h3>
                        <h3 className="course-time">{temp[0].time.split(" ")[1]}</h3>
                        <h3 className="course-teacher">{temp[0].teacher}</h3>
                    </div> : null}
            </div>
        </React.Fragment>
    )
}

export default CourseSchedule