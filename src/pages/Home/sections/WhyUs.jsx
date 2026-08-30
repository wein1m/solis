import illustration from "@/assets/why-us.png";

const WhyUs = () => {
  const contents = [
    {
      title: "Care from home",
      desc: "Talk with specialists without traveling to a clinic.",
    },
    {
      title: "Private & Secure",
      desc: "Your conversations and personal information remain protected.",
    },
    {
      title: "Flexible scheduling",
      desc: "Choose sessions that fit your daily routine.",
    },
  ];
  return (
    <div className="py-24 px-54">
      <div className="bg-[#fdf9e9] w-full rounded-4xl flex px-10 py-16 relative">
        <div className="flex flex-col w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="font-medium">Why People Choose Solis ?</h3>
          </div>
          <h1 className="text-5xl font-arizona">Healing begins with trust</h1>

          <div className="flex flex-col gap-4 mt-10">
            {contents.map((content, index) => (
              <div key={index} className="bg-white px-6 py-5 w-full rounded-xl">
                <h5 className="text-xl font-medium mb-1">{content.title}</h5>
                <span className="opcity-50 tracking-wide">{content.desc}</span>
              </div>
            ))}
          </div>

          <div className="primary-cta w-fit mt-10">Am I a Candidate?</div>
        </div>

        <div className="absolute scale-125 top-0 right-30">
          <img src={illustration} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
