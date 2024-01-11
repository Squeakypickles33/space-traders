import React from 'react'
import logo from './logo.svg';


export default function Header ({status, reset}){
  // reset = new Date(reset)
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Status: {status}
      </p>
      {/* <div>Next Reset: {new Date(reset).toUTCString()}</div> */}
      <div>Next Reset: {new Date(reset).toLocaleString('en-US', {
        weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
      })}</div>
    </div>
  )
}