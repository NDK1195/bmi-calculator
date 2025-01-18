import { useState } from "react";
import Result from "./Result";
import MeasureRadio from "./MeasureRadio";

function BMIForm() {
  const [activeRadio, setActiveRadio] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  const imperialHeight = height / 2.54;
  const feet = Math.floor(imperialHeight / 12);
  const inches = (imperialHeight - feet * 12).toFixed(1);

  const imperialWeight = weight * 0.157473;
  const st = Math.floor(imperialWeight);
  const lbs = (imperialWeight * 14 - st * 14).toFixed(1);

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-box md:gap-8 md:p-8 lg:mt-[92px] lg:max-w-[564px]">
      <h2 className="text-2xl font-semibold leading-none tracking-[-1.2px] text-gunmetal">
        Enter your details below
      </h2>
      {/* radio */}
      <MeasureRadio activeRadio={activeRadio} setActiveRadio={setActiveRadio} />
      {/* radio */}

      {/* input metric */}
      {activeRadio === "metric" && (
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {/* input group */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="height"
              className="text-sm leading-normal text-dark-electric-blue"
            >
              Height
            </label>
            {/* input container */}
            <div className="flex items-center justify-between gap-6 rounded-xl border border-dark-electric-blue bg-white px-6 py-5">
              <input
                type="text"
                id="height"
                value={height}
                maxLength={3}
                className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                placeholder="0"
                onChange={handleHeightChange}
              />
              <span className="text-2xl font-bold leading-none tracking-[-1.2px] text-blue">
                cm
              </span>
            </div>
            {/* input container */}
          </div>
          {/* input group */}
          {/* input group */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="weight"
              className="text-sm leading-normal text-dark-electric-blue"
            >
              Weight
            </label>
            {/* input container */}
            <div className="flex items-center justify-between gap-6 rounded-xl border border-dark-electric-blue bg-white px-6 py-5">
              <input
                type="text"
                id="weight"
                value={weight}
                maxLength={3}
                className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                placeholder="0"
                onChange={handleWeightChange}
              />
              <span className="text-2xl font-bold leading-none tracking-[-1.2px] text-blue">
                kg
              </span>
            </div>
            {/* input container */}
          </div>
          {/* input group */}
        </div>
      )}
      {/* input metric */}

      {/* input imperial */}
      {activeRadio === "imperial" && (
        <div className="flex flex-col gap-4 md:gap-6">
          {/* input group */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="height"
              className="text-sm leading-normal text-dark-electric-blue"
            >
              Height
            </label>
            <div className="flex gap-4 md:gap-6">
              {/* input container */}
              <div className="flex items-center justify-between gap-6 rounded-xl border border-dark-electric-blue bg-white px-6 py-5">
                <input
                  type="text"
                  id="height"
                  value={feet}
                  className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                  placeholder="0"
                />
                <span className="text-2xl font-bold leading-none tracking-[-1.2px] text-blue">
                  ft
                </span>
              </div>
              {/* input container */}

              {/* input container */}
              <div className="flex items-center justify-between gap-6 rounded-xl border border-dark-electric-blue bg-white px-6 py-5">
                <input
                  type="text"
                  id="height"
                  value={inches}
                  className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                  placeholder="0"
                />
                <span className="text-2xl font-bold leading-none tracking-[-1.2px] text-blue">
                  in
                </span>
              </div>
              {/* input container */}
            </div>
          </div>
          {/* input group */}

          {/* input group */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="weight"
              className="text-sm leading-normal text-dark-electric-blue"
            >
              Weight
            </label>
            <div className="flex gap-4 md:gap-6">
              {/* input container */}
              <div className="flex items-center justify-between gap-6 rounded-xl border border-dark-electric-blue bg-white px-6 py-5">
                <input
                  type="text"
                  id="weight"
                  value={st}
                  className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                  placeholder="0"
                />
                <span className="text-2xl font-bold leading-none tracking-[-1.2px] text-blue">
                  st
                </span>
              </div>
              {/* input container */}

              {/* input container */}
              <div className="flex items-center justify-between gap-6 rounded-xl border border-dark-electric-blue bg-white px-6 py-5">
                <input
                  type="text"
                  id="weight"
                  value={lbs}
                  className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                  placeholder="0"
                />
                <span className="text-2xl font-bold leading-none tracking-[-1.2px] text-blue">
                  lbs
                </span>
              </div>
              {/* input container */}
            </div>
          </div>
          {/* input group */}
        </div>
      )}
      {/* input imperial */}

      {/* result */}
      <Result weight={weight} height={height} activeRadio={activeRadio} />
      {/* result */}
    </div>
  );
}
export default BMIForm;
