import React, { useState } from 'react';
import './App.css';
import jokes from './Jokes'; 

function App() {
  const [jokesOrder, setJokesOrder] = useState([...Array(jokes.length).keys()]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);


  const togglePunchline = () => {
    setShowPunchline(!showPunchline);
    if (showPunchline) {
      showNextJoke();
    }
  };

  const showNextJoke = () => {
    const remainingJokes = jokesOrder.filter(index => index !== currentIndex);
    if (remainingJokes.length === 0) {
      setJokesOrder([...Array(jokes.length).keys()]);
    }
    const randomIndex = remainingJokes[Math.floor(Math.random() * remainingJokes.length)];
    setCurrentIndex(randomIndex);
    setShowPunchline(false);
  };

  return (
    <div className="App" onClick={togglePunchline}>
      <header className="App-header">
        <h1 className="heading">Joke App</h1>
        <div className="joke-container">
          <div className="joke">
            <p>{jokes[jokesOrder[currentIndex]].joke}</p>
          </div>
        </div>
        <div className="joke-container">
          <div className={`punchline ${showPunchline ? 'visible' : ''}`}>
            <p>{jokes[jokesOrder[currentIndex]].punchline}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
