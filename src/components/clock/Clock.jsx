import { useEffect } from "react";

function Clock() {
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
      <img className="clock_image" src="/img/medIcon5.jpg" alt="" />
      <div className="cogs clock_cogs ">
        <div className="cog1  clock_cog1">
          <img src="/img/cog.png" alt="" />
        </div>
        <div className="cog2 clock_cog2">
          <img src="/img/cog.png" alt="" />
        </div>
      </div>
      <div className="hour clock_hourDiv">
        <div className="hourArr clock_hourArrow "></div>
      </div>
      <div className="min clock_minDiv">
        <div className="minArr  clock_minArrow"></div>
      </div>
      <div className="sec  clock_secDiv">
        <div className="secArr  clock_secArrow"></div>
      </div>
    </div>
  );
}

export default Clock;
