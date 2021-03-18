import React, { Component } from 'react'
import SundaeList from '../components/SundaeList'

export default class SundaeIndexContainer extends Component {
  state = {
    sundaes: [],
    loading: true,
  }
  componentDidMount() {
    fetch('http://localhost:3001/sundaes', {
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
          sundaes: sundaesJson,
          loading: false
        })
      })
  }
  

  render() {
    return (
      <section className="max-w-6xl mx-auto mt-16">
        {this.state.loading ? (
          'loading sundaes'
        ) : (
          <SundaeList sundaes={this.state.sundaes} />
        )}
      </section>
    )
  }
}