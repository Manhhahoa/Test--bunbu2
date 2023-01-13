import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type User = {
    id: string;
    avatar: string;
    name: string,
    mail: string,
}
const initialState: User = {
    id: '',
    avatar: '',
    name: '',
    mail: '',
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUserSignIn: (state, action: PayloadAction<User>) => {
            return action.payload
        }
    },
})
export const { setUserSignIn } = UserSlice.actions

export default UserSlice.reducer
