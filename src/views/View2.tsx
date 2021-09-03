import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/Actions/userAction';
import { RootStore } from '../store/store';

interface Props {
    nextPage: () => void,
    prevPage: () => void
}

export const View2 = (prop: Props) => {

    const user = useSelector((state: RootStore) => state.user);

    const [email, setEmail] = useState(user.email);
    const [phoneNo, setPhoneNo] = useState(user.phoneNo);
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const submitHandler = () => {
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email === '' || phoneNo === 0) {
            setError('All field required !')
        } else if (phoneNo < 0) {
            setError('Enter valid phone number');
        } else {
            if (email.match(emailRegex)) {
                if (phoneNo.toString().match(phoneRegex)) {
                    const userTemp = {
                        name: user.name,
                        email: email,
                        phoneNo: phoneNo,
                        address: ''
                    }
                    dispatch(addUser(userTemp));
                    prop.nextPage();
                } else {
                    setError('Enter valid phone number');
                }
            }
            else {
                setError('Enter valid email');
            }
        }
    }


    return (
        <>
            <h2> Signup Step 2 </h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form>
                <Form.Group>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Enter Phone Number</Form.Label>
                    <Form.Control
                        type='number'
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(Number(e.target.value))}
                    ></Form.Control>
                </Form.Group>

                <Button variant='danger' className='m-3 mx-0' onClick={() => prop.prevPage()}>
                    Back
                </Button>

                <Button variant='primary' className='m-3' onClick={submitHandler}>
                    Next
                </Button>
            </Form>
        </>
    )
}
