import { createSlice } from '@reduxjs/toolkit'

export const certification = createSlice({
  name: 'certificate',
  initialState: {
    active: {
      "title": "",
      "length": 0,
      "format": 0,
      "href": "",
      "active": false,
      "description": [],
      "links": [],
      "file": ""
    }
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload
    }
  }
});

/** Action creators are generated for each case reducer function  */
export const { 
  setActive
} = certification.actions

export default certification.reducer
