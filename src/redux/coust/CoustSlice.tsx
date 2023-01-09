import { createSlice } from '@reduxjs/toolkit'
export type Coust = {
    name: string,
    imgsrc: string,
    timelearn: number,
}
const initialState: Coust[] = []
export const CoustSlice = createSlice({
    name: 'Coust',
    initialState,
    reducers: {
        getCoust: (state, action) => {
            return action.payload
        }
    },
})
export const { getCoust } = CoustSlice.actions

export default CoustSlice.reducer