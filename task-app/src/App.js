import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import {store} from "./store"
import { signupSlice } from './component/apis/signupSlice';

function App() {
  return (

    <Provider store={store}>
      <ApiProvider api={signupSlice}>
      <div className="App">
      
      </div>
      </ApiProvider>
    </Provider>
    
  );
}

export default App;
