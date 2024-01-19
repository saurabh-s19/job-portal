import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import {reset,resetisvalid, validateUser} from "../store/reducers/userSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect  } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  
  const Navigate=useNavigate();
  const isvalidUser = useSelector(state => state?.user?.isvalidUser);
  
  useEffect(()=> {
    if(isvalidUser){
      Navigate("/Dashboard")
    }
    else if(isvalidUser===false){
          toast.error("Email id and Password is not matched");
    }
    
  },[isvalidUser])
   


 

  

const { Formik } = formik;
const dispatch = useDispatch();


const schema = yup.object().shape({
  email: yup.string().required(),
  pwd: yup.string().required(),
});
  return (  
     <Formik
    validationSchema={schema}
    onSubmit={
      (values, { setSubmitting }) => {
    dispatch(validateUser({email:values.email,pwd:values.pwd})); 
      
      }
      }
   

    initialValues={{
      email: '',
      pwd: ''
    }}
  >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
    
    <Container className="login_page">
   
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
    <span id="log-in-msg-wrg-id-pass" className=" d-flex justify-content-center mb-2"></span>

          <Card>

            <Card.Body>

              <Card.Title>Login</Card.Title>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email"  value={values.email} onChange={handleChange}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="pwd"  value={values.pwd} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                  <Form.Check type="checkbox" label="Check me out"  required/>
                </Form.Group>
             <Link  onClick={()=>Navigate("/register")}>Don't have a account? register now</Link>  <br/><br/>

                <Button variant="primary" type="submit" >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
      )
      }
  </Formik>
  );
}

export default Login;