import { useState } from "react";

function BMIForm() {
  const [activeRadio, setActiveRadio] = useState("metric");
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  function handleChangeRadio(event) {
    setActiveRadio(event.target.value);
  }

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-box md:gap-8 md:p-8 lg:mt-[92px] lg:max-w-[564px]">
      <h2 className="text-2xl font-semibold leading-none tracking-[-1.2px] text-gunmetal">
        Enter your details below
      </h2>
      {/* radio */}
      <div className="grid grid-cols-2 gap-6">
        {/* one radio */}
        <div className="group flex items-center gap-[18px]">
          <div className="grid place-items-center">
            <input
              type="radio"
              name="measure-option"
              id="metric"
              value="metric"
              className={`${activeRadio === "metric" ? "bg-blue bg-opacity-15" : "border-[#6C9AA3]"} col-start-1 row-start-1 size-[31px] appearance-none rounded-full border hover:cursor-pointer group-hover:border-blue`}
              checked={activeRadio === "metric"}
              onChange={handleChangeRadio}
            />
            {/* active radio style */}
            {activeRadio === "metric" && (
              <div className="col-start-1 row-start-1 size-[15.5px] rounded-full bg-blue"></div>
            )}
            {/* active radio style */}
          </div>
          <label
            htmlFor="metric"
            className="font-semibold leading-6 text-gunmetal hover:cursor-pointer"
          >
            Metric
          </label>
        </div>
        {/* one radio */}
        <div className="group flex items-center gap-[18px]">
          <div className="grid place-items-center">
            <input
              type="radio"
              name="measure-option"
              id="imperial"
              value="imperial"
              className={`${activeRadio === "imperial" ? "bg-blue bg-opacity-15" : "border-[#6C9AA3]"} col-start-1 row-start-1 size-[31px] appearance-none rounded-full border hover:cursor-pointer group-hover:border-blue`}
              checked={activeRadio === "imperial"}
              onChange={handleChangeRadio}
            />
            {/* active radio style */}
            {activeRadio === "imperial" && (
              <div className="col-start-1 row-start-1 size-[15.5px] rounded-full bg-blue"></div>
            )}
            {/* active radio style */}
          </div>
          <label
            htmlFor="imperial"
            className="font-semibold leading-6 text-gunmetal hover:cursor-pointer"
          >
            Imperial
          </label>
        </div>
      </div>
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
                className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                placeholder="0"
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
                className="w-full text-2xl font-bold leading-none tracking-[-1.2px] text-gunmetal outline-none placeholder:text-dark-electric-blue"
                placeholder="0"
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
                  value=""
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
                  value=""
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
                  value=""
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
                  value=""
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
      <div className="grid grid-cols-1 gap-6 rounded-2xl bg-blue p-8 text-white md:grid-cols-2 md:rounded-br-[999px] md:rounded-tr-[999px]">
        <div>
          <p className="font-semibold leading-normal">Your BMI is...</p>
          <span className="text-5xl font-semibold leading-[110%] tracking-[-2.4px] lg:text-[64px] lg:tracking-[-3.2px]">
            23.4
          </span>
        </div>
        <p className="self-center text-sm leading-normal">
          Your BMI suggests you’re a healthy weight. Your ideal weight is
          between <span className="font-bold">63.3kgs - 85.2kgs.</span>
        </p>
      </div>
      {/* result */}
    </div>
  );
}
export default BMIForm;
