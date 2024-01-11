import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header";


export default function App() {

  const [globals, setGlobals] = useState({})
  const [agent, setAgent] = useState({})

  const bearer = process.env.REACT_APP_TOKEN;

  const url = 'https://api.spacetraders.io/v2';
  const registerUrl = 'https://api.spacetraders.io/v2/register';
  const agentUrl = 'https://api.spacetraders.io/v2/my/agent';
  const contractsUrl = 'https://api.spacetraders.io/v2/my/contracts';
  const shipsUrl = 'https://api.spacetraders.io/v2/my/ships';
  const loansUrl = 'https://api.spacetraders.io/v2/my/loans';


  console.log('agent data', agent)

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: bearer,
    }
  };

  const registerOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      symbol: 'SqueakyPickles',
      faction: "COSMIC",
    }),
  }

  const agentOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearer}`,
    },
  };

  const handleRegister = (input) => {
    fetch(registerUrl, registerOptions)
    .then(response => response.json())
    .then(globals => setAgent(globals))
    .catch(err => console.error(err))
  }


  useEffect(() => {
    fetch(url, options)
    .then(response => response.json())
    .then(response => setGlobals(response))
    .catch(err => console.error(err));
    fetch(agentUrl, agentOptions)
    .then(response => response.json())
    .then(({data}) => setAgent(data))
    .catch(err => console.error(err));
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(url, options)
      .then(response => response.json())
      .then(response => setGlobals(response))
      .catch(err => console.error(err));
      fetch(agentUrl, agentOptions)
      .then(response => response.json())
      .then(({data}) => setAgent(data))
      .catch(err => console.error(err));
    }, 30000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Header status={globals?.status} reset={globals?.serverResets?.next}/>
      </header>
      <div className="App-body">
        <div>What is Space Traders?</div>
        <div>{globals?.description}</div>
        {!agent ? (
          <div style={{margin: "2rem"}}>Register to play!
            <button style={{margin: "2rem"}} onClick={handleRegister}>Register</button>
          </div>
        ) : (
          <div>Let's play {agent?.symbol}!</div>
        )}
      </div>
    </div>
  );
}