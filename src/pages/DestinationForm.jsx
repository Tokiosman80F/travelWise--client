import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'

const DestinationForm = () => {
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
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Select onChange={handleListChange} value={formListValue}>
                <option name='Chittagong'>Chittagong</option>
                <option name='syhlet'>Syhlet</option>
                <option name='khulna'>Khulna</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='d-flex gap-5'>
              <ReactDatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='start date'
              />
              <ReactDatePicker
                showIcon
                selected={endDate}
                onChange={(date) => setEndtDate(date)}
                placeholderText='pickup date'
              />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Check type='checkbox' label="Can't check this" />
            </Form.Group>
            <Button variant='warning' type='submit'>
              Book
            </Button>
            </Form>
    )
}

export default DestinationForm