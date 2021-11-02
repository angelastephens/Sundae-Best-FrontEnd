import React, { Component } from "react";
import { connect } from "react-redux";
import { createSundae } from "../actions/sundaes";

class SundaeFormContainer extends Component {
  state = {
    name: "",
    scoops: "",
    ice_cream_flavors: "",
    toppings: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatchCreateSundae(this.state).then((sundaeJson) => {
      this.props.history.push("/");
    });
  };

  

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='max-w-6xl w-2/4 mx-auto mt-16 shadow-lg px-4 py-6 mb-4'
      >
        <h1 className='text-center text-3xl font-semibold mb-2'>
          Create Your Favorite Sundae
        </h1>
        <fieldset>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            placeholder='Give your Sundae a name'
            className='w-full border p-4 my-4'
          />
        </fieldset>
        <fieldset>
          <input
            type='text'
            name='scoops'
            onChange={this.handleChange}
            value={this.state.scoops}
            placeholder='Type the number of scoops'
            className='w-full border p-4 my-4'
          />
        </fieldset>

        <fieldset>
          <input
            type='text'
            name='ice_cream_flavors'
            onChange={this.handleChange}
            value={this.state.ice_cream_flavors}
            placeholder='Pick your ice cream flavors'
            className='w-full border p-4 my-4'
          />
        </fieldset>

        <fieldset>
          <input
            type='text'
            name='toppings'
            onChange={this.handleChange}
            value={this.state.toppings}
            placeholder='Enter your toppings'
            className='w-full border p-4 my-4'
          />
        </fieldset>
        <button
          className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'
          type='submit'
        >
          Add Your Award Winning Sundae
        </button>
        <li className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'>
          <strong>Most Used Toppings:{this.state.ice_cream_flavors} </strong>
        </li>
      </form>
    );
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateSundae: (formData) => dispatch(createSundae(formData))
  };
};

export default connect(null, mapDispatchToProps)(SundaeFormContainer);
