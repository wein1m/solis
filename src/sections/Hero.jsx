import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="flex pt-0 pb-24 px-52 w-full h-[90vh] gap-12">
      <div className="w-1/2 h-full">
        <img src={heroImg} className="w-full h-full object-cover rounded-3xl" />
      </div>

      <div className="w-1/2 flex flex-col justify-around">
        <h1 className="font-arizona text-7xl text-center">
          Bloom into the life you deserve with Solis
        </h1>
        <div className="font-figtree flex flex-col items-center text-center gap-6">
          <p>
            Professional tele-counseling and guided mental wellness programs,
            designed to help you manage daily stress, overcome burnout, and
            prioritize your well-being from the comfort of your home.
          </p>
          <a href="#" className="primary-cta">
            Schedule a consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
