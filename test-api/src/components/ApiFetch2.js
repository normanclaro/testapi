import React, { Component } from 'react';
import apifetch2 from './ApiFetch2.js'
import queryString from 'query-string'

export default class ApiFetch2 extends Component{
  constructor(){
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: '',
    };
  }


  fetchItem(event){
    event.preventDefault();
    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);
    const search = props.location.search; // /search?q=
    const params = new URLSearchParams (search);
    const qs = params.get('qs');
    //const field = '{this.state.items}'; MAL
    const requestUrl = 'https://api.mercadolibre.com/sites/MLA/search?q='{qs};


    const item = fetch(requestUrl)
      .then((res) => res.json())
      .then(
        (result) => {
      this.setState({
          isLoaded: true,
          items: result.results
        });
      },
      (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    setItem(event) {
      event.preventDefault();
      this.setState({
      items: event.target.value
    });
  }



    render(){
      return(
          <form action='index.html' method='GET' id='busqueda'>
            <input type='text' onChange={this.setItem.bind(this)}/>
            <button onClick={this.fetchItem.bind(this)} type='submit'>Enviar</button>
          </form>
        )
        const { error, isLoaded, items } = this.state;
        if (error){
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded){
          return <div>Cargando...</div>;
        }else{
          return <div><p>Item: {this.state.items}</p></div>
        }
    }
}
