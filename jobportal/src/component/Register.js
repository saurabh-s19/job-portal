import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, json } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { users } from "../store/reducers/userSlice"
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';




function Register() {
  const Navigate = useNavigate();
const doneRegister=useSelector(state=>state?.user?.doneRegister);
const userExist=useSelector(state=>state?.user?.userExist);
const [isJobRecruiter, setIsJobRecruiter] = useState(false);
console.log("userExist" ,userExist);
  function changepath() {
    Navigate("/");
  }
 
  // useEffect(()=>{
  //   if(doneRegister && userExist===false){
  //     Navigate("/Dashboard");
  //   }

  // },[doneRegister , userExist]);
  
  useEffect(()=>{
    if( userExist===true){
  alert("already exist");
    }

  },[ userExist]);



  const { Formik } = formik;
  const dispatch = useDispatch();


  const schema = yup.object().shape({
    emailId: yup.string().required(),
    password: yup.string().required(),
    type: yup.string().required(),
  });



  function handle() {
    Navigate("Dashboard");
  }

  // function handleChange(event) {
  //   console.log("helo");
  //   const { name, value } = event.target;
  //   if (name === "type" && value === "job recruiter") {
  //     setIsJobRecruiter(true);
  //     console.log("job recruiter");
  //   } else {
  //     setIsJobRecruiter(false);
  //   }
  //   // Handle other form field changes
  //   // ...
  // }
 

  return (
    <Formik
      validationSchema={schema}
      onSubmit={
        (values, { setSubmitting }) => {
          console.log(values);
          localStorage.setItem('mydata', JSON.stringify(values) );
          dispatch(users(values));
          Navigate("/Dashboard");
        }}

        handleChange={
          (e,{fun})=>{
            console.log(e);
            const { name, value } = e.target;
    if (name === "type" && value === "job recruiter") {
      setIsJobRecruiter(true);
      console.log("job recruiter");
    } else {
      setIsJobRecruiter(false);
    }
          }
        }


      initialValues={{
        emailId: '',
        password: '',
        type: ''


      }}
   
    >
  
      {({ handleSubmit, handleChange, values, touched, errors }) => (

        <Container className="login_page">
          <Row className="justify-content-center">
            <Col xs={12} md={5}>
              <Card>
                <Card.Body>
                  <Card.Title>Register</Card.Title>
                  <Form noValidate onSubmit={handleSubmit}  >
                    <Form.Group className="mb-3" controlId="validationFormik01">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="emailId" value={values.emailId}
                        onChange={handleChange} />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationFormik02">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" value={values.password}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Check
                      inline
                      label="Job seeker"
                      type="radio"
                      name="type"
                      value="job seeker"
                      onChange={handleChange}

                    />
                    <Form.Check
                      inline
                      label="Job Recruiter"
                      type="radio"
                      name="type"
                      value="job recruiter"
                      onChange={handleChange}
                      
                        

                    />
                    {isJobRecruiter && (
                      <Form.Group controlId="additionalInput">
                        <Form.Label>Additional Input</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter additional information"
                          name="additionalInfo"
                          value={values.additionalInfo}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    )}
                    <br /> <br />  <Link onClick={changepath} >Have not log-in? Log-in now</Link> <br />  <br />




                    <Button type="submit" variant="primary">Register</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )
      }
    </Formik>
  )
}

export default Register;

