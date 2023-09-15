import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { postJob } from '../store/reducers/jobSlice';

function Postajob(){

  // const delay=15000;
  // useEffect(()=>{

  // },delay)

  useEffect(() => {
    // This code will run after the component has mounted
    // We will set up a setTimeout here to perform an action after a delay

    const delay = 5000; // 3 seconds (in milliseconds)

    // Set up the setTimeout
    const timeoutId = setTimeout(() => {
      // This code will run after the specified delay
      document.getElementById("msg").innerHTML="";
      
      // You can perform any other actions here
    }, delay);

    // Clean up the setTimeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  },); // The empty dependency array ensures this effect runs only once after the initial render
    const [data , setdata]=useState();
    const dispatch=useDispatch();
  function handlechange(e){
          setdata({...data ,[e.target.name]:e.target.value});
  }
console.log(data);
  
function handleSubmit(event){
  event.preventDefault()
  dispatch(postJob(data));
  document.getElementById('msg').innerHTML="successfully created job ";
}
    return ( <Container className='postdiv'> 
    <span id='msg' ></span>    
       <h1>Post a job</h1>
    <Form className='my-3 ' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="text" name="JobTitle" onChange={handlechange} />
        <Form.Label>Job description</Form.Label>
        <Form.Control type="text" name="description" onChange={handlechange} />
        <Form.Label>Max salary</Form.Label>
        <Form.Control type="text" name="maxSalary" onChange={handlechange} />
        
        
      </Form.Group>
      <Button  variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

  );
}



export default Postajob;