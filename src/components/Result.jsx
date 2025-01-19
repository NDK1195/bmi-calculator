function Result({
  height,
  weight,
  imperialHeight,
  imperialWeight,
  activeRadio,
}) {
  let bmi = 0;

  if (activeRadio === "metric") {
    bmi = (weight / (height / 100) ** 2).toFixed(2);
  } else if (activeRadio === "imperial") {
    bmi = (
      ((imperialWeight.st * 14 + Number(imperialWeight.lbs)) /
        (imperialHeight.feet * 12 + Number(imperialHeight.inches)) ** 2) *
      703
    ).toFixed(2);
  }

  let result = "";

  if (bmi < 18.5) {
    result = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.99) {
    result = "healthy weight";
  } else if (bmi >= 25 && bmi <= 29.99) {
    result = "overweight";
  } else if (bmi >= 30) {
    result = "obese";
  }

  let lowerIdealWeight = 0;
  let higherIdealWeight = 0;

  if (activeRadio === "metric") {
    lowerIdealWeight = (18.5 * (height / 100) ** 2).toFixed(1);
    higherIdealWeight = (24.9 * (height / 100) ** 2).toFixed(1);
  } else if (activeRadio === "imperial") {
    lowerIdealWeight = (
      (18.5 / 703) *
      (imperialHeight.feet * 12 + Number(imperialHeight.inches)) ** 2
    ).toFixed(1);
    higherIdealWeight = (
      (24.9 / 703) *
      (imperialHeight.feet * 12 + Number(imperialHeight.inches)) ** 2
    ).toFixed(1);
  }

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
            {lowerIdealWeight ? Math.floor(lowerIdealWeight / 14) : "0"}st{" "}
            {lowerIdealWeight
              ? Math.floor(
                  (lowerIdealWeight / 14 - Math.floor(lowerIdealWeight / 14)) *
                    14,
                )
              : "0"}
            lbs - {higherIdealWeight ? Math.floor(higherIdealWeight / 14) : "0"}
            st{" "}
            {higherIdealWeight
              ? Math.floor(
                  (higherIdealWeight / 14 -
                    Math.floor(higherIdealWeight / 14)) *
                    14,
                )
              : "0"}
            lbs.
          </span>
        )}
      </p>
    </div>
  );
}
export default Result;
