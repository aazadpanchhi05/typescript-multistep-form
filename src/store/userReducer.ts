import { UserDispatchType } from './Actions/ActionTypes';

export interface UserState {
    user: {
        name: string,
        email: string,
        phoneNo: number,
        address: string
    }
}

const init = {
    user: {
        name: '',
        email: '',
        phoneNo: 0,
        address: ''
    }
}

export const userReducer = (state: UserState = init, action: UserDispatchType): UserState => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'REMOVE_USER':
            return {
                user: action.payload
            }
        default:
            return state;
    }
}