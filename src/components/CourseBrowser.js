import React from "react"
import Course from "../components/Course"
import CourseFilter from "./CourseFilter"

class CourseBrowser extends React.Component {

    state = {
        filters: {
            subject: "all"
        }
    }

    setSubjectFilters = (e) => {
        this.setState({ filters: { ...this.state.filters, subject: e.target.value } })
    }

    filterCourses = () => {
        let courses = this.props.courses
        if (this.state.filters.subject !== "all") {
            courses = courses.filter(c => this.state.filters.subject === c.subject);
        }
        return courses
    }

    getSubjects = () => {
        let subjects = []
        for (let c of this.props.courses) {
            !subjects.includes(c.subject) && subjects.push(c.subject)
        }
        return subjects
    }

    render() {
        return (
            <div className="mainContainer">
                {this.props.showing === "all" ? <h1>Browse Courses</h1> : <h1>My Courses</h1>}
                {this.props.showing === "all" ? <CourseFilter subjects={this.getSubjects()} onChange={this.setSubjectFilters} /> : null}
                <div className="courseContainer">
                    {this.props.showing === "all" ? 
                    this.filterCourses().map(course => <Course course={course} key={course.id} onClick={this.props.onClick} />) : 
                    this.props.courses.map(course => <Course course={course} key={course.id} onClick={this.props.onClick} />)}
                </div>
            </div>
        )
    }
}

export default CourseBrowser