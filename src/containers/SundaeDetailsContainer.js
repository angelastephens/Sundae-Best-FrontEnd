import React from 'react';
import { connect } from "react-redux";
import { fetchSundae } from "../actions/sundaes";
import SundaeDetailswithBorder from '../components/SundaeDetailswithBorder';


class SundaeDetailsContainer extends React.Component {
  // state = {
  //   sundae: {},
  //   loading: false
  // };
  componentDidMount() {
     const sundaeId = this.props.match.params.id;
    this.props.dispatchFetchSundae(sundaeId);
  }
  //   const sundaeId = this.props.match.params.sundaeId;
  //   fetch(`http://localhost:3001/sundaes/${sundaeId}`)
  //     .then((res) => res.json())
  //     .then(({ sundae }) => {
  //       this.setState({
  //         sundae: sundae,
  //         loading: false
  //       });
  //     });
  // }
  // componentDidMount() {
  //   if(this.props.loadingState === "notStarted") {
  //     this.props.dispatchFetchSundaes()
  //   }
  // }
  //     const id = this.props.match.params.id

  //     fetch(`http://localhost:3001/sundaes/${id}`, {
  //       method: 'get',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(sundaeJson => {
  //       console.log('sundaes', sundaeJson)
  //       this.setState({
  //         sundae: sundaeJson,
  //         loading: false
  //       })
  //     })
  // }

  render() {
    if (this.props.loading) {
      return <div> Loading Sundae</div>
   
    }
    return (
      <div>
        <SundaeDetailswithBorder sundae={this.props.sundae} />
      </div>

      // <div className='max-w-6xl w-3/4 mx-auto '>
      //   <h1 className='text-3xl'> Sundae Ingredients</h1>
      //   <ul className=' border-dotted border-4 border-light-blue-500 mt-4 shadow-lg px-4 py-6 mb-4 w-1/2'>
      //     {this.props.sundae.name} <br />
      //     Number of Scoops: {this.props.sundae.scoops} <br />
      //     Ice Cream Flavors: {this.props.sundae.ice_cream_flavors} <br />
      //     Toppings: {this.props.sundae.toppings}
      //   </ul>
      // </div>
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

  //   loadingState
  // };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchSundae: (sundaeId) => dispatch(fetchSundae(sundaeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SundaeDetailsContainer);
