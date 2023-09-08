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
    </WrapApp>
  )
}

export default App
