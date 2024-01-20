import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import {  useState } from "react";
import { useDispatch} from 'react-redux';
import { profile } from '../store/reducers/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile(){
  const emailId=useSelector(state=>state?.user?.emailId);
 
 const dispatch=useDispatch();


  
 


  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  function handleSubmit(e){
    e.preventDefault();
    
 const formData=new FormData();

 if (file) {
  formData.append('file', file);
}

formData.append('firstName', firstName);
formData.append('lastName', lastName);
formData.append('emailId', emailId);


 dispatch(profile(formData));
   toast.success("Updated Successfully");
  }

  

  
    return ( <Container className='postdiv'>     
       <h1>Profile</h1>
    <Form  onSubmit={handleSubmit} encType='multipart/form-data'   >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName"onChange={(e) => setFirstName(e.target.value)}  />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  name="lastName"onChange={(e) => setLastName(e.target.value)} />
        <Form.Label>Email id</Form.Label>
        <Form.Control type="email" name='emailId' value={emailId}  />
        <Form.Label>Resume(CV)</Form.Label>
        <Form.Control type="file" name='file' onChange={handleFileChange}  />
        
        
      </Form.Group>
      <Button  variant="dark" type="submit" >
        Submit
      </Button>
    </Form>
    <ToastContainer />
    </Container>

  );
}



export default Profile;