import React from 'react';
import { connect } from "react-redux";
import { fetchSundae } from "../actions/sundaes";
import SundaeDetailswithBorder from '../components/SundaeDetailswithBorder';


class SundaeDetailsContainer extends React.Component {
  
  componentDidMount() {
     const sundaeId = this.props.match.params.id;
    this.props.dispatchFetchSundae(sundaeId);
  }
 

  render() {
    if (this.props.loading) {
      return <div> Scoopingfor Sundaes</div>
   
    }
    return (
      <div>
        <SundaeDetailswithBorder sundae={this.props.sundae} />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const sundaeId = match.params.id;
  let loadingState = state.sundaes.loadingState
   let sundae= state.sundaes.sundae
  return {
    sundae,
    loadingState
  }

};
const mapDispatchToProps = (dispatch) => {  
  return {
    dispatchFetchSundae: (sundaeId) => dispatch(fetchSundae(sundaeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SundaeDetailsContainer);
