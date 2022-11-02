import { createSlice } from '@reduxjs/toolkit'

export const exam = createSlice({
  name: 'exam',
  initialState: {
    attempted: 0,
    start: false,
  },
  reducers: {
    markQuestions: (state, action) => {
      state.value +=  1
    },
    startExam: (state, action) => {
      state.start = action.payload;
    },
  }
});

/** Action creators are generated for each case reducer function  */
export const { 
  markQuestions,
  startExam
} = exam.actions

export default exam.reducer
