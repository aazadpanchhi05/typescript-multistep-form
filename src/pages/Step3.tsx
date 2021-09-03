import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import FormContainer from '../components/FormContainer'
import { addUser } from '../store/Actions/userAction'
import { RootStore } from '../store/store'

export const Step3 = () => {

    const user = useSelector((state: RootStore) => state.user);

    const history = useHistory();
    const dispatch = useDispatch();

    const [address, setAddress] = useState(user.address);
    const [error, setError] = useState('');

    const submitHandler = () => {

        if (address === '') {
            setError('Address is required !');
        }
        else {
            const userTemp = {
                name: user.name,
                email: user.email,
                phoneNo: user.phoneNo,
                address: address
            }
            dispatch(addUser(userTemp));
            history.push('/success');
        }
    }

    return (
        <FormContainer>
            <h2> Signup Step 3 </h2>
            {error && <Alert variant='danger' >{error}</Alert>}
            <Form>
                <Form.Group>
                    <Form.Label>Enter Address</Form.Label>
                    <Form.Control
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button variant='primary' onClick={submitHandler} className='m-3 mx-0'>
                    Next
                </Button>

                <Button variant='danger' onClick={() => history.push('/step2')} className='m-3'>
                    Back
                </Button>
            </Form>
        </FormContainer>
    )
}
