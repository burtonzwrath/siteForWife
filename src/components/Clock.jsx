import { useEffect } from "react";
import clock from "../img/clockMax2.png"

function Clock() {
  const clockStyles = {

    cogs: {
      width: "27px",
      height: "35px",
      background: "#333",
      borderRadius: "4px",
      position: "absolute",
      bottom:"10%",
      left: "60%",
      overflow: "hidden",
    },
    cog1: {
      width: "90px",
      height: "90px",
      position: "absolute",
      left: "-70px",
      top: "-20px",
      animation: " cog 6s linear infinite",
    },
    cog2: {
      width: "70px",
      height: "70px",
      position: "absolute",
      left: "15px",
      top: "-20px",
      animation: " cog 6s linear infinite reverse",
    },
    min: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      width: "110px",
      height: "110px",
      top: "calc(50% - 55px)",
      left: " calc(50% - 55px)",
    },
    hour: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      width: "90px",
      height: "90px",
      top: "calc(50% - 45px)",
      left: " calc(50% - 45px)",
    },
    sec: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      width: "120px",
      height: "120px",
      top: "calc(50% - 60px)",
      left: " calc(50% - 60px)",
    },
    minArr: {
      background: "rgba(84,205,213,0.7)",
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      width: "4px",
      height: "60px",
    },
    secArr: {
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      width: "2px",
      height: "70px",
      background: "rgba(154,217,238,0.6)",
    },
    hourArr: {
      borderRadius: "4px 4px 0 0",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      width: "8px",
      height: "55px",
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

    const min = document.querySelector('.min')
    const hour =document.querySelector('.hour')
    const sec=document.querySelector('.sec')
    if ( sec && hour &&  min ) {
      min.style.transform=`rotate(${mm}deg)`
    hour.style.transform = `rotate(${hh}deg)`;
    sec.style.transform = `rotate(${ss}deg)`;
    }
  }

  return (
    <div className="h-[130px] w-[130px] rounded-tl-2xl  rounded-br-2xl  from-blue-500  mt-4  relative shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_10px_2px_rgba(0,0,0,0.6)]" >
      <img className="h-[130px] w-[130px] opacity-20  rounded-2xl object-fill" src="/img/medIcon.jpg" alt=""   />

      <div className="cogs overflow-hidden " style={clockStyles.cogs}>
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
      <div className="hour"  style={clockStyles.hour}>
        <div className="hourArr" style={clockStyles.hourArr}></div>
      </div>
      <div className="min"  style={clockStyles.min}>
        <div className="minArr" style={clockStyles.minArr}></div>
      </div>
      <div className="sec"  style={clockStyles.sec}>
        <div className="secArr" style={clockStyles.secArr}></div>
      </div>
    </div>
  );
}

export default Clock;
