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
    }
})

export const { point } = pointSlice.actions
export default pointSlice.reducer