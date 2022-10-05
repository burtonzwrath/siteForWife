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
    <div className="h-[130px] w-[130px] 2xl:h-[8vmax] 2xl:w-[8vmax] rounded-tl-2xl  rounded-br-2xl  from-blue-500  mt-7  relative shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_10px_2px_rgba(0,0,0,0.6)]">
      <img
        className="h-[130px] w-[130px] 2xl:h-[8vmax] 2xl:w-[8vmax] opacity-20  rounded-2xl object-fill"
        src="/img/medIcon.jpg"
        alt=""
      />

      <div className="cogs overflow-hidden absolute left-[60%] bottom-[10%] w-[27px] h-[35px] 2xl:w-[2vmax] 2xl:h-[2.5vmax] rounded-md bg-stone-400  ">
        <div className="cog1  w-[40px] h-[40px] absolute -left-[25px] -top-[10px] 2xl:w-[2.5vmax]  2xl:h-[2.5vmax] 2xl:-left-[1vmax] 2xl:top-[1.4vmax] animate-[cog_6s_linear_infinite]">
          <img src="/img/cog.png" alt="" />
        </div>
        <div className="cog2 w-[50px] h-[50px]  absolute left-[11px] -top-[10px] 2xl:w-[2vmax]  2xl:h-[2vmax] 2xl:top-[0vmax] animate-[cog_6s_linear_infinite_reverse]">
          <img src="/img/cog.png" alt="" />
        </div>
      </div>

      <div className="hour absolute flex justify-center w-[90px] h-[90px] " style={clockStyles.hour}>
        <div className="hourArr  w-[8px] h-[55px] 2xl:w-[0.4vmax] "
       style={clockStyles.hourArr}></div>
      </div>
      <div className="min absolute flex justify-center w-[110px] h-[110px] " style={clockStyles.min}>
        <div className="minArr  w-[2px] h-[60px] 2xl:w-[0.3vmax]" style={clockStyles.minArr}></div>
      </div>
      <div className="sec  absolute flex justify-center w-[120px] h-[120px] " style={clockStyles.sec}>
        <div className="secArr    w-[2px] h-[70px] 2xl:w-[0.25vmax]"
       style={clockStyles.secArr}></div>
      </div>
    </div>
  );
}

export default Clock;
