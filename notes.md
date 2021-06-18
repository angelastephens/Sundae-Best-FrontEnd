class SundaeListItem extends React.Component {
  state = {
    counter: 0
  };
  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    // if the counter is greater than 1, reduce it
    if (this.state.counter >=1 ) {
      this.setState({ counter: this.state.counter - 1 });
    };
  }
    
  render() {
    return (
      <li
        className='border-dotted border-4 border-yellow-200 max-w-6xl w-2/4 my-8 shadow-md px-4 py-6'
        key={this.props.sundae.id}
      >
        <Link to={`/sundaes/${this.props.sundae.id}`}>
          <strong> Name: </strong> {this.props.sundae.name}{" "}
        </Link>
        <button
          className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'
          onClick={() => this.increaseCounter()}
        >
          {" "}
          Cheer for this Sundae:{" "}
        </button>
        <p> {this.state.counter} </p>

        <button
          className='w-full p-4 bg-pink-300 mt-4 hover:bg-purple-400 transition-all duration-200'
          onClick={() => this.decreaseCounter()}
        >
          {" "}
          Boo for this Sundae:{" "}
        </button>
      </li>
    );
  }
}
