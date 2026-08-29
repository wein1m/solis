import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = (index) => {
    setIsOpen(index === isOpen ? undefined : index);
  };

  return (
    <div className="flex justify-between px-52 py-24 w-full flex-row gap-16">
      <div className="flex flex-col w-[40%]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h3 className="text-lg font-medium">FAQs</h3>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl tracking-wide leading-[1.15]">
            What our customers want to know
          </h1>
          <div className="flex flex-row gap-4">
            <a href="#" className="primary-cta rounded-full! px-12!">
              Book an Appointment
            </a>
            <a
              href="#"
              className="primary-cta bg-transparent! border text-black! rounded-full! px-12!"
            >
              Details
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[60%]">
        <div className="divide-y divide-black-/50">
          {faqs.map((faq, index) => (
            <div
              onClick={() => handleClick(index)}
              key={index}
              className="py-8 flex justify-between hover:cursor-pointer transition-all"
            >
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row w-full justify-between items-center">
                  <h3 className="text-3xl tracking-tight">{faq.question}</h3>
                  <svg
                    className={`size-8 ${index == isOpen && "-scale-y-100"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="#000000"
                      d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"
                    />
                  </svg>
                </div>

                <div
                  className={`grid transition-all
                    ${index === isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <span className="text-lg tracking-wide text-black/80">
                      {faq.answer}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How does online counseling with Solis work?",
    answer:
      "Solis connects you with a professional counselor through secure online sessions. After choosing a time that works for you, you can meet with your counselor privately from the comfort of your home.",
  },
  {
    question: "How do I find the right counselor for me?",
    answer:
      "You can explore our available professionals based on their experience and areas of focus. Solis can also help match you with a counselor whose approach and expertise align with your needs.",
  },
  {
    question: "Are my counseling sessions private?",
    answer:
      "Your privacy is an important part of the Solis experience. Sessions are conducted through secure online communication, allowing you to speak openly with your counselor from a private space of your choice.",
  },
  {
    question: "What can I talk about during a session?",
    answer:
      "There is no single topic you need to bring to counseling. You can talk about stress, relationships, emotions, personal challenges, or anything else affecting your wellbeing. Your counselor will help guide the conversation.",
  },
  {
    question: "Can I choose when to have my sessions?",
    answer:
      "Yes. Solis is designed to fit naturally into your everyday life. You can choose from available appointment times and select a schedule that works best for your routine and counseling needs.",
  },
];

export default FAQ;
