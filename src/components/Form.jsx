import {useState, useEffect, useRef} from 'react'
import {Header} from './styles/style'
import {WrapForm, FormGroup, Label, Input, ButtonGroup, Button, Spiner, FullSpinner, EmailIcons} from './styles/app'
import {sleep} from '../utils'


const initState = {email: "", password: ""}

const Form = () => {

  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }    
  }, [])

  const handleChange = ({target}) => {
    setData(x => ({...x, [target.name] : target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sleep();
    console.log(data)
    setData(initState);
    setLoading(false);
  }
  
  
  return (
    <WrapForm onSubmit={handleSubmit}>
      <Header color="green">Form</Header>
      {loading && <FullSpinner />}
      
      <FormGroup>
        <Label htmlFor="email" style={{display:"flex", alignItems:"center", gap:"0.5rem"}}> <EmailIcons /> Email</Label>
        <Input ref = {ref} name="email" value={data.email} onChange={handleChange}  />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" value={data.password} onChange={handleChange} />
      </FormGroup>
      <ButtonGroup>
        <Button type="submit" mr="0.5rem">
        Login {loading && <Spiner />}
        </Button>
        <Button type="reset">Reset</Button>
      </ButtonGroup>
    </WrapForm>
  )
}

export default Form
