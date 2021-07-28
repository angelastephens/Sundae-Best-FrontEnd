import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCounter() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <button className='add' onClick={(e) => this.increment(e)}>
          Increment!
        </button>

        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}


export default Counter 
  
