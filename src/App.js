<<<<<<< HEAD
import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
=======
import React from "react"
import Counter from "./components/Counter"
import Form from "./components/Form"
import {Header1, Button, WrapButton} from './components/styles/style'
import {WrapApp} from './components/styles/app'

function App() {
  
  return (
    <WrapApp >
      <WrapButton >
        <Counter> 
          
          {({count, increment, decrement}) => <>
        
      <Header1 color="red" >Counter: {count}</Header1>      
      <Button onClick={increment} >Increment</Button>
      <Button onClick={decrement} >Decrement</Button>      
    </>
        } 
        </Counter>
      </WrapButton>
      <div className="row">
        <Form />
      </div>
<<<<<<< HEAD
    </div>
  );
=======
    </WrapApp>
  )
>>>>>>> 4e7acbe1653b2516e96ca48e8a05fa7142a4d9a7
}

export default App;
