import { createSlice } from '@reduxjs/toolkit'

const pointSlice = createSlice({
    name: "point",
    initialState: {
        point: 0
    },
    reducers: {
        add: (state, action) => {
            state.point += action.payload.point
        },
        reset: (state, action) => {
            state.point = 0
        }
    }
})

export const { add, reset } = pointSlice.actions
export default pointSlice.reducer