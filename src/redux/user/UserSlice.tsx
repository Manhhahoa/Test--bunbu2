import { createSlice } from '@reduxjs/toolkit'
export type User = {
    id: string;
    avatar: string;
    name: string,
    mail: string,
}
const initialState: User[] = []
export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        getUser: (state, action) => {
            return action.payload
        }
    },
})
export const { getUser } = UserSlice.actions

export default UserSlice.reducer
