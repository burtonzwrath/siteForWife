import { useEffect } from "react";
import img5 from "../../img/5.png";
import img1 from "../../img/bmi1.png";
import img2 from "../../img/bmi2.png";
import img3 from "../../img/bmi3.png";
import img4 from "../../img/bmi4.png";
import { useTranslation } from "react-i18next";
let img;
let calculatorResult;

function CalculatorResultImage({ weight, setResult, result, height }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (weight > 0 && height > 0) {
      setResult(((weight / Math.pow(height, 2)) * 10000).toFixed(2));
    }
  }, [weight, height]);

  if (result < 0.2) {
    img = <img className="calculator_noIndexImage " src={img5} alt="" />;
    calculatorResult = (
      <h3 className="calculator_result">{result === 0 ? "" : result}</h3>
    );
  }
  if (result < 18.5) {
    img = <img className="  calculator_noIndexImage   " src={img1} alt="" />;
    calculatorResult = <h3 className="calculator_result">{result}</h3>;
  }
  if (result >= 18 && result <= 24.9) {
    img = <img className="  calculator_noIndexImage " src={img2} alt="" />;
    calculatorResult = <h3 className=" calculator_result">{result}</h3>;
  }
  if (result >= 25 && result <= 29.9) {
    img = <img className=" calculator_noIndexImage    " src={img3} alt="" />;
    calculatorResult = <h3 className="calculator_result">{result}</h3>;
  }
  if (result >= 30) {
    img = <img className=" calculator_noIndexImage  " src={img4} alt="" />;
    calculatorResult = <h3 className="calculator_result">{result}</h3>;
  }

  return (
    <div>
      <div className="flex items-end h-10 content-center">
        <h2 className=" calculator_bmi  align-bottom">{t("calculator.bmi")}</h2>
        <div className="">{calculatorResult}</div>
      </div>
      <div className=" h-40 md:h-28  xl:h-[14vmax] flex justify-center  ">
        {img}
      </div>
    </div>
  );
}
export default CalculatorResultImage;
