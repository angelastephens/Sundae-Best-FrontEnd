import React from 'react'


export default class SundaeDetailsContainer extends React.Component {
  state = {
    sundaes: [],
    loading: true,
  }
  componentDidMount() {
    fetch(`http://localhost:3001/sundaes/${window.location.pathname.replace("/sundaes/","")}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(sundaesJson => {
      console.log('sundaes', sundaesJson)
      this.setState({
        sundae: sundaesJson,
        loading: false
      })
    })
}
  
  render(){
    if (this.state.loading){
      return null 
    }
    return (
      <div>
        <h1 className= "text-3xl"> Sundae Ingredients</h1>
        <ul>
        {this.state.sundae.name} 
        {this.state.sundae.scoops}
        {this.state.sundae.ice_cream_flavors}
        {this.state.sundae.toppings}
        
  
        </ul>
      </div>
    )
  }
}
