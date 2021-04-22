import React from 'react'

const timeToString = (time, i) => {
    time = time.split(" ")[1].split("-")[i].split("")
    time.splice(time.indexOf(":"), 1)
    time = time.join("")
    if (time.length === 3) {
        time = "0" + time
    }
    return time
}

const formatTime = (time) => {
    let timeArr = [time.substr(0, 2), time.substr(2)]
    if (parseInt(timeArr[0]) > 12) {
        timeArr[0] = timeArr[0] - 12
    }
    else if (parseInt(timeArr[0]) < 10) {
        timeArr[0] = timeArr[0].substr(1, 1)
    }
    return timeArr.join(":")
}

const getDay = (block) => block.map(course => course.time.split(" ")[0])

const CourseSchedule = (props) => {
    let block = props.courses.filter(course => props.timeSlot[0] === timeToString(course.time, 0)).sort((a, b) => a.time - b.time)
    return (
        <React.Fragment>
            <h2 className="time-slot" style={{ gridRow: `time-${props.timeSlot[0]}` }}>{formatTime(props.timeSlot[0])}</h2>
            {
                block.length === 0
                    ? null
                    : getDay(block).includes("M-W-F") ?
                        <div className="course-block" style={{ gridColumn: "monday", gridRow: `time-${props.timeSlot[0]} / time-${props.timeSlot[1]}` }}>
                            <h5 className="course-name">{`${block[0].subject} ${block[0].number}`}</h5>
                            <h5 className="course-title">{block[0].title}</h5>
                            <h5 className="course-time">{block[0].time.split(" ")[1]}</h5>
                            <h5 className="course-teacher">Instructor: {block[0].teacher}</h5>
                        </div> : null
            }
            {
                block.length === 0
                    ? null
                    : getDay(block).includes("T-Th") ?
                        <div className="course-block" style={{ gridColumn: "tuesday", gridRow: `time-${props.timeSlot[0]} / time-${timeToString(block[block.length - 1].time, 1)}` }}>
                            <h5 className="course-name">{`${block[block.length - 1].subject} ${block[block.length - 1].number}`}</h5>
                            <h5 className="course-title">{block[block.length - 1].title}</h5>
                            <h5 className="course-time">{block[block.length - 1].time.split(" ")[1]}</h5>
                            <h5 className="course-teacher">Instructor: {block[block.length - 1].teacher}</h5>
                        </div> : null
            }
            {
                block.length === 0
                    ? null
                    : getDay(block).includes("M-W-F") ?
                        <div className="course-block" style={{ gridColumn: "wednesday", gridRow: `time-${props.timeSlot[0]} / time-${props.timeSlot[1]}` }}>
                            <h5 className="course-name">{`${block[0].subject} ${block[0].number}`}</h5>
                            <h5 className="course-title">{block[0].title}</h5>
                            <h5 className="course-time">{block[0].time.split(" ")[1]}</h5>
                            <h5 className="course-teacher">Instructor: {block[0].teacher}</h5>
                        </div> : null
            }
            {
                block.length === 0
                    ? null
                    : getDay(block).includes("T-Th") ?
                        <div className="course-block" style={{ gridColumn: "thursday", gridRow: `time-${props.timeSlot[0]} / time-${timeToString(block[block.length - 1].time, 1)}` }}>
                            <h5 className="course-name">{`${block[block.length - 1].subject} ${block[block.length - 1].number}`}</h5>
                            <h5 className="course-title">{block[block.length - 1].title}</h5>
                            <h5 className="course-time">{block[block.length - 1].time.split(" ")[1]}</h5>
                            <h5 className="course-teacher">Instructor: {block[block.length - 1].teacher}</h5>
                        </div> : null
            }
            {
                block.length === 0
                    ? null
                    : getDay(block).includes("M-W-F") ?
                        <div className="course-block" style={{ gridColumn: "friday", gridRow: `time-${props.timeSlot[0]} / time-${props.timeSlot[1]}` }}>
                            <h5 className="course-name">{`${block[0].subject} ${block[0].number}`}</h5>
                            <h5 className="course-title">{block[0].title}</h5>
                            <h5 className="course-time">{block[0].time.split(" ")[1]}</h5>
                            <h5 className="course-teacher">Instructor: {block[0].teacher}</h5>
                        </div> : null
            }
        </React.Fragment>
    )
}

export default CourseSchedule