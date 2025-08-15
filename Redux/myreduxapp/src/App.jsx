import { useState } from 'react';

import './App.css';


import store from './redux/store';

import Datafetcher from './Component/Datafetch'

function App() {

  return (
    <>
   <Datafetcher/>
    </>
  )
}

export default App
