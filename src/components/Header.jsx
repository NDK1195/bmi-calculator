import BMIForm from "./BMIForm";
import logo from "../images/logo.svg";

function Header() {
  return (
    <>
      {/* hero background */}
      <div className="absolute left-0 top-0 h-[640px] w-full max-w-[978px] rounded-b-[35px] bg-gradient-1 lg:left-6 lg:h-[737px]"></div>
      {/* hero background */}
      <header className="relative mx-auto flex max-w-[1160px] flex-col gap-12 px-6 pt-8 md:gap-10 md:px-10 lg:flex-row lg:justify-between lg:pt-[75px] xl:px-0">
        <div className="text-center lg:max-w-[465px] lg:text-left">
          <img
            src={logo}
            alt="logo"
            className="mx-auto mb-6 w-10 md:mb-10 lg:mx-0 lg:mb-[127px] lg:w-16"
          />
          <h1 className="mb-6 px-4 text-5xl font-semibold leading-[110%] tracking-[-2.4px] text-gunmetal lg:mb-[35px] lg:px-0 lg:text-[64px] lg:tracking-[-3.2px]">
            Body Mass
            <br />
            Index Calculator
          </h1>
          <p className="leading-6 text-dark-electric-blue">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <BMIForm />
      </header>
    </>
  );
}
export default Header;
