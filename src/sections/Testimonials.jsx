import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="mt-64 pt-44 pb-14 px-64 bg-bg-secondary flex flex-col items-center gap-16">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="font-arizona text-5xl">Read Google Reviews</h1>
        <div className="flex flex-row gap-4 items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/69bbdab2205c5264ac7760da_Frame.svg"
            loading="lazy"
            alt=""
          />

          <div className="w-0.5 h-6 bg-gray-500/50" />

          <div class="flex flex-col">
            <div class="flex flex-row gap-2">
              <span>4.9</span>
              <img src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/69bbdbc986fea61619bd2902_star.svg" />
            </div>
            <div>based on 108 reviews</div>
          </div>
        </div>
      </div>

      <div className="columns-3 w-full gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            message={testimonial.message}
            author={testimonial.author}
          />
        ))}
      </div>

      <div className="bg-linear-to-t from-[45%] from-bg-secondary to-transparent -mt-60 w-full h-full pt-56 flex justify-center">
        <a href="#" className="px-10 py-2 border rounded-full hover:cursor-pointer hover:bg-black/5">Read More</a>
      </div>
    </div>
  );
};

const testimonials = [
  {
    message:
      "The staff was incredibly kind and welcoming. I felt comfortable from the moment I walked through the door.",
    author: "Sarah Mitchell",
  },
  {
    message:
      "I have been to several clinics before, but KlearMind immediately felt different. The environment is warm and relaxing, and the staff actually takes the time to listen instead of making you feel like just another appointment.",
    author: "Olivia Bennett",
  },
  {
    message:
      "From scheduling my first appointment to walking out of the clinic, everyone I interacted with was helpful and thoughtful. I always felt like my questions were taken seriously.",
    author: "Sophia Williams",
  },
  {
    message:
      "The team at KlearMind made me feel completely at ease. They were patient, attentive, and never made me feel uncomfortable asking questions.",
    author: "Ava Martinez",
  },
  {
    message:
      "I was honestly nervous before my first visit, but those nerves disappeared almost immediately. The staff greeted me warmly, explained what to expect, and created such a relaxed environment that I felt completely comfortable throughout the appointment.",
    author: "Lucas Anderson",
  },
  {
    message:
      "What stood out to me most was how personal everything felt. The staff remembered little details from my previous visit, checked in with me throughout the appointment, and made sure I understood everything before moving forward. That level of care is something I really value.",
    author: "Ethan Parker",
  },
  {
    message:
      "Very professional and caring.",
    author: "Isabella Moore",
  },
  {
    message:
      "I have nothing but good things to say about my experience here. The clinic itself is comfortable and inviting, but it is really the people who make the biggest difference. Everyone was friendly without ever feeling overwhelming, and I left feeling genuinely cared for.",
    author: "Benjamin Clark",
  },
  {
    message:
      "The whole process was much simpler than I expected. Communication was clear, the staff was friendly, and I always knew what was happening next.",
    author: "Charlotte Lewis",
  },
];

export default Testimonials;
