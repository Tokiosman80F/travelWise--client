import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const RegisterPage = () => {
    return (
      <Container>
        <Form
          style={{ width: "25rem" }}
          className='border border-2 p-4 mx-auto'>
          <h2 className='text-center py-2'>Register Here </h2>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='text'
              placeholder='Enter Your Name'
              name='name'
              required
            />
          </Form.Group>

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
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              name='confirm'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label={<>Accept {<Link>Term & Condition</Link>}</>} />
          </Form.Group>
          <p>
            Already Register? then <Link to='/login'>Login Here</Link>
          </p>
          <Button variant='warning' type='submit'>
            Register
          </Button>
        </Form>
      </Container>
    );
}

export default RegisterPage