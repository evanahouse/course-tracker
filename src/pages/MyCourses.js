import React from 'react'
import Course from "../components/Course"

class MyCourses extends React.Component {
render(){
        return (
            <div className="mainContainer">
                <h1>my courses</h1>
                <div className="courseContainer">
                    {this.props.courses.map(course => {
                        return <Course course={course} key={course.id} deleteCourse={this.props.deleteCourse}/>
                    })}
                </div>
            </div>
        )
    }

}

export default MyCourses