import prices from "@/assets/prices.jpg";

const Prices = () => {
  return (
    <div className="relative text-center px-64 mt-16 pb-24 h-full w-full">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mt-32 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h3 className="text-lg font-medium">Affordable, Accesible Care</h3>
        </div>
        <h1 className="font-arizona text-6xl mb-8 max-w-150">
          Care that fits your life
        </h1>
      </div>

      <div className="flex flex-row w-full justify-between gap-24 text-left mt-10">
        <div className="flex flex-col w-1/2">
          <div className="divide-y divide-black-/50">
            {plans.map((plan, index) => (
              <div key={index} className="py-8 flex justify-between">
                <div className="flex flex-col gap-4 max-w-[60%]">
                  <h3 className="text-3xl tracking-tight">{plan.title}</h3>
                  <span className="text-lg tracking-wide text-black/80">
                    {plan.desc}
                  </span>
                </div>
                <h5 className="text-4xl">${plan.price}</h5>
              </div>
            ))}
          </div>
          <a href="#" className="primary-cta w-fit mt-4">
            Book an Appointment
          </a>
        </div>

        <div className="w-1/2 rounded-4xl">
            <img src={prices} className="object-cover w-full h-full rounded-4xl" />
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    title: "Essential",
    desc: "A simple way to get professional support from the comfort of home.",
    price: "65",
  },
  {
    title: "Priority",
    desc: "More flexibility for those who want faster access to support.",
    price: "85",
  },
  {
    title: "Premium",
    desc: "More personalized support with greater scheduling flexibility.",
    price: "110",
  },
  {
    title: "Private",
    desc: "Our highest level of access for those who value maximum flexibility.",
    price: "140",
  },
];

export default Prices;
