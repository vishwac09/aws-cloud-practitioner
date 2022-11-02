import { configureStore } from '@reduxjs/toolkit'

import certificationReducer from '../features/certification/reducer/Reducer'
import examReducer from '../features/exam/reducer/Reducer'

export default configureStore({
  reducer: {
    certificate: certificationReducer,
    exam: examReducer
  },
})
