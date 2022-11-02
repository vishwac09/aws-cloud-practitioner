import * as React from 'react'
import { Provider } from 'react-redux'

import {TwoColumn} from './layout'
import store from './store/Store'
/** Import the theme */
import './theme/import.scss'

export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <TwoColumn />
      </React.Fragment>
    </Provider>
  );
}
