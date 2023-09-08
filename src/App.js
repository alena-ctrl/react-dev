import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Counter>
          {({ count, increment, decrement }) => (
            <>
              <h1>Counter: {count}</h1>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
            </>
          )}
        </Counter>
      </div>
      <div className="row">
        <Form />
      </div>
    </div>
  );
}

export default App;
