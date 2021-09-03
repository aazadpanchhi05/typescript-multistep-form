import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/Actions/userAction'
import { RootStore } from '../store/store'

interface Props {
    reset: () => void
}

export const SuccessView = (prop: Props) => {

    const user = useSelector((state: RootStore) => state.user);

    const dispatch = useDispatch();

    const resetUser = () => {
        const userTemp = {
            name: '',
            email: '',
            phoneNo: 0,
            address: ''
        }
        dispatch(removeUser(userTemp));
        prop.reset();
    }

    return (
        <>
            <h2> Your Details </h2>
            <ListGroup variant='flush' className='bg-transparent'>
                <ListGroup.Item>
                    <strong>Full Name: </strong>{user.name}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Email: </strong>{user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Phone Number: </strong>{user.phoneNo}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Address: </strong>{user.address}
                </ListGroup.Item>
            </ListGroup>

            <Button variant='danger' onClick={resetUser} className='m-3'>
                Reset
            </Button>
        </>
    )
}
