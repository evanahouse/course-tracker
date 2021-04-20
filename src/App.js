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
  }

  getCourses = () => {
    fetch("http://localhost:3000/courses")
    .then(res => res.json())
    .then(courses => this.setState({courses}))
  }

  addCourse = (course) => {
    fetch(`http://localhost:3000/mycourses`,{
        "method": 'POST',
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(course)
      })
  }
  
  render() {
   
    return (
      <div>
        <Navigation />
      <div>
        
        <BrowserRouter>
          <Switch>
            <Route path="/browse">
              <Home courses={this.state.courses} />
            </Route>
            <Route path="/">
              <Validation />
            </Route>
            <Route path="/user">
              <MyCourses />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;
