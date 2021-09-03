export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export interface AddUser {
    type: typeof ADD_USER,
    payload: {
        name: string,
        email: string,
        phoneNo: number,
        address: string
    }
}

export interface RemoveUser {
    type: typeof REMOVE_USER,
    payload: {
        name: string,
        email: string,
        phoneNo: number,
        address: string
    }
}

export type UserDispatchType = AddUser | RemoveUser;