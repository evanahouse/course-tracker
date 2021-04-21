import React from "react"
import Course from "../components/Course"

const CourseBrowser = (props) => {
    return (
        <div className="mainContainer">
            {props.showing === "all" ? <h1>Browse Courses</h1> : <h1>My Courses</h1>}
            <div className="courseContainer">
                {props.courses.map(course => <Course course={course} key={course.id} onClick={props.onClick}/>)}
            </div>
        </div>
    )
}

export default CourseBrowser