const About = () => {
  return (
    <div className="relative text-center py-64 px-96">
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-2 mt-32 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h3 className="text-lg font-medium">What is Solis?</h3>
        </div>
        <h1 className="font-arizona text-5xl mb-8">
          {/* Professional tele-counseling and mental wellness, designed for your
          everyday life. */}
          Professional mental wellness guidance, accessible from the comfort and
          privacy of your home.
        </h1>
        <a href="#" className="primary-cta text-lg">
          Learn More
        </a>
      </div>

      <img
        src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68235d19001da11fe701c91c_sun.svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1"
      />
    </div>
  );
};

export default About;
