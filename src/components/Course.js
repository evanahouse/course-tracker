import React from 'react'
import { useLocation } from 'react-router-dom';



class Course extends React.Component {
    
    
    render(){
        let pathname = window.location.pathname
        return(
          <div className="courseCard">
                <span>{this.props.course.title}</span>
                <span>{this.props.course.subject}</span>
                <span>{this.props.course.number}</span>
                <span>{this.props.course.time}</span>
                <span>{this.props.course.teacher}</span>
                {pathname === "/browse" ? 
                    <button className="addBtn"  onClick={() => this.props.addCourse(this.props.course)}>+</button> :
                
                    <button className="addBtn"  onClick={() => this.props.deleteCourse(this.props.course)}>-</button>}
                
            </div>
        )
    }
}
export default Course