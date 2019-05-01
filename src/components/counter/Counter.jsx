import React, { Component } from 'react';
import './styles.css';


class Counter extends Component {

  state = {
    count: 0,
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrease}>-</button>
        {this.state.count}
        <button onClick={this.increase}>+</button>
      </div>
    );
  }

}

export default Counter;