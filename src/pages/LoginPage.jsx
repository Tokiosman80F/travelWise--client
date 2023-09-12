import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (
    
      <Form style={{ width: "25rem" }} className='border border-2 p-4 mx-auto'>
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
