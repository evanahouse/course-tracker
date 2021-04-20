import React from 'react'
class Course extends React.Component {
    render(){
        return(
            
            <div className="courseCard">
                <span>{this.props.course.title}</span>
                <span>{this.props.course.subject}</span>
                <span>{this.props.course.number}</span>
                <span>{this.props.course.time}</span>
                <span>{this.props.course.teacher}</span>
                <button className="addBtn" hidden={false} onClick={() => this.props.addCourse(this.props.course)}>+</button>
                
            </div>
        )
    }
}
export default Course