import React, { useState, useEffect } from 'react';
import './App.css';
import { noop } from './test.js'
import Header from "./Header"

export default function App() {

const url = 'https://api.spacetraders.io/v2';
const options = {
  method: 'GET',
  headers: {Accept: 'application/json', Authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiTUlHSFRZX01PVVNFIiwidmVyc2lvbiI6InYyIiwicmVzZXRfZGF0ZSI6IjIwMjMtMDktMjMiLCJpYXQiOjE2OTU5MzU0OTEsInN1YiI6ImFnZW50LXRva2VuIn0.Df-0M90pCN8tnQSfkeVIQhZdoaRN7pKjf6-sSFoABXRd9H5whl77ZLPxg2OM-R6_0JVmvmkqpUYCUAv2gdk5CqOVnbotp4G7BU1Cw2bbFYNU-V5T-0HodnsHf8YG6S-_FdBHG1PpyrAOjXyG4I2Ihhun9A8ZhBzXFVgRip5mccIH6JoE0chLP0RndKPe-OREMTX6_bgH-f1bbvBEelUrJBcO4lOKqBaph_EWU-Yh2S_-by16nQ0w1Ym7U0oovVqWOS20_vt3PDbLOvMJqmrcQ-t-4wUplpGY3Mz1iq0FNUeuobILoO3HyEV_r6REiiKRTUQQPzrzX0cutdtht7Zz7w'}
};

const [data, setData] = useState(null)


useEffect(()=>{

  fetch(url, options)
  .then(response => response.json())
  .then(response => {
    setData(response)
  })
  .catch(err => console.error(err));

}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header status={data?.status}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div></div> {data?.status}
      </header>
    </div>
  );
}

// export default App;
