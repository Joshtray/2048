import React, { useEffect, useState } from 'react';
import { Tiles } from './Tiles';
import'./App.css';

function App() {
    const [score, setScore] = useState(0);
    const [x, setX] = useState(score);
    const [reset, setReset] = useState(0);
    const fresh = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    const updateScore = () => {
        setX(x + 1) 
        console.log(x)
    }
    const updateScoreValue = () => {
        console.log(x)
        setScore(x)

    }

    useEffect(() => {
        updateScoreValue()
    }, [x])
    return (
        <div className="app">
            <div>
                <div className="app-header">
                    <div className="app-header-left">
                        <h1>2048</h1>
                        <p>Join the tiles and get to 2048!</p>
                        <h3>How to play</h3>
                    </div>

                    <div className="app-header-right">
                        <div className="app-stats">
                            <div className="app-stats-score">
                                <h2>SCORE</h2>
                                <p>{score}</p>
                            </div>
                            <div className="app-stats-bestScore">
                                <h2>BEST</h2>
                                <p>0</p>
                            </div>
                        </div>
                        <button className="app-new" onClick={() => setReset(reset + 1)}>New Game</button>
                    </div>
                </div>

                <div className="app-content">
                    <div className="app-body">
                        <Tiles action = {updateScore} reset = {reset} fresh = {fresh} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App
