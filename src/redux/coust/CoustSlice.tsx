import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coust } from '../../interface/coust_interface/CoustInterface';
const initialState: Coust[] = []

export const CoustSlice = createSlice({
    name: 'Coust',
    initialState,
    reducers: {
        setCoustSignIn: (state, action: PayloadAction) => {
            return action.payload
        },
        deleteCoust: (state, action) => {
            const index = state.findIndex(coust => coust.id === action.payload)
            state = [...state.splice(index, 1)]
        },
        addCoust: (state, action) => {
            return [...state, action.payload]
        },
        updateCoust: (state, action) => {
            const index = state.findIndex(coust => coust.id === action.payload.id)
            state[index].name = action.payload.data.name;
            state[index].imgsrc = action.payload.data.imgsrc;
            state[index].timelearn = action.payload.data.timelearn;
            return state
        }
    },
})
export const { setCoustSignIn, deleteCoust, addCoust, updateCoust } = CoustSlice.actions

export default CoustSlice.reducer
