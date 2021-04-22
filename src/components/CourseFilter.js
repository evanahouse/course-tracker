import React from "react"

const CourseFilter = (props) => {
    return (
        <select className="subject-filter" onChange={props.onChange}>
            <option value="all">All Subjects</option>
            {props.subjects.map(subject => <option key={subject} value={subject}>{subject}</option>)}
        </select>
    )
}

export default CourseFilter