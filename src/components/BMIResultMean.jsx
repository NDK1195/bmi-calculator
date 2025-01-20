import imageManEating from "../images/image-man-eating.webp";
function BMIResultMean() {
  return (
    <section className="relative mx-auto mt-[72px] max-w-[1160px] md:mt-[96px] lg:mt-[151px]">
      <div className="flex flex-col gap-12 md:flex-row md:justify-end lg:justify-between xl:gap-0">
        <img
          src={imageManEating}
          alt="image man eating"
          className="md:absolute md:-left-[74px] md:top-0 md:max-w-[435px] lg:static lg:max-w-[564px]"
        />
        <div className="w-full px-6 md:mr-[43px] md:mt-[35px] md:max-w-[331px] md:px-0 lg:mt-[184px] lg:max-w-[465px]">
          <h2 className="mb-8 text-[32px] font-semibold leading-[110%] tracking-[-1.6px] text-gunmetal lg:mb-[35px] lg:text-[48px] lg:tracking-[-2.4px]">
            What your BMI result means
          </h2>
          <p className="leading-[150%] text-dark-electric-blue">
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy
            weight.&apos; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </div>
    </section>
  );
}
export default BMIResultMean;
