import patternCurvedLineRight from "../images/pattern-curved-line-right.svg";

function BMILimitations() {
  return (
    <section className="relative mx-auto mt-[72px] max-w-[1160px] pl-[19px] pr-[29px] md:mt-[96px] md:pl-[39px] md:pr-[43px] lg:mt-[120px] xl:px-0">
      {/* pattern curved line left */}
      <img
        src={patternCurvedLineRight}
        alt="pattern curved line right"
        className="absolute left-[165px] top-[251px] hidden lg:block"
      />
      {/* pattern curved line left */}

      <div className="mb-14 flex flex-col items-center gap-8 text-center lg:mb-0 lg:items-start lg:gap-[35px] lg:text-left">
        <h2 className="text-[32px] font-semibold leading-[110%] tracking-[-1.6px] text-gunmetal lg:text-[48px] lg:tracking-[-2.4px]">
          Limitations of BMI
        </h2>
        <p className="leading-[150%] text-dark-electric-blue lg:max-w-[550px]">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <div className="grid max-w-[961px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:absolute lg:right-0 lg:top-0 lg:gap-8 lg:pb-[120px]">
        {/* gender */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-box md:p-8 lg:relative lg:right-[99px] lg:col-start-2 lg:col-end-3 lg:max-w-[365px]">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#F24E1E"
                d="M26 3.25h-5a.75.75 0 1 0 0 1.5h3.19l-3.75 3.742a7.75 7.75 0 1 0-6.19 13.22v2.538H11a.75.75 0 1 0 0 1.5h3.25V29a.75.75 0 1 0 1.5 0v-3.25H19a.75.75 0 1 0 0-1.5h-3.25v-2.538A7.75 7.75 0 0 0 21.41 9.65l3.84-3.84V9a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-.75-.75Zm-11 17A6.25 6.25 0 1 1 21.25 14 6.257 6.257 0 0 1 15 20.25Z"
              />
            </svg>
            <h3 className="text-xl font-semibold leading-none tracking-[-1px] text-gunmetal">
              Gender
            </h3>
          </div>
          <p className="leading-[150%] text-dark-electric-blue">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child&apos;s age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        {/* gender */}

        {/* age */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-box md:p-8 lg:max-w-[365px]">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#22C1C1"
                d="M28.75 14A2.75 2.75 0 0 0 26 11.25h-9.25V9.675a3.756 3.756 0 0 0 3-3.675c0-3.362-3.198-5.534-3.334-5.625a.75.75 0 0 0-.832 0C15.448.466 12.25 2.638 12.25 6a3.756 3.756 0 0 0 3 3.675v1.575H6A2.75 2.75 0 0 0 3.25 14v2.916c0 1.066.352 2.1 1 2.947V25A2.75 2.75 0 0 0 7 27.75h18A2.75 2.75 0 0 0 27.75 25v-5.137a4.85 4.85 0 0 0 1-2.947V14Zm-15-8c0-1.925 1.5-3.426 2.25-4.055.75.625 2.25 2.125 2.25 4.055a2.25 2.25 0 0 1-4.5 0Zm-9 8A1.25 1.25 0 0 1 6 12.75h20A1.25 1.25 0 0 1 27.25 14v2.916c0 1.79-1.416 3.285-3.157 3.333A3.25 3.25 0 0 1 20.75 17a.75.75 0 1 0-1.5 0 3.25 3.25 0 1 1-6.5 0 .75.75 0 1 0-1.5 0 3.251 3.251 0 0 1-3.343 3.25c-1.74-.049-3.157-1.544-3.157-3.334V14ZM25 26.25H7A1.25 1.25 0 0 1 5.75 25v-3.836a4.6 4.6 0 0 0 2.117.586 4.726 4.726 0 0 0 3.446-1.345c.26-.254.49-.537.687-.843a4.75 4.75 0 0 0 8 0c.198.306.43.589.69.843A4.716 4.716 0 0 0 24 21.75h.134a4.6 4.6 0 0 0 2.116-.586V25A1.25 1.25 0 0 1 25 26.25Z"
              />
            </svg>
            <h3 className="text-xl font-semibold leading-none tracking-[-1px] text-gunmetal">
              Age
            </h3>
          </div>
          <p className="leading-[150%] text-dark-electric-blue">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        {/* age */}

        {/* muscle */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-box md:p-8 lg:max-w-[365px]">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#9747FF"
                d="M10.44 28h9.154C25.368 28 28 23.732 28 19.77a6.877 6.877 0 0 0-.68-2.677 6.836 6.836 0 0 0-1.678-2.188 7.96 7.96 0 0 0-5.336-2.216 7.924 7.924 0 0 0-3.752 1.188 7.99 7.99 0 0 0-2.73 2.852 932.84 932.84 0 0 1-1.615-3.254h1.697c.503-.031.98-.232 1.355-.57.376-.338.628-.793.715-1.292a2.707 2.707 0 0 0 .963-2.174c0-2.955-3.284-4.438-5.11-4.438-2.493-.059-3.216 1.763-3.863 3.393l-.028.073C7.534 9.509 4 18.748 4 21.554a6.558 6.558 0 0 0 1.844 4.588 6.25 6.25 0 0 0 4.596 1.856V28ZM9.43 9.06c.7-1.763 1.089-2.444 2.33-2.444h.055c1.195 0 3.52.996 3.52 2.824.021.184-.007.37-.082.539a1.5 1.5 0 0 0-.366-.35.76.76 0 0 0-.41-.139h-.426c-.415-.527-1.691-1.462-2.684-1.286l1.04 1.33h1.485l.215.516c.266.637.174.955.088 1.093a.447.447 0 0 1-.334.21H8.826l.495.65c.217.284.506.506.789.675.002.121.03.24.084.35l.222.447v.002c.47.948 1.56 3.144 2.145 4.316-.02.029-.04.059-.058.089l-2.32 3.793a.812.812 0 0 0 .264 1.11.797.797 0 0 0 1.103-.265l2.084-3.41a.999.999 0 0 0 .218.027c.082-.003.162-.016.24-.038l2.152 3.569a.803.803 0 0 0 1.101.271.806.806 0 0 0 .27-1.108l-2.376-3.94a1.659 1.659 0 0 0-.113-.163 6.328 6.328 0 0 1 2.142-2.399 6.272 6.272 0 0 1 3.037-1.027 6.353 6.353 0 0 1 4.249 1.784 5.31 5.31 0 0 1 1.843 3.684c-.001 3.293-2.105 6.616-6.803 6.616H10.44a4.692 4.692 0 0 1-3.454-1.372 4.917 4.917 0 0 1-1.381-3.445c0-2.13 2.764-9.758 3.826-12.509Z"
              />
            </svg>
            <h3 className="text-xl font-semibold leading-none tracking-[-1px] text-gunmetal">
              Muscle
            </h3>
          </div>
          <p className="leading-[150%] text-dark-electric-blue">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn&apos;t differentiate muscle from fat.
          </p>
        </div>
        {/* muscle */}

        {/* pregnancy */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-box md:p-8 lg:relative lg:right-[199px] lg:max-w-[365px]">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFC700"
                d="M11.5 17.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9-2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-1.4 5.615a5.875 5.875 0 0 1-6.2 0 .75.75 0 0 0-.8 1.27 7.375 7.375 0 0 0 7.8 0 .751.751 0 0 0-.8-1.27ZM28.75 16A12.75 12.75 0 1 1 16 3.25 12.765 12.765 0 0 1 28.75 16Zm-1.5 0A11.263 11.263 0 0 0 16.366 4.756C14.787 6.904 14.75 8.981 14.75 9a1.25 1.25 0 0 0 2.5 0 .75.75 0 1 1 1.5 0 2.75 2.75 0 1 1-5.5 0c0-.094.019-1.978 1.268-4.152A11.25 11.25 0 1 0 27.25 16Z"
              />
            </svg>
            <h3 className="text-xl font-semibold leading-none tracking-[-1px] text-gunmetal">
              Pregnancy
            </h3>
          </div>
          <p className="leading-[150%] text-dark-electric-blue">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        {/* pregnancy */}

        {/* race */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-box md:relative md:-right-1/2 md:p-8 lg:right-[199px] lg:max-w-[365px]">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="#F21E84"
                d="M16 8.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm0-6a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm11.11 14.177-5.651-6.407a3.75 3.75 0 0 0-2.813-1.27h-5.292a3.75 3.75 0 0 0-2.813 1.269L4.89 16.927a2.25 2.25 0 0 0 3.168 3.198l2.638-2.116-2.266 8.606a2.25 2.25 0 0 0 4.094 1.868L16 22.5l3.476 5.989a2.25 2.25 0 0 0 4.094-1.868l-2.266-8.608 2.639 2.112a2.25 2.25 0 0 0 3.167-3.195v-.003Zm-1.079 2.103a.75.75 0 0 1-1.061 0 .523.523 0 0 0-.061-.055l-4.439-3.56a.75.75 0 0 0-1.195.775l2.859 10.866a.966.966 0 0 0 .046.125.75.75 0 1 1-1.36.634.542.542 0 0 0-.031-.06l-4.14-7.13a.75.75 0 0 0-1.298 0l-4.14 7.131a.534.534 0 0 0-.031.06.75.75 0 0 1-1.36-.633.954.954 0 0 0 .046-.125l2.859-10.867a.75.75 0 0 0-.316-.816.759.759 0 0 0-.409-.125.75.75 0 0 0-.47.165l-4.439 3.56a.523.523 0 0 0-.061.055.75.75 0 0 1-1.061-1.061L6 17.935l5.665-6.424a2.25 2.25 0 0 1 1.688-.761h5.292a2.25 2.25 0 0 1 1.688.761L26 17.935l.032.034a.748.748 0 0 1 0 1.061Z"
              />
            </svg>
            <h3 className="text-xl font-semibold leading-none tracking-[-1px] text-gunmetal">
              Race
            </h3>
          </div>
          <p className="leading-[150%] text-dark-electric-blue">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
        {/* race */}
      </div>
    </section>
  );
}
export default BMILimitations;
