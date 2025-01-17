import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    changeMode:true,
};

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.changeMode=!state.changeMode;        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;