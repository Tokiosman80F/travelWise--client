import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const LoginPage = () => {
  const {loginUser}=useContext(AuthContext)
  let navigate=useNavigate();
  let location=useLocation();
  let from = location.state?.from?.pathname || "/";

  // form
  const handleLogin=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    console.log("Email:",email);
    console.log("Password:",password);
    
    loginUser(email,password)
    .then((userCredential)=>{
      const user=userCredential.user
      console.log(user)
      toast.info("Successfully Login");
      navigate(from, { replace: true });
    })
    .catch((error)=>{
    console.log(error.message)
    toast.error("login failed");
    })
   
  }
  return (
      <Form style={{ width: "25rem" }} onSubmit={handleLogin} className='border border-2 p-4 mx-auto'>
        <h2 className='text-center py-2'>Login </h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <p>
          New Here? <Link to='/register'>Register Now</Link>
        </p>
        <Button variant='warning' type='submit'>
          Login
        </Button>
      </Form>
  
  );
};

export default LoginPage;
