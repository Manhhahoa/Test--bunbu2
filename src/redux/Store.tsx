import { configureStore } from '@reduxjs/toolkit'
import coustReducer from '../redux/coust/CoustSlice'

export const store = configureStore({
    reducer: {
        coust: coustReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
