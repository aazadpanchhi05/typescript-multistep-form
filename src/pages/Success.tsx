import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import FormContainer from '../components/FormContainer'
import { removeUser } from '../store/Actions/userAction'
import { RootStore } from '../store/store'

export const Success = () => {

    const user = useSelector((state: RootStore) => state.user);
    const dispacth = useDispatch();
    const history = useHistory();

    const resetUser = () => {
        const userTemp = {
            name: '',
            email: '',
            phoneNo: 0,
            address: ''
        }
        dispacth(removeUser(userTemp));
        history.push('/');
    }

    return (
        <FormContainer>
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
        </FormContainer>
    )
}
