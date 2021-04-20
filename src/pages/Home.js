import React from 'react'
import Course from "../components/Course"

class Home extends React.Component {
render(){
        return (
            <div>
                <h1>browse courses</h1>
                <div className="courseContainer">
                    {this.props.courses.map(course => {
                        return <Course course={course} key={course.id} addCourse={this.props.addCourse}/>
                    })}
                </div>
            </div>
        )
    }

}

export default Home