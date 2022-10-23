import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LengSwitcher from "../mainPage/LengSwitcher";
import NavBar from "../navbar/NavBar";
import CalculatorResultImage from "./CalculatorResultImage";
import image from "../../img/calc5.jpg";

function Calculator({ nav, setNav, animationState }) {
  const { t } = useTranslation();
  const [result, setResult] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const weightRefNumber = useRef();
  const heightRefNumber = useRef();
  const weightRefRange = useRef();
  const heightRefRange = useRef();

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

  return (
    <div className="calculator_wrapper ">
      <div className={nav === true ? "navBar_Show  " : "navBar_Hide   "}>
        <NavBar nav={nav} setNav={setNav} />
        <div className="w-full"></div>
      </div>
      <div className=" lengSwitcher_wrapper ">
        <LengSwitcher animationState={animationState} />
      </div>

      <div id="calc" className=" calculator_contentWrapper ">
        <div id="calcContainer" className="calculatorMainContent_wrapper">
          <h1 className="calculator_h1">{t("calculator.calc")}</h1>

          <div className="calculatorContentStyle_wrapper ">
            <label className="calculator_heightLabel" htmlFor="height">
              {t("calculator.height")}
            </label>

            <input
              className="calculator_heightNumber"
              id="heightNumber"
              defaultValue="0"
              type="number"
              ref={heightRefNumber}
              onChange={handleChangeNumberHeight}
            />
            <input
              className=" xl:w-[10vmax]"
              id="heightRange"
              defaultValue="0"
              type="range"
              min="80"
              max="220"
              step="1"
              ref={heightRefRange}
              onInput={handleChangeRangeHeight}
            />

            <label className="calculator_weightLabel" htmlFor="weightNumber">
              {t("calculator.weight")}
            </label>
            <input
              className="calculator_weightNumber"
              id="weightNumber"
              defaultValue="0"
              type="number"
              ref={weightRefNumber}
              onChange={handleChangeNumberWeight}
            />
            <input
              className="xl:w-[10vmax]"
              id="weightRange"
              defaultValue="0"
              type="range"
              min="40"
              max="220"
              step="1"
              ref={weightRefRange}
              onInput={handleChangeRangeWeight}
            />
            <button className="calculator_buttonReset" onClick={handleReset}>
              {t("calculator.reset")}
            </button>
            <div>
              <CalculatorResultImage
                height={height}
                weight={weight}
                setResult={setResult}
                result={result}
              />
            </div>
          </div>
        </div>
      </div>
      <img className=" calculator_mainImage" src={image} alt="" />
    </div>
  );
}

export default Calculator;
