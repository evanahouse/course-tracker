import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Schedule from './pages/Schedule'
// import Home from './pages/Home'
// import MyCourses from './pages/MyCourses'
import Validation from './pages/Validation'
import Navigation from './components/Navigation'
import CourseBrowser from './components/CourseBrowser';

class App extends React.Component {
  state = {
    courses: [],
    myCourses: [],
    loggedInStatus: false,
    user: []
  }

  componentDidMount = () => {
    this.getCourses()
    this.getMyCourses()
  }

  getCourses = () => {
    fetch("http://localhost:9393/courses")
      .then(res => res.json())
      .then(courses => this.setState({ courses }))
  }

  getMyCourses = () => {
    fetch("http://localhost:9393/my_courses")
      .then(res => res.json())
      .then(myCourses => this.setState({ myCourses }))
  }

  addCourse = (course) => {
    let update = [...this.state.myCourses]
    fetch(`http://localhost:9393/my_courses`, {
      "method": 'POST',
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(course)
    })
      .then(res => {
        if (res.ok) {
          update.push(course)
        }
        return res.json()
      })
      .then(this.setState({ myCourses: update }))
  }

  deleteCourse = (course) => {
    let updatedList = this.state.myCourses.filter(x => x.id !== course.id)
    fetch(`http://localhost:9393/my_courses/${course.id}`, {
      "method": 'DELETE',
      "headers": {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(this.setState({ myCourses: updatedList }))
  }

  handleLogIn = (values) => {
    let student = {
      name: values.username,
      username: values.username,
      password: values.password
    }
    fetch(`http://localhost:9393/users`, {
      "method": 'POST',
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(student)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  handleRegister = (values) => {
    let student = {
      name: values.username,
      username: values.username,
      email: values.email,
      password: values.password
    }
    fetch(`http://localhost:9393/users`, {
      "method": 'POST',
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(student)
    })
    .then(res => res.json())
    .then(this.setState({
      loggedInStatus: true,
      user: values.username
    }))

  }

  handleLogout = (e) => {
    e.stopPropagation()
    this.setState({
      loggedInStatus: false,
      user: []
    })
  }

  render() {
     console.log(this.state)
    return (
      <div>
        <Navigation loggedIn={this.state.loggedInStatus} handleLogout={this.handleLogout}/>
        <div>


          <Switch>
            <Route path="/browse">
              {/* <Home courses={this.state.courses} addCourse={this.addCourse}/> */}
              <CourseBrowser showing={"all"} courses={this.state.courses} onClick={this.addCourse} />
            </Route>
            <Route exact path="/">
              <Validation register={this.handleRegister} />
            </Route>
            <Route path="/login">
              <Login logIn={this.handleLogIn}/>
            </Route>
            <Route path="/schedule">
              <Schedule courses={this.state.myCourses}/>
            </Route>
            <Route path="/user">
              {/* <MyCourses courses={this.state.myCourses} deleteCourse={this.deleteCourse} /> */}
              <CourseBrowser showing={"user"} courses={this.state.myCourses} onClick={this.deleteCourse} />
            </Route>
          </Switch>

        </div>
      </div>
    )
  }
}

export default App;
