import experience from "../assets/experience.png";

const Experience = () => {
  return (
    <div className="relative text-center px-96 mt-82">
      <div className="flex flex-col items-center">
        <div className="-mb-40">
          <div className="flex items-center justify-center gap-2 mt-32 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-lg font-medium">The Experience</h3>
          </div>
          <h1 className="font-arizona text-5xl mb-8 max-w-150">
            It's more than an appointment. It's professional care, designed
            around you.
          </h1>
          <a href="#" className="primary-cta text-lg">
            Learn More
          </a>
        </div>
      </div>

      <div className="scale-175 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 w-full h-full flex justify-center items-center">
        <img src={experience} className="object-cover" />
      </div>
    </div>
  );
};

export default Experience;
