import React from 'react'
import logo from './logo.svg';

export default function Header ({status}){
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        Status: {status}
      </p>
    </div>
  )
}