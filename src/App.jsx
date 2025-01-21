import BMILimitations from "./components/BMILimitations";
import BMIResultMean from "./components/BMIResultMean";
import GoodHabits from "./components/GoodHabits";
import Header from "./components/Header";
import patternCurvedLineLeft from "./images/pattern-curved-line-left.svg";
function App() {
  return (
    //  container
    <div className="relative mx-auto min-h-dvh max-w-[1440px] bg-white pb-[96px] lg:pb-[120px]">
      {/* pattern curved line right */}
      <img
        src={patternCurvedLineLeft}
        alt="pattern curved line left"
        className="absolute right-[167px] top-[749px] hidden lg:block"
      />
      {/* pattern curved line right */}
      <Header />
      <BMIResultMean />
      <GoodHabits />
      <BMILimitations />
    </div>
    // container
  );
}
export default App;
