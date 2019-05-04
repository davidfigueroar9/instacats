import React, { Component } from 'react';
import './styles.css';

class Counter extends Component {
  state = {
    count: 0,
  }

  increase = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decrease = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <button type="button" onClick={this.decrease}>-</button>
        { count }
        <button type="button" onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default Counter;
