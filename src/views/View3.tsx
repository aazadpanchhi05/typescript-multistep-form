import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/Actions/userAction'
import { RootStore } from '../store/store'

interface Props {
    nextPage: () => void,
    prevPage: () => void
}

export const View3 = (prop: Props) => {

    const user = useSelector((state: RootStore) => state.user);

    const [address, setAddress] = useState(user.address);
    const [error, setError] = useState('');

    const dispatch = useDispatch();

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
            prop.nextPage();
        }
    }

    return (
        <>
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

                <Button variant='danger' className='m-3 mx-0' onClick={() => prop.prevPage()}>
                    Back
                </Button>

                <Button variant='primary' className='m-3' onClick={submitHandler}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
