import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#f0e5e3] text-[#2c2625] pt-20 pb-12 px-6 sm:px-16 md:px-32 lg:px-52 overflow-hidden">
      {/* Decorative Botanical Flowers - Top Right */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-40 translate-x-12 -translate-y-8 select-none">
        <svg
          width="340"
          height="340"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#c8a89e]"
        >
          {/* Main Stems & Leaves */}
          <path
            d="M 150 290 Q 170 180 250 80"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 160 210 Q 110 160 80 120"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 180 150 Q 230 130 270 120"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Leaf 1 */}
          <path
            d="M 162 200 C 130 190 110 170 115 155 C 135 155 155 175 162 200 Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Leaf 2 */}
          <path
            d="M 182 145 C 210 130 235 125 240 138 C 225 150 198 152 182 145 Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* Flower 1 - Top Bloom */}
          <g transform="translate(250, 80)">
            <circle cx="0" cy="0" r="7" fill="#d49a87" fillOpacity="0.4" />
            <path
              d="M 0 -7 C -6 -20 6 -20 0 -7 Z
                 M 6 -3 C 18 -12 21 0 6 -3 Z
                 M 7 2 C 21 7 16 19 7 2 Z
                 M 3 6 C 9 20 -3 21 3 6 Z
                 M -4 6 C -13 18 -21 7 -4 6 Z
                 M -7 0 C -21 0 -18 -14 -7 0 Z
                 M -5 -5 C -17 -16 -6 -22 -5 -5 Z"
              fill="currentColor"
              fillOpacity="0.35"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </g>

          {/* Flower 2 - Middle Accent Bloom */}
          <g transform="translate(80, 120)">
            <circle cx="0" cy="0" r="5" fill="#d49a87" fillOpacity="0.5" />
            <path
              d="M 0 -5 C -5 -15 5 -15 0 -5 Z
                 M 5 -2 C 14 -9 17 0 5 -2 Z
                 M 5 2 C 16 5 12 15 5 2 Z
                 M 2 5 C 7 15 -2 16 2 5 Z
                 M -3 5 C -10 14 -16 5 -3 5 Z
                 M -5 0 C -16 0 -14 -10 -5 0 Z
                 M -4 -4 C -13 -12 -5 -17 -4 -4 Z"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </g>
        </svg>
      </div>

      {/* Decorative Botanical Flowers - Bottom Left */}
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-35 -translate-x-10 translate-y-10 select-none">
        <svg
          width="320"
          height="320"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#c8a89e]"
        >
          {/* Stems */}
          <path
            d="M 120 280 Q 140 150 70 50"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 130 180 Q 200 130 220 90"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Leaf Left */}
          <path
            d="M 115 220 C 70 210 50 180 65 170 C 85 180 105 200 115 220 Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* Organic Flower Bloom */}
          <g transform="translate(70, 50)">
            <circle cx="0" cy="0" r="6" fill="#d49a87" fillOpacity="0.4" />
            <ellipse
              cx="0"
              cy="-14"
              rx="5"
              ry="10"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <ellipse
              cx="12"
              cy="-7"
              rx="5"
              ry="10"
              transform="rotate(50 12 -7)"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <ellipse
              cx="14"
              cy="7"
              rx="5"
              ry="10"
              transform="rotate(110 14 7)"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <ellipse
              cx="3"
              cy="15"
              rx="5"
              ry="10"
              transform="rotate(160 3 15)"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <ellipse
              cx="-11"
              cy="9"
              rx="5"
              ry="10"
              transform="rotate(-130 -11 9)"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <ellipse
              cx="-13"
              cy="-5"
              rx="5"
              ry="10"
              transform="rotate(-60 -13 -5)"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 bg-bg-secondary/90 backdrop-blur-xs rounded-3xl p-8 md:p-12 mb-16 border border-[#e4d3cf] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-wider text-black/70 uppercase">
              Comfort & Privacy at Home
            </span>
          </div>
          <h2 className="font-arizona text-3xl md:text-4xl text-[#1f1b1a]">
            Begin your journey to a calmer, more balanced life
          </h2>
          <p className="text-base md:text-lg text-black/75 leading-relaxed">
            Professional tele-counseling designed to fit seamlessly into your
            daily routine with warm, confidential guidance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
          <a
            href="#booking"
            className="primary-cta text-center py-3.5 px-8 text-base shadow-sm hover:shadow-md transition-all"
          >
            Book a Consultation
          </a>
          <a
            href="#about"
            className="rounded-full border border-black/20 text-black px-7 py-3.5 text-center font-medium hover:bg-white/60 hover:border-black transition-all"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-black/10">
        <div className="lg:col-span-2 flex flex-col gap-5 pr-0 lg:pr-8">
          <div className="flex items-center gap-3">
            <img src={logo} className="object-cover h-14" />
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e8d5d1] text-black/70 font-medium">
              Tele-Counseling
            </span>
          </div>
          <p className="text-base text-black/75 leading-relaxed">
            Solis is a modern mental wellness platform offering professional,
            licensed tele-counseling. We believe mental health support should
            feel accessible, reassuring, and completely private from the comfort
            of your home.
          </p>
          <div className="flex flex-col gap-2 pt-2 text-sm text-black/70">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% Confidential & HIPAA-Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Verified & Licensed Professional Therapists</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Flexible Virtual Scheduling from Home</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-black tracking-wide">
            Explore
          </h3>
          <ul className="flex flex-col gap-2.5 text-base text-black/75">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About Solis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                The Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Therapists
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Pricing & Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-black tracking-wide">
            Services
          </h3>
          <ul className="flex flex-col gap-2.5 text-base text-black/75">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Individual Counseling
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Stress & Burnout Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Anxiety Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Guided Mindfulness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Couples Tele-Therapy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Personalized Care Plans
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-black tracking-wide">
            Wellness Updates
          </h3>
          <p className="text-sm text-black/75 leading-relaxed">
            Receive gentle mental wellness reflections, self-care notes, and
            updates directly to your inbox.
          </p>

          <div className="relative w-full">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 pr-24 rounded-full bg-white/80 border border-black/15 text-sm focus:outline-none focus:border-primary focus:bg-white text-black placeholder:text-black/40 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-4 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary-hover transition-colors"
            >
              Join
            </button>
          </div>

          <div className="pt-2 text-xs text-black/60">
            <p>Support: support@soliswellness.com</p>
            <p>Hours: Mon - Sat, 8:00 AM - 8:00 PM EST</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 my-8 p-4 rounded-2xl bg-[#e6d8d4]/70 border border-[#dbc6c0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/75">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="font-semibold text-primary shrink-0">
            Crisis Support:
          </span>
          <span>
            If you are in immediate distress or facing a medical crisis, please
            call or text <strong>988</strong> to reach the 24/7 Suicide & Crisis
            Lifeline.
          </span>
        </div>
        <a
          href="https://988lifeline.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium text-black/80 hover:text-primary shrink-0"
        >
          Learn More
        </a>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-black/60 pt-2">
        <p>
          © {new Date().getFullYear()} Solis Mental Wellness Inc. All rights
          reserved.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-black transition-colors">
            HIPAA Notice
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
