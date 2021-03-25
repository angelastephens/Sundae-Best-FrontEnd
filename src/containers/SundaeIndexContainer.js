// import React, { Component } from 'react'
// import SundaeList from '../components/SundaeList'
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSundaes } from "../actions/sundaes";
import SundaeList from "../components/SundaeList";
class SundaeIndexContainer extends Component {
  
  componentDidMount() {
     this.props.dispatchFetchSundaes()
  }
  //   fetch('http://localhost:3001/sundaes', {
  //     method: 'get',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(sundaesJson => {
  //       console.log('sundaes', sundaesJson)
  //       this.setState({
  //         sundaes: sundaesJson,
  //         loading: false
  //       })
  //     })
  // }
  

  render() {
    return (
      <section className="max-w-6xl mx-auto mt-16">
        {this.props.loadingState === 'inProgress' ? (
          'loading sundaes'
        ) : (
          <SundaeList sundaes={this.props.sundaes} />
        )}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sundaes: state.sundaes.list,
    loadingState: state.sundaes.loadingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchSundaes: () => dispatch(fetchSundaes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SundaeIndexContainer);