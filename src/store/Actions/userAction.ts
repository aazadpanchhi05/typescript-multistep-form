import { Dispatch } from 'react';
import { ADD_USER, REMOVE_USER, UserDispatchType } from './ActionTypes';

export const addUser = (user: {name: string; email: string; phoneNo: number; address: string;}) => (dispatch: Dispatch<UserDispatchType>) => {
    dispatch({ type:ADD_USER, payload:user })
}

export const removeUser = (user: {name: string; email: string; phoneNo: number; address: string;}) => (dispatch: Dispatch<UserDispatchType>) => {
    dispatch({ type: REMOVE_USER, payload:user })
}