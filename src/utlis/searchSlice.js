import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{},
    reducers:{
        cachecacheResults: (state, action) => {
            //state = {...state,...action.payload}
            state = Object.assign(state,action.payload);
        },
    },
});

export const {cachecacheResults} = searchSlice.actions;

export default searchSlice.reducer;

