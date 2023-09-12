import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";


const RegisterPage = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const confirm=form.confirm.value
        console.log(email,password,confirm);

         createUser(email, password)
           .then((userCredential) => {
             const user = userCredential.user;
             console.log(user);
           })
           .catch((error) => console.log(error.message));
    }
    return (
        <Form onSubmit={handleRegister}
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
            <Form.Check type='checkbox' label={<>Accept {<Link to="/terms">Term & Condition</Link>}</>} />
          </Form.Group>
          <p>
            Already Register? then <Link to='/login'>Login Here</Link>
          </p>
          <Button variant='warning' type='submit'>
            Register
          </Button>
        </Form>
      
    );
}

export default RegisterPage