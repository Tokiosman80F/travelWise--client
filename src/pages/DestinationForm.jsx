import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import { Link, useLoaderData } from 'react-router-dom'

const DestinationForm = () => {
      // const data=useLoaderData();
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndtDate] = useState();
      const [formListValue,setFormListValue]=useState('Chittagong')
      const handleForm=(event)=>{
        event.preventDefault()
        const form=event.target;
        const destination=form.destination.value;
        console.log(destination);
        console.log("form List=>",formListValue);
      }
      const handleListChange=(event)=>{
        setFormListValue(event.target.value)
      }
    return (
         <Form variant="dark" onSubmit={handleForm}>
            <Form.Group className='mb-3'>
              <Form.Control
                placeholder='Start your Journey From'
                name='destination'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Select onChange={handleListChange} value={formListValue} required>
                <option value=''>Select Destination</option>
                <option value='1'>Khulna</option>
                <option value='2'>Chittagong</option>
                <option value='23'>Syhlet</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='d-flex gap-5'>
              <ReactDatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='start date'
                required
              />
              <ReactDatePicker
                showIcon
                selected={endDate}
                onChange={(date) => setEndtDate(date)}
                placeholderText='pickup date'
                required
              />
            </Form.Group>
          
            <Button variant='warning' type='submit' className='mt-2'>
             <Link to="/hotel">Lets Book</Link>
            </Button>
            </Form>
    )
}

export default DestinationForm