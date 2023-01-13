import { configureStore } from '@reduxjs/toolkit'
import CoustReducer from './coust/CoustSlice'
import userReducer from './user/UserSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        coust: CoustReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
