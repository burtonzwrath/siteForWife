import { useEffect, useRef, useState } from "react";
import img1 from "../../src/img/1fat.png";
import img2 from "../../src/img/2fat.png";
import img3 from "../../src/img/3fat.png";
import img4 from "../../src/img/4fat.png";
import img5 from "../../src/img/5.png";
import image from "../img/calc5.jpg";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";
import LengSwitcher from "./LengSwitcher";

function Calculator(props) {

  const { t} = useTranslation();

  const [result, setResult] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const weightRefNumber = useRef();
  const heightRefNumber = useRef();
  const weightRefRange = useRef();
  const heightRefRange = useRef();

  let img;
  let h3;

  const handleChangeRangeHeight = (e) => {
    e.preventDefault();
    setHeight(heightRefRange.current.value);
    heightRefNumber.current.value = heightRefRange.current.value;
  };

  const handleChangeNumberHeight = (e) => {
    e.preventDefault();
    setHeight(heightRefNumber.current.value);
    heightRefRange.current.value = heightRefNumber.current.value;
  };

  const handleChangeRangeWeight = (e) => {
    e.preventDefault();
    setWeight(weightRefRange.current.value);
    weightRefNumber.current.value = weightRefRange.current.value;
  };

  const handleChangeNumberWeight = (e) => {
    e.preventDefault();
    setWeight(weightRefNumber.current.value);
    weightRefRange.current.value = weightRefNumber.current.value;
  };

  const handleReset = () => {
    heightRefRange.current.value = 0;
    weightRefRange.current.value = 0;
    heightRefNumber.current.value = 0;
    weightRefNumber.current.value = 0;
    setResult(0);
  };

  useEffect(() => {
    if (weight > 0 && height > 0) {
      setResult(((weight / Math.pow(height, 2)) * 10000).toFixed(2));
    }
  }, [weight, height]);

  if (result < 0.2) {
    img = <img className="     w-24  xl:w-[14vmin] " src={img5} alt=""  />;
    h3 = <h3 className="block w-7 ml-2 text-[3vmin] sm:text-[1.5vmax]">{result === 0 ? "" : result}</h3>;
  } else if (result < 18.5) {
    img = (
      <img className="  w-24 sm:w-[10vmin] xl:w-[12vmin]  " src={img1} alt="" />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-sky-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  } else if (result >= 18 && result <= 24.9) {
    img = (
      <img className="  w-24 sm:w-[10vmin] xl:w-[12vmin]" src={img2} alt=""  />
    );
    h3 = (
      <h3 className=" block w-7 ml-2 text-green-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  } else if (result >= 25 && result <= 29.9) {
    img = (
      <img className="  w-24 sm:w-[10vmin] xl:w-[12vmin]   " src={img3} alt=""  />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-blue-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  } else if (result >= 30) {
    img = (
      <img className="  w-24 sm:w-[10vmin] xl:w-[12vmin] " src={img4} alt=""  />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-red-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  }

  return (
      <div className="w-screen h-screen flex justify-center align-center   ">
        <div
            className={
              props.nav === true
                  ? "nav flex absolute h-screen  z-20  left-0    ease-in duration-500   "
                  : "nav flex absolute h-screen z-20 -left-44 lg:-left-40  2xl:-left-[11.4vmax] w-32 top-100 opacity-100     ease-in duration-500   "
            }
        >
          <NavBar nav={props.nav} setNav={props.setNav} />
          <div className="w-full"></div>
        </div>
        <div className=" z-50 absolute top-5 right-10  ">
          <LengSwitcher animationState={props.animationState} />
        </div>


      <div id="calc" className=" h-screen z-10 w-5/6 sm:w-full sm:justify-center  flex items-center ">
        <div
          id="calcContainer"
          className="  h-[80vmax] w-full sm:w-1/3 sm:h-[80vmin] grid grid-col  gap-2 items-center bg-white rounded-tl-3xl  rounded-br-3xl shadow-[inset_0_0_30px_rgba(187,247,208,12),0_0_20px_10px_rgba(0,0,0,0.6)]"
        >
          <h1 className="inline-block font-bold italic  place-self-center m-4 text-[4vmin] sm:text-[1.5vmax] text-sky-800">
            {t("calculator.calc")}
          </h1>

          <div className="grid  grid-col gap-2 sm:gap-3 place-self-center self-start  place-items-center  ">
            <label
              className="italic text-[4vmin] sm:text-[1.2vmax] text-sky-700 font-semibold"
              htmlFor="height"
            >
              {t("calculator.height")}
            </label>

            <input
              className="w-12 border-2 rounded border-sky-300 pl-1 "
              id="heightNumber"
              defaultValue="0"
              type="number"
              ref={heightRefNumber}
              onChange={handleChangeNumberHeight}
            />
            <input className=""
              id="heightRange"
              defaultValue="0"
              type="range"
              min="80"
              max="220"
              step="1"
              ref={heightRefRange}
              onInput={handleChangeRangeHeight}
            />

            <label
              className="italic text-[4vmin] sm:text-[1.2vmax] text-sky-700 font-semibold"
              htmlFor="weightNumber"
            >
              {t("calculator.weight")}
            </label>
            <input
              className="w-12 border-2 rounded border-sky-300 pl-1"
              id="weightNumber"
              defaultValue="0"
              type="number"
              ref={weightRefNumber}
              onChange={handleChangeNumberWeight}
            />
            <input
              id="weightRange"
              defaultValue="0"
              type="range"
              min="40"
              max="220"
              step="1"
              ref={weightRefRange}
              onInput={handleChangeRangeWeight}
            />
            <button
              className=" text-[3vmin] text-[4vmin] sm:text-[1vmax] text-blue-300 font-semibold border-2 border-sky-700 rounded-tl-lg  rounded-br-lg   bg-green-200 hover:bg-orange-400 mt-4 transition duration-150 ease-out hover:ease-in"
              onClick={handleReset}
            >
              {t("calculator.reset")}
            </button>
            <div className="flex items-end ">
              <h2 className=" text-[4vmin] sm:text-[1.2vmax]  italic text-sky-700 font-semibold ">
                {t("calculator.bmi")}
              </h2>
              <div className="">
              {h3}
              </div>
            </div>
            <div className="    flex items-center   ">
              {img}
            </div>
        </div>
      </div>
    </div  >
        <img className=" blur-[3px] absolute z-0 w-screen h-screen" src={image} alt=""/>
      </div>
  );
}

export default Calculator;
