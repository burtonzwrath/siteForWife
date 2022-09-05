import { useEffect, useRef, useState } from "react";
import img1 from "../../src/img/1.jpg";
import img2 from "../../src/img/2.jpg";
import img3 from "../../src/img/3.jpg";
import img4 from "../../src/img/4.jpg";
import img5 from "../../src/img/5.png";

function Calculator() {
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
    img =      <img className="h-80  " src={img5} alt="" height="475" />
    h3 = <h3 className="block w-7 ml-2">{result === 0 ? "" : result}</h3>;
  } else if (result < 18.5) {
    img = (
      <img className="h-80 border rounded" src={img1} alt="" height="475" />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-sky-600 font-semibold text-2xl italic">
        {result}
      </h3>
    );
  } else if (result >= 18 && result <= 24.9) {
    img = (
      <img className="h-80 border rounded" src={img2} alt="" height="472" />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-green-600 font-semibold text-2xl italic">
        {result}
      </h3>
    );
  } else if (result >= 25 && result < 29.9) {
    img = (
      <img className="h-80 border rounded" src={img3} alt="" height="476" />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-blue-600 font-semibold text-2xl italic">
        {result}
      </h3>
    );
  } else if (result >= 30) {
    img = (
      <img className="h-80 border rounded" src={img4} alt="" height="476" />
    );
    h3 = (
      <h3 className="block w-7 ml-2 text-red-600 font-semibold text-2xl italic">
        {result}
      </h3>
    );
  }

  return (
    <div id="calc" className=" relative w-3/12 mx-auto mt-20 mb-20">
      <div
        id="calcContainer"
        className=" p-4 flex flex-col gap-2 items-center bg-white rounded-tl-3xl  rounded-br-3xl shadow-[0_0_20px_10px_rgba(0,0,0,0.6) shadow-[inset_0_0_30px_rgba(84,205,213,0.7),0_0_20px_10px_rgba(0,0,0,0.6)]"
      >

        <h1 className="inline-block font-bold italic m-4 text-xl text-sky-800">
          Калькулятор индекса массы тела
        </h1>

        <div className="flex flex-col gap-2 items-center m-4">

          <label className="italic text-lg text-sky-700 font-semibold" htmlFor="height">
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

          <label className="italic text-lg text-sky-700 font-semibold" htmlFor="weightNumber">
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
              className="text-orange-100 font-semibold border-4 border-sky-700 rounded-xl w-20 bg-sky-500 hover:bg-orange-400 mt-4 transition duration-150 ease-out hover:ease-in"
              onClick={handleReset}
          >
            Сброс
          </button>
          <div className="flex">
            <h2 className=" text-xl  italic text-sky-700 font-semibold ">Ваш индекс массы:</h2> {h3}
          </div>
          <div className="w-32 h-80">{img}</div>

        </div>


      </div>
    </div>
  );
}

export default Calculator;
