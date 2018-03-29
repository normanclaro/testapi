import React, { Component } from 'react';
import apifetch from './ApiFetch.js'

export default class ApiFetch extends Component{
  constructor(){
    super();
    this.state = {
      personas: [],
    };
  }


    fetchPersona(event){
      event.preventDefault();

      const requestUrl = 'https://randomuser.me/api';
      fetch(requestUrl)
      .then(results =>{
        return results.json();
      }).then(data => {
        const persona = data.results.map((misc) =>{
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
            this.setState({
              personas: persona
            });
            console.log("state", this.state.personas);
        })
      }


    render(){
      return(
        <div>
          <form action='index.html' method='GET' id='busqueda'>
            <button onClick={this.fetchPersona.bind(this)} type='submit'>Enviar</button>
          </form>
          <div>
            {this.state.personas}
          </div>
        </div>
      )
    }
}
