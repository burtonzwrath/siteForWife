import { useEffect } from "react";
import clock from "../img/clockMax2.png";

function Clock() {
  const clockStyles = {
    min: {
      top: "calc(50% - 55px)",
      left: " calc(50% - 55px)",
    },
    hour: {
      top: "calc(50% - 45px)",
      left: " calc(50% - 45px)",
    },
    sec: {
      top: "calc(50% - 60px)",
      left: " calc(50% - 60px)",
    },
    minArr: {
      background: "rgba(84,205,213,0.7)",
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
    },
    secArr: {
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      background: "rgba(154,217,238,0.6)",
    },
    hourArr: {
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      background: "#056974",
    },
  };

  useEffect(() => {
    setInterval(clockTimer, 1000);
  }, []);

  function clockTimer() {
    let d = new Date();
    let hh = d.getHours() * 30 + d.getMinutes() / 2;
    let mm = d.getMinutes() * 6;
    let ss = d.getSeconds() * 6;

    const min = document.querySelector(".min");
    const hour = document.querySelector(".hour");
    const sec = document.querySelector(".sec");
    if (sec && hour && min) {
      min.style.transform = `rotate(${mm}deg)`;
      hour.style.transform = `rotate(${hh}deg)`;
      sec.style.transform = `rotate(${ss}deg)`;
    }
  }

  return (
    <div className=" clock_wrapper">
      <img className="clock_image" src="/img/medIcon.jpg" alt="" />

      <div className="cogs clock_cogs ">
        <div className="cog1  clock_cog1">
          <img src="/img/cog.png" alt="" />
        </div>
        <div className="cog2 clock_cog2">
          <img src="/img/cog.png" alt="" />
        </div>
      </div>

      <div className="hour clock_hourDiv" style={clockStyles.hour}>
        <div
          className="hourArr clock_hourArrow "
          style={clockStyles.hourArr}
        ></div>
      </div>
      <div className="min clock_minDiv" style={clockStyles.min}>
        <div
          className="minArr  clock_minArrow"
          style={clockStyles.minArr}
        ></div>
      </div>
      <div className="sec  clock_secDiv" style={clockStyles.sec}>
        <div
          className="secArr    clock_secArrow"
          style={clockStyles.secArr}
        ></div>
      </div>
    </div>
  );
}

export default Clock;
