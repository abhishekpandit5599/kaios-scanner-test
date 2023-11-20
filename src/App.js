import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import tonMnemonic from "tonweb-mnemonic";

function App() {

  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Hello, World!";
        // If the operation is successful, resolve with the data
        resolve(data);
        // If there's an error, reject with an error message
        // reject("Error fetching data");
      }, 2000); // Simulating a delay of 2 seconds
      
    });
  }

  useEffect(()=>{
    fetchData()
  .then((data) => {
    alert(data);
  })
  .catch((error) => {
    alert("Error:", error);
  });
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
