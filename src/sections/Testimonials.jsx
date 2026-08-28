import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="mt-64 pt-24 pb-14 px-64 bg-bg-secondary flex flex-col items-center gap-16">
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

      <div className="bg-linear-to-t from-[35%] from-bg-secondary to-transparent -mt-60 w-full h-full pt-48 flex justify-center">
        <a
          href="#"
          className="px-10 py-2 border rounded-full hover:cursor-pointer hover:bg-black/5"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const testimonials = [
  {
    message: "Solis made counseling feel simple and comfortable from home.",
    author: "Sarah Mitchell",
  },
  {
    message:
      "I never expected online counseling to feel this personal. My counselor listens carefully, understands what I need, and makes every session feel like a safe space where I can be completely honest.",
    author: "Olivia Bennett",
  },
  {
    message:
      "Booking my first session was quick and easy. I really appreciate being able to choose a time that fits my schedule and talk with my counselor from the privacy of my own home.",
    author: "Sophia Williams",
  },
  {
    message:
      "My counselor is patient, thoughtful, and easy to talk to. I never feel judged, and every session leaves me feeling a little more understood.",
    author: "Ava Martinez",
  },
  {
    message:
      "I was nervous about trying online counseling at first, but Solis made everything feel natural. Being able to talk from home helped me relax and open up much more easily than I expected.",
    author: "Lucas Anderson",
  },
  {
    message:
      "Finding a counselor through Solis was much easier than I expected. The process helped me find someone who felt like a good match, and having regular sessions from home has made it easier to stay consistent with my mental wellness.",
    author: "Ethan Parker",
  },
  {
    message: "Private, simple, and genuinely comforting.",
    author: "Isabella Moore",
  },
  {
    message:
      "I love how naturally Solis fits into my routine. I can have a counseling session without commuting or rearranging my entire day, which makes it much easier for me to prioritize my mental health.",
    author: "Benjamin Clark",
  },
  {
    message:
      "Solis gave me a comfortable place to talk openly about things I had been keeping to myself. My counselor listens without judgment and always makes me feel heard.",
    author: "Charlotte Lewis",
  },
];

export default Testimonials;
