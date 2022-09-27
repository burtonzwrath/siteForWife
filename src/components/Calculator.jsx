import { useEffect, useRef, useState } from "react";
import img1 from "../../src/img/1.jpg";
import img2 from "../../src/img/2.jpg";
import img3 from "../../src/img/3.jpg";
import img4 from "../../src/img/4.jpg";
import img5 from "../../src/img/5.png";
import image from "../img/calc5.jpg";
import NavBar from "./NavBar";

function Calculator(props) {

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
    img = <img className=" object-contain  h-[50vmin]  sm:h-[13vmax] sm:w-[10vmax]" src={img5} alt=""  />;
    h3 = <h3 className="block w-7 ml-2 text-[3vmin] sm:text-[1.5vmax]">{result === 0 ? "" : result}</h3>;
  } else if (result < 18.5) {
    img = (
      <img className=" object-contain  h-[50vmin]  sm:h-[13vmax] border rounded" src={img1} alt="" />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-sky-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  } else if (result >= 18 && result <= 24.9) {
    img = (
      <img className=" object-contain   h-[50vmin]  sm:h-[13vmax] border rounded" src={img2} alt=""  />
    );
    h3 = (
      <h3 className=" block w-7 ml-2 text-green-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  } else if (result >= 25 && result <= 29.9) {
    img = (
      <img className="object-contain   h-[50vmin]  sm:h-[13vmax]  border rounded" src={img3} alt=""  />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-blue-600 font-semibold text-[3vmin] sm:text-[1.5vmax] italic">
        {result}
      </h3>
    );
  } else if (result >= 30) {
    img = (
      <img className=" object-contain  h-[50vmin]  sm:h-[13vmax]  border rounded" src={img4} alt=""  />
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
                  : "nav flex absolute h-screen z-20 -left-44 lg:-left-36 w-32 top-100 opacity-100     ease-in duration-500   "
            }
        >
          <NavBar nav={props.nav} setNav={props.setNav} />
          <div className="w-full"></div>
        </div>

    <div className=" z-10">
      <div id="calc" className=" h-screen  w-full justify-center  flex items-center ">
        <div
          id="calcContainer"
          className="  h-[90vmax]   sm:h-[90vmin] flex flex-col  gap-2 items-center bg-white rounded-tl-3xl  rounded-br-3xl  shadow-[inset_0_0_60px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]"
        >
          <h1 className="inline-block font-bold italic m-4 text-[3vmin] sm:text-[1.2vmax] text-sky-800">
            Калькулятор индекса массы тела
          </h1>

          <div className="flex  flex-col gap-2 items-center ">
            <label
              className="italic text-[3vmin] sm:text-[1.2vmax] text-sky-700 font-semibold"
              htmlFor="height"
            >
              Рост
            </label>

            <input
              className="w-12 border-2 rounded border-sky-300 pl-1 "
              id="heightNumber"
              defaultValue="0"
              type="number"
              ref={heightRefNumber}
              onChange={handleChangeNumberHeight}
            />
            <input
              id="heightRange"
              defaultValue="0"
              type="range"
              min="1"
              max="220"
              step="1"
              ref={heightRefRange}
              onInput={handleChangeRangeHeight}
            />

            <label
              className="italic text-[3vmin] sm:text-[1.2vmax] text-sky-700 font-semibold"
              htmlFor="weightNumber"
            >
              Масса
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
              min="1"
              max="220"
              step="1"
              ref={weightRefRange}
              onInput={handleChangeRangeWeight}
            />
            <button
              className=" text-[3vmin] sm:text-[1.5vmax] text-orange-100 font-semibold border-4 border-sky-700 rounded-xl  bg-sky-500 hover:bg-orange-400 mt-4 transition duration-150 ease-out hover:ease-in"
              onClick={handleReset}
            >
              Сброс
            </button>
            <div className="flex items-end">
              <h2 className=" text-[3vmin] sm:text-[1.2vmax]  italic text-sky-700 font-semibold ">
                Ваш индекс массы:
              </h2>
              <div className="">
              {h3}
              </div>
            </div>
            <div className=" h-[20em] sm:h-full  flex items-center    ">
              {img}
            </div>
          </div>
        </div>
      </div>
    </div>
        <img className=" blur-[3px] absolute z-0 w-screen h-screen" src={image} alt=""/>
      </div>
  );
}

export default Calculator;
