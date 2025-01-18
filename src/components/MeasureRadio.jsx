function MeasureRadio({ activeRadio, setActiveRadio }) {
  function handleChangeRadio(event) {
    setActiveRadio(event.target.value);
  }
  return (
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
  );
}
export default MeasureRadio;
