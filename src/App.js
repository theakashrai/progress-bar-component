/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

function App() {

  let progress = 33;
  let maxProgress = 100;
  return (
    
      <ProgressBar progress = {progress} max= {maxProgress}/>
    
  );
}

export default App;
