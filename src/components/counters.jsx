import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
