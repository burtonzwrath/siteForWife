import { useEffect, useRef } from "react";

function Clock() {
  const clockStyles = {
    clock: {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      position: "relative",
      boxShadow:
        "inset 0 0 30px rgba(84,205,213,0.7), 0 0 20px 10px rgba(0,0,0,0.6)",
    },
    cogs: {
      width: "90px",
      height: "50px",
      background: "#333",
      borderRadius: "4px",
      position: "absolute",
      top: "170px",
      left: "calc(50% - 50px)",
      overflow: "hidden",
    },
    cog1: {
      width: "90px",
      height: "90px",
      position: "absolute",
      left: "-52px",
      top: "-20px",
      animation: " cog 6s linear infinite",
    },
    cog2: {
      width: "70px",
      height: "70px",
      position: "absolute",
      left: "33px",
      top: "-20px",
      animation: " cog 6s linear infinite reverse",
    },
    min: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      width: "200px",
      height: "200px",
      top: "calc(50% - 100px)",
      left: "calc(50% - 100px)",
    },
    hour: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      width: "160px",
      height: "160px",
      top: "calc(50% - 80px)",
      left: " calc(50% - 80px)",
    },
    sec: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      width: "250px",
      height: "250px",
      top: "calc(50% - 125px)",
      left: "calc(50% - 125px)",
    },
    minArr: {
      background: "rgba(84,205,213,0.7)",
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      width: "4px",
      height: "100px",
    },
    secArr: {
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      width: "2px",
      height: "150px",
      background: "rgba(154,217,238,0.6)",
    },
    hourArr: {
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      width: "8px",
      height: "80px",
      background: "#056974",
    },
  };

  const secRef = useRef();
  const minRef = useRef();
  const hourRef = useRef();

  useEffect(() => {
    // setInterval(clockTimer, 1000);
  }, []);

  function clockTimer() {
    let d = new Date();
    let hh = d.getHours() * 30 + d.getMinutes() / 2;
    let mm = d.getMinutes() * 6;
    let ss = d.getSeconds() * 6;

    secRef.current.style.transform = `rotate(${ss}deg)`;
    minRef.current.style.transform = `rotate(${mm}deg)`;
    hourRef.current.style.transform = `rotate(${hh}deg)`;
  }

  return (
    <div className="" style={clockStyles.clock}>
      <img src="/img/clock.png" alt="" />
      <div className="cogs overflow-hidden" style={clockStyles.cogs}>
        <div
          className="cog1 animate-[cog_6s_linear_infinite]"
          style={clockStyles.cog1}
        >
          <img src="/img/cog.png" alt="" />
        </div>
        <div
          className="cog1 animate-[cog_6s_linear_infinite_reverse]"
          style={clockStyles.cog2}
        >
          <img src="/img/cog.png" alt="" />
        </div>
        <div className="cog2" style={clockStyles.cog2}></div>
      </div>
      <div className="hour" ref={hourRef} style={clockStyles.hour}>
        <div className="hourArr" style={clockStyles.hourArr}></div>
      </div>
      <div className="min" ref={minRef} style={clockStyles.min}>
        <div className="minArr" style={clockStyles.minArr}></div>
      </div>
      <div className="sec" ref={secRef} style={clockStyles.sec}>
        <div className="secArr" style={clockStyles.secArr}></div>
      </div>
    </div>
  );
}

export default Clock;
