import { useEffect, useRef, useState } from "react";
import img1 from "../../src/img/1fat.png";
import img2 from "../../src/img/2fat.png";
import img3 from "../../src/img/3fat.png";
import img4 from "../../src/img/4fat.png";
import img5 from "../../src/img/5.png";
import image from "../img/calc5.jpg";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import LengSwitcher from "./LengSwitcher";

function Calculator(props) {
  const { t } = useTranslation();

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
    img = <img className="calculator_noIndexImage " src={img5} alt="" />;
    h3 = <h3 className="calculator_result">{result === 0 ? "" : result}</h3>;
  } else if (result < 18.5) {
    img = <img className="  calculator_image  " src={img1} alt="" />;
    h3 = <h3 className="calculator_result">{result}</h3>;
  } else if (result >= 18 && result <= 24.9) {
    img = <img className="  calculator_image" src={img2} alt="" />;
    h3 = <h3 className=" calculator_result">{result}</h3>;
  } else if (result >= 25 && result <= 29.9) {
    img = <img className=" calculator_image   " src={img3} alt="" />;
    h3 = <h3 className="calculator_result">{result}</h3>;
  } else if (result >= 30) {
    img = <img className=" calculator_image " src={img4} alt="" />;
    h3 = <h3 className="calculator_result">{result}</h3>;
  }

  return (
    <div className="calculator_wrapper ">
      <div className={props.nav === true ? "navBar_Show  " : "navBar_Hide   "}>
        <NavBar nav={props.nav} setNav={props.setNav} />
        <div className="w-full"></div>
      </div>
      <div className=" lengSwitcher_wrapper ">
        <LengSwitcher animationState={props.animationState} />
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
            <div className="flex items-end ">
              <h2 className=" calculator_bmi ">{t("calculator.bmi")}</h2>
              <div className="">{h3}</div>
            </div>
            <div className="    flex items-center   ">{img}</div>
          </div>
        </div>
      </div>
      <img className=" calculator_mainImage" src={image} alt="" />
    </div>
  );
}

export default Calculator;
