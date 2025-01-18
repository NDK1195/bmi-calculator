function Result({ height, weight, activeRadio }) {
  const bmi = (weight / (height / 100) ** 2).toFixed(1);

  let result = "";

  if (bmi < 18.5) {
    result = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "healthy weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = "overweight";
  } else if (bmi >= 30) {
    result = "obese";
  }

  const lowerIdealWeight = (18.5 * (height / 100) ** 2).toFixed(1);
  const higherIdealWeight = (24.9 * (height / 100) ** 2).toFixed(1);

  const lowerImperialIdealWeight = lowerIdealWeight * 0.157473;
  const lowerSt = Math.floor(lowerImperialIdealWeight);
  const lowerLbs = Math.round(lowerImperialIdealWeight * 14 - lowerSt * 14);

  const higherImperialIdealWeight = higherIdealWeight * 0.157473;
  const higherSt = Math.floor(higherImperialIdealWeight);
  const higherLbs = Math.round(higherImperialIdealWeight * 14 - higherSt * 14);

  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl bg-blue p-8 text-white md:grid-cols-2 md:rounded-br-[999px] md:rounded-tr-[999px]">
      <div>
        <p className="font-semibold leading-normal">Your BMI is...</p>
        <span className="text-5xl font-semibold leading-[110%] tracking-[-2.4px] lg:text-[64px] lg:tracking-[-3.2px]">
          {bmi && !isNaN(bmi) ? bmi : "0"}
        </span>
      </div>
      <p className="self-center text-sm leading-normal">
        Your BMI suggests you’re a {result ? result : ""}. Your ideal weight is
        between{" "}
        {activeRadio === "metric" && (
          <span className="font-bold">
            {lowerIdealWeight ? lowerIdealWeight : "0"}kgs -{" "}
            {higherIdealWeight ? higherIdealWeight : "0"}kgs.
          </span>
        )}
        {activeRadio === "imperial" && (
          <span className="font-bold">
            {lowerSt ? lowerSt : "0"}st {lowerLbs ? lowerLbs : "0"}lbs -{" "}
            {higherSt ? higherSt : "0"}st {higherLbs ? higherLbs : "0"}lbs.
          </span>
        )}
      </p>
    </div>
  );
}
export default Result;
