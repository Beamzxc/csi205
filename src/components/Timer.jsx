import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  const convertToString = (sec) => {
    const minute = Math.floor(sec / 60);
    const second = sec % 60;
    return `${minute}m ${second.toString().padStart(2, '0')}s`;
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1); 
      }, 1000);
    }
    return () => clearInterval(timer); 
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div
      className="border border-2 border-black rounded-3 p-2 m-auto mt-3"
      style={{ width: "fit-content", backgroundColor: "#e0e0e0" }}
    >
      <div className="text-center fw-bold fs-4 text-primary" style={{ color: "#0d6efd" }}>
        TIMER
      </div>
      <div className="text-center mt-2">
        <input
          value={convertToString(time)}
          readOnly
          className="form-control text-center fw-bold"
          style={{ width: "170px", margin: "0 auto", backgroundColor: "#fff", border: "none" }}
        />
      </div>
      <div className="mt-2 d-flex justify-content-around">
        <button
          className="btn btn-danger px-3"
          onClick={handleReset}
          style={{ fontSize: "0.9rem", backgroundColor: "#dc3545", borderColor: "#dc3545" }} // สีแดง
        >
          <i className="bi bi-arrow-clockwise"></i>&nbsp;Reset
        </button>
        <button
          className={`btn ${isRunning ? "btn-warning" : "btn-success"} px-3`}
          onClick={handleToggle}
          style={{ fontSize: "0.9rem" }}
        >
          <i className={isRunning ? "bi bi-pause-fill" : "bi bi-play-fill"}></i>&nbsp;{isRunning ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
};

export default Timer;