import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/Actions/userAction';
import { RootStore } from '../store/store';

interface Props {
    count: number,
    nextPage: () => void,
    prevPage: () => void
}

export const View1 = (prop: Props) => {

    const user = useSelector((state: RootStore) => state.user);

    const [name, setName] = useState(user.name);

    const dispatch = useDispatch();

    const submitHandler = () => {
        const userTemp = {
            name: name,
            email: '',
            phoneNo: 0,
            address: ''
        }
        dispatch(addUser(userTemp));
        prop.nextPage();
    }

    return (
        <>
            <h2> Signup Step 1 </h2>
            {/* {error && <Alert variant='danger'>{error}</Alert> } */}
            <Form>
                <Form.Group>
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button disabled={prop.count === 1} variant='danger' className='m-3 mx-0'>Back</Button>
                <Button disabled={prop.count === 4} className='m-3' onClick={submitHandler}>Next</Button>
            </Form>
        </>
    )
}
