import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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
    fetch("http://localhost:9393/mycourses")
    .then(res => res.json())
    .then(myCourses => this.setState({myCourses}))
}

  addCourse = (course) => {
    fetch(`http://http://localhost:9393/mycourses`,{
        "method": 'POST',
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(course)
      })
  }

  deleteCourse = () => {
    
  }
  
  render() {
   console.log(this.state)
    return (
      <div>
        <Navigation />
      <div>
        
        <BrowserRouter>
          <Switch>
            <Route path="/browse">
              <Home courses={this.state.courses} addCourse={this.addCourse}/>
            </Route>
            <Route exact path="/">
              <Validation />
            </Route>
            <Route path="/user">
              <MyCourses courses={this.state.myCourses} deleteCourse={this.deleteCourse}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;
