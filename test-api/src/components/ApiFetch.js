import React, { Component } from 'react';
import apifetch from './ApiFetch.js'

export default class ApiFetch extends Component{
  constructor(){
    super();
    this.state = {
      personas: [],
    };
  }
  componentWillMount(){
    fetch('https://randomuser.me/api/?results=4')
    .then(results =>{
      return results.json();
    }).then(data =>{
      let persona = data.results.map((misc) =>{
        return(
          <div key={misc.results}>
            <img src={misc.picture.medium} alt="img avatar"/>
            <p >
              <span>{misc.gender} </span>
              <span>{misc.name.title} </span>
              <span>{misc.name.first} </span>
              <span>{misc.name.last}</span>
            </p>
          </div>
        )
          })
          this.setState({personas: persona});
          console.log("state", this.state.personas);
      })
    }
    render(){
      return(
        <div className="container2">
          <div className="container1">
            {this.state.personas}
          </div>
        </div>
      )
    }
}
