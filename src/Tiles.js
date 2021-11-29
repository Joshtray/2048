import React from 'react'
import './Tiles.css'
import { useState, useEffect } from 'react';

export const Tiles = (props) => {
    var [tiles, setTiles] = useState(props.fresh);
    let dummyTiles = [];
    dummyTiles = tiles;
    const [name, setName] = useState('dog');
    
    const gameStart = () => {
        const randomInt = (x) => {
            return Math.floor(Math.random() * x);
        }
        
        let ri = randomInt(4);
        let rj = randomInt(4);
        
        dummyTiles[ri][rj] = 2;
        setTiles(dummyTiles);
    }


    const handleKeyPressLeft = () => {
        let availableTile = [];
        let buff = false;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (tiles[i][j] === 0 && j < 3) {
                    for (let k = j; k < 4; k++) {
                        if (tiles[i][k] !== 0) {
                            dummyTiles[i][j] = tiles[i][k];
                            dummyTiles[i][k] = 0;
                            tiles[i][k] = 0;
                            k = 4;
                            buff = true;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (dummyTiles[i][j] === dummyTiles[i][j+1]) {
                    let x = dummyTiles[i][j] 
                    dummyTiles[i][j] = 2*dummyTiles[i][j+1];
                    for (let k = j+1; k < 3; k++) {
                        dummyTiles[i][k] = dummyTiles[i][k+1]
                    }
                    dummyTiles[i][3] = 0;
                    if (x != 0) {
                        props.action()
                        buff = true
                    }
                }
            }
        }
        
        
        for (let i=0; i < 4; i++) {
            for (let j=0; j < 4; j++) {
                if (dummyTiles[i][j] === 0) {
                    availableTile.push([i, j]);
                }
            }
        }
        if (buff) {
            const randomInt = (x) => {
                return Math.floor(Math.random() * x);
            }
            
            let r = randomInt(availableTile.length);
            
            dummyTiles[availableTile[r][0]][availableTile[r][1]] = 2;
            setTiles(dummyTiles);
            setName('cow');
        }
    }

    const handleKeyPressUp = () => {
        let availableTile = [];
        let buff=false;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (tiles[i][j] === 0 && i < 3) {
                    for (let k = i; k < 4; k++) {
                        if (tiles[k][j] !== 0) {
                            dummyTiles[i][j] = tiles[k][j];
                            dummyTiles[k][j] = 0;
                            tiles[k][j] = 0;
                            k = 4;
                            buff = true;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (dummyTiles[i][j] === dummyTiles[i+1][j]) {
                    let x = dummyTiles[i][j];
                    dummyTiles[i][j] = 2*dummyTiles[i+1][j];
                    for (let k = i+1; k < 3; k++) {
                        dummyTiles[k][j] = dummyTiles[k+1][j]
                    }
                    dummyTiles[3][j] = 0;
                    if (x != 0) {
                        props.action();
                        buff = true
                    }
                }
            }
        }
        
        
        for (let i=0; i < 4; i++) {
            for (let j=0; j < 4; j++) {
                if (dummyTiles[i][j] === 0) {
                    availableTile.push([i, j]);
                }
            }
        }
        
        if (buff) {
            const randomInt = (x) => {
                return Math.floor(Math.random() * x);
            }
            
            let r = randomInt(availableTile.length);
            
            dummyTiles[availableTile[r][0]][availableTile[r][1]] = 2;
            setTiles(dummyTiles);
            setName('chicken');
        }
    }

    const handleKeyPressDown = () => {
        let availableTile = [];
        let buff = false;
        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                if (tiles[i][j] === 0 && i > 0) {
                    for (let k = i; k >= 0; k--) {
                        if (tiles[k][j] !== 0) {
                            dummyTiles[i][j] = tiles[k][j];
                            dummyTiles[k][j] = 0;
                            tiles[k][j] = 0;
                            k = -1;
                            buff = true;
                        }
                    }
                }
            }
        }

        for (let i = 3; i > 0; i--) {
            for (let j = 3; j >= 0; j--) {
                if (dummyTiles[i][j] === dummyTiles[i-1][j]) {
                    let x = dummyTiles[i][j];
                    dummyTiles[i][j] = 2*dummyTiles[i-1][j];
                    for (let k = i-1; k > 0; k--) {
                        dummyTiles[k][j] = dummyTiles[k-1][j]
                    }
                    dummyTiles[0][j] = 0;
                    if (x !== 0) {
                        props.action();
                        buff = true
                    }
                }
            }
        }
        
        
        for (let i=0; i < 4; i++) {
            for (let j=0; j < 4; j++) {
                if (dummyTiles[i][j] === 0) {
                    availableTile.push([i, j]);
                }
            }
        }
        
        if (buff) {
            const randomInt = (x) => {
                return Math.floor(Math.random() * x);
            }
            
            let r = randomInt(availableTile.length);
            
            dummyTiles[availableTile[r][0]][availableTile[r][1]] = 2;
            setTiles(dummyTiles);
            setName('goat');
        }
    }

    const handleKeyPressRight = () => {
        let availableTile = [];
        let buff = false;
        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                if (tiles[i][j] === 0 && j > 0) {
                    for (let k = j; k >= 0; k--) {
                        if (tiles[i][k] !== 0) {
                            dummyTiles[i][j] = tiles[i][k];
                            dummyTiles[i][k] = 0;
                            tiles[i][k] = 0;
                            k = -1;
                            buff = true;
                        }
                    }
                }
            }
        }

        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j > 0; j--) {
                if (dummyTiles[i][j] === dummyTiles[i][j-1]) {
                    let x = dummyTiles[i][j];
                    dummyTiles[i][j] = 2*dummyTiles[i][j-1];
                    for (let k = j-1; k > 0; k--) {
                        dummyTiles[i][k] = dummyTiles[i][k-1]
                    }
                    dummyTiles[i][0] = 0;
                    if (x != 0) {
                        props.action();
                        buff = true
                    }
                }
            }
        }
        
        
        for (let i=0; i < 4; i++) {
            for (let j=0; j < 4; j++) {
                if (dummyTiles[i][j] === 0) {
                    availableTile.push([i, j]);
                }
            }
        }
        if (buff) {
            const randomInt = (x) => {
                return Math.floor(Math.random() * x);
            }
            
            let r = randomInt(availableTile.length);
            
            dummyTiles[availableTile[r][0]][availableTile[r][1]] = 2;
            setTiles(dummyTiles);
            setName('pig');
        }
    }

    const resetGame = () => {
        tiles = props.fresh;
        dummyTiles = props.fresh;
        gameStart();
    }

    useEffect(resetGame, [props.reset]);

    useEffect(() => {
        document.addEventListener('keydown', HandlePressStart)
    }, [props.reset]);

    useEffect(() => {
        document.addEventListener('keyup', HandlePressFinish)
    }, []);

    useEffect(() => {
        document.removeEventListener('keydown', HandlePressFinish)
    }, [props.reset]);

    const HandlePressStart = (event) => {
        switch (event.key) {
            case 'ArrowLeft':   
                handleKeyPressLeft();
                break;
            case 'ArrowUp':
                handleKeyPressUp();
                break;
            case 'ArrowDown':
                handleKeyPressDown();
                break;
            case 'ArrowRight':
                handleKeyPressRight();
                break;
            default:
                setName('dog'); 
        }
    }

    const HandlePressFinish = (event) => {
        setName('dinosaur');
    }

    return (
        <div className="tiles">
            <div className="row-1">
                {tiles[0].map((tile) => <p className={"tile-" + (tile <= 2048 ? tile : "over")}>{tile > 0 ? tile : ''}</p>)}
            </div>
            <div className="row-2">
                {tiles[1].map((tile) => <p className={"tile-" + (tile <= 2048 ? tile : "over")}>{tile > 0 ? tile : ''}</p>)}
            </div>
            <div className="row-3">
                {tiles[2].map((tile) => <p className={"tile-" + (tile <= 2048 ? tile : "over")}>{tile > 0 ? tile : ''}</p>)}
            </div>
            <div className="row-4">
                {tiles[3].map((tile) => <p className={"tile-" + (tile <= 2048 ? tile : "over")}>{tile > 0 ? tile : ''}</p>)}
            </div>
            <p>{name}</p>
        </div>
    )
}
export default Tiles;
