
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSundaes } from "../actions/sundaes";
import SundaeList from "../components/SundaeList";
class SundaeIndexContainer extends Component {
  componentDidMount() {
    
    this.props.dispatchFetchSundaes();
    
  }

  

  render() {
    return (
      <section className='max-w-6xl mx-auto mt-16'>
        {this.props.loadingState === "inProgress" ? (
          "waiting for sundaes"
        ) : (
          <SundaeList sundaes={this.props.sundaes}  />
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    sundaes: state.sundaes.list,
    loadingState: state.sundaes.loadingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchSundaes: () => dispatch(fetchSundaes()),
    // dispatchAddVote: (sundaeId) => dispatch(addVote(sundaeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  
)(SundaeIndexContainer);