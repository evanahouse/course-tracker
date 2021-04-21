import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'

import Home from './pages/Home'
import MyCourses from './pages/MyCourses'
import Validation from './pages/Validation'
import Navigation from './components/Navigation'

class App extends React.Component {
  state = {
      courses: [],
      user: "",
      myCourses: []
    }

  componentDidMount = () => {
    this.getCourses()
    this.getMyCourses()
  }

  getCourses = () => {
    fetch("http://localhost:9393/courses")
    .then(res => res.json())
    .then(courses => this.setState({courses}))
  }

  getMyCourses = () => {
    fetch("http://localhost:9393/my_courses")
    .then(res => res.json())
    .then(myCourses => this.setState({myCourses}))
}

  addCourse = (course) => {
    let update = [...this.state.myCourses]
    fetch(`http://localhost:9393/my_courses`,{
        "method": 'POST',
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(course)
      })
      .then(res => {
        if(res.ok){
          update.push(course)
        }
        return res.json()})
      .then(this.setState({myCourses: update}))
  }

  deleteCourse = (course) => {
    let updatedList = this.state.myCourses.filter(x => x.id !== course.id)
    fetch(`http://localhost:9393/my_courses/${course.id}`,{
        "method": 'DELETE',
        "headers": {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(this.setState({myCourses: updatedList }))
  }
  
  render() {
  //  console.log(pathname)
    return (
      <div>
        <Navigation />
      <div>
        
        
          <Switch>
            <Route path="/browse">
              <Home courses={this.state.courses} addCourse={this.addCourse}/>
            </Route>
            <Route exact path="/">
              <Validation />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/user">
              <MyCourses courses={this.state.myCourses} deleteCourse={this.deleteCourse}/>
            </Route>
          </Switch>
        
      </div>
    </div>
    )
  }
}

export default App;
