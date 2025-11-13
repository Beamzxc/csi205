import React, { useState, useEffect } from 'react';
import basketball from '../img/basketball.png';
import football from '../img/football.png';
import volleyball from '../img/volleyball.png';
import human from '../img/human.png';
import cartoon from '../img/cartoon.png';
import logo from '../img/logo.png';

const Animation = () => {
  const fieldW = 800;
  const fieldH = 400;
  const ballSize = 150;
  const speedX = 5;
  const speedY = 5;
  const maxLeft = fieldW - ballSize;
  const maxTop = fieldH - ballSize;

  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [run, setRun] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [current, setCurrent] = useState(0);

  const pics = [
    null,        // 0 = none
    basketball,  // 1
    football,    // 2
    volleyball,  // 3
    human,       // 4
    cartoon,     // 5
    logo         // 6
  ];

  const move = () => {
    setBallPosition((prev) => {
      let newX = prev.x;
      let newY = prev.y;
      if (goRight) {
        newX += speedX;
        if (newX >= maxLeft) setGoRight(false);
      } else {
        newX -= speedX;
        if (newX <= 0) setGoRight(true);
      }
      if (goDown) {
        newY += speedY;
        if (newY >= maxTop) setGoDown(false);
      } else {
        newY -= speedY;
        if (newY <= 0) setGoDown(true);
      }
      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    let timer;
    if (run) {
      timer = setInterval(() => {
        move();
      }, 25);
    }
    return () => clearInterval(timer);
  }, [run, goRight, goDown]);

  const setBall = (index) => {
    if (typeof index === 'number') {
      setCurrent(index || 0);
    }
  };

  const toggleRun = () => {
    setRun((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (/^[0-6]$/.test(e.key)) {
        setBall(parseInt(e.key));
      }
      if (e.code === 'Space') {
        e.preventDefault();
        toggleRun();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div id="container">
        <div id="field">
          <div
            id="ball"
            style={{
              left: `${ballPosition.x}px`,
              top: `${ballPosition.y}px`,
              backgroundImage: pics[current] ? `url(${pics[current]})` : 'none',
              backgroundColor: pics[current] ? 'transparent' : 'aliceblue',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div id="control">
          <button className="btn btn-success" onClick={toggleRun}>
            <span className="bi bi-play">&nbsp;{run ? 'PAUSE' : 'RUN'}</span>
          </button>
          <button className="btn btn-primary" onClick={() => setBall(0)}>None</button>
          <button className="btn btn-primary" onClick={() => setBall(1)}>Basketball</button>
          <button className="btn btn-primary" onClick={() => setBall(2)}>Football</button>
          <button className="btn btn-primary" onClick={() => setBall(3)}>Volleyball</button>
          <button className="btn btn-primary" onClick={() => setBall(4)}>Human</button>
          <button className="btn btn-primary" onClick={() => setBall(5)}>Cartoon</button>
          <button className="btn btn-primary" onClick={() => setBall(6)}>Logo</button>
        </div>
      </div>
    </>
  );
};

export default Animation;