import React from 'react'
class Course extends React.Component {
    render(){
        return(
            
            <div className="courseCard">
                <span>{this.props.course.title}</span>
                <span>{this.props.course.subject}</span>
                <span>{this.props.course.number}</span>
                <span>{this.props.course.time}</span>
                <span>{this.props.course.teacher_id}</span>
                <button className="addBtn" onClick={() => this.props.add(this.props.course)}>+</button>
                
            </div>
        )
    }
}
export default Course