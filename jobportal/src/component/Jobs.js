import {Card } from "react-bootstrap";
import   {useEffect}  from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/jobSlice';
import { useNavigate } from "react-router-dom";


function Jobs(){
  const Navigate=useNavigate();
  const dispatch = useDispatch(); 
  const jobs = useSelector(state => state?.job?.jobs);            
   

  useEffect(()=> {               
    dispatch(getAllJobs());
  },[])
  
  useEffect(()=> {
    return ()=> {
      dispatch(reset())
    }
  },[])


   const renderJobs = () => {
    return jobs.map(job => {
      const {JobTitle, maxSalary, description} = job;
      return (
        <div className="d-flex justify-content-center m-4">
        <Card  className="jobcard">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <span>{JobTitle}</span>
            <span>MAX Salary {maxSalary}</span>
          </Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>
            {description}
      
            </Card.Text>
            <Button variant="primary">Apply</Button>
          </Card.Body>
        </Card>
      </div>
      )
    })
  }
  return (
    <div className="wrapper ">
      <Container className>
        <h2 className="text-left mt-3 mb-4">Jobs</h2>
        <Form inline className="justify-content-center mb-3">
          <FormControl type="search" placeholder="Search" />
        </Form>
        {renderJobs()}        
      </Container>
    
    </div>
  );
  }
  
  export default Jobs;
  
  
  