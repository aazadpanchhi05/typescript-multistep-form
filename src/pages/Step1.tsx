import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FormContainer from '../components/FormContainer';
import { addUser } from '../store/Actions/userAction';
import { RootStore } from '../store/store';

export const Step1 = () => {

    const user = useSelector((state: RootStore) => state.user);

    const [name, setName] = useState(user.name);
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = () => {

        if (name === '') {
            setError('Name is required!')
        }
        else {
            const user = {
                name: name,
                email: '',
                phoneNo: 0,
                address: ''
            }
            dispatch(addUser(user));
            history.push('/step2');
        }
    }

    return (
        <FormContainer>
            <h2> Signup Step 1 </h2>
            {error && <Alert variant='danger'>{error}</Alert> }
            <Form>
                <Form.Group>
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button variant='primary' onClick={submitHandler} className='mt-3'>
                    Next
                </Button>
            </Form>
        </FormContainer>
    )
}
