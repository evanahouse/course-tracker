import React from "react"

const CourseFilter = (props) => {
    return (
        <select className="subject-filter" onChange={props.onChange}>
            <option className="dropdown-item" value="all">All Subjects</option>
            {props.subjects.map(subject => <option className="dropdown-item" key={subject} value={subject}>{subject}</option>)}
        </select>
    )
}

export default CourseFilter