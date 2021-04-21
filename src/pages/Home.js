import React from 'react'
import Course from "../components/Course"

class Home extends React.Component {
render(){
        return (
            <div className="mainContainer">
                <h1>browse courses</h1>
                <div className="courseContainer">
                    {this.props.courses.map(course => {
                        return <Course course={course} key={course.id} location={this.props.location} addCourse={this.props.addCourse}/>
                    })}
                </div>
            </div>
        )
    }

}

export default Home