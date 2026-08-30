import img from "@/assets/intro.jpg";

const Intro = () => {
  return (
    <div className="relative text-center mt-16 px-64 pb-24 h-full w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h3 className="text-lg font-medium">About Solis</h3>
        </div>
        <h1 className="font-arizona text-6xl mb-8 max-w-150">
          Mental Wellness, <br />
          Made Easier.
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center max-w-5xl">
        <p className="text-lg tracking-wide text-black/80">
          Solis is an online counseling platform created to make professional
          mental wellness support feel more accessible and comfortable. Through
          private online sessions, Solis gives people a space to talk openly,
          reflect on what they're experiencing, and receive guidance from the
          comfort of home.
        </p>
        <a href="#" className="primary-cta w-fit">Book an Appointment</a>
      </div>

      <img src={img} className="rounded-3xl mt-16" />
    </div>
  );
};

export default Intro;
