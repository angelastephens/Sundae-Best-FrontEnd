import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { addVote, booVote }from "../actions/sundaes";




class SundaeListItem extends React.Component {
  increment = () => {
   this.props.dispatchAddVote(this.props.sundae.id);
  }

  booCounter = () => {
    this.props.dispatchBooVote(this.props.sundae.id);

  };

  render() {
    return (
      <li
        className='border-dotted border-4 border-purple-400 max-w-6xl w-2/4 my-8 shadow-md px-4 py-6'
        key={this.props.sundae.id}
      >
        <Link to={`/sundaes/${this.props.sundae.id}`}>
          <strong> Sundae Name: </strong> {this.props.sundae.name}{" "}
        </Link>
        <button
          className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'
          onClick={this.increment}
        >
          {" "}
          <strong>Cheer for this Sundae:</strong> {this.props.sundae.like_count}{" "}
          total cheers{" "}
        </button>
        <button
          className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'
          onClick={() => this.booCounter()}
        >
          <strong>Boo for this Sundae: </strong> total boo's {this.props.sundae.boo_vote}
        </button>

        {/* <button
          className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'
          onClick={() => this.booCounter()}
        >
          <strong>: </strong> 
        </button> */}
    
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    dispatchAddVote: (sundaeId) => dispatch(addVote(sundaeId)),
    dispatchBooVote: (sundaeId) => dispatch(booVote(sundaeId))
  };
};
  
// export default SundaeListItem
export default connect(
  null,
  mapDispatchToProps
)(SundaeListItem);