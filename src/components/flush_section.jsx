import Image from "next/image";

const timelineSteps = [
  {
    week: "1 Week",
    image: "/Ellipse_1.png",
    description: "Get ready! Longer lashes are on the way.",
  },
  {
    week: "4 Weeks",
    image: "/Ellipse_2.png",
    description: "Your lashes look longer and you can feel they are healthier.",
  },
  {
    week: "8 Weeks",
    image: "/Ellipse_3.png",
    description:
      "People are noticing and love your lashes! Not only are they longer but thicker too, keep going!",
  },
  {
    week: "12 Weeks",
    image: "/Ellipse_4.png",
    description:
      "Your lashes have reached their full potential and your look has completely changed!",
  },
];

export default function Flush() {
  return (
    <section className="relative bg-pink-50 py-16 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-4 left-8 text-pink-300 hidden lg:block">
        <svg
          width="100"
          height="112"
          viewBox="0 0 288 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_112_1156)">
            <path
              d="M285.172 278.408C266.804 285.976 252.171 300.606 244.602 318.97C237.033 300.606 222.4 285.976 204.032 278.408C222.4 270.841 237.033 256.21 244.602 237.846C252.171 256.21 266.804 270.841 285.172 278.408Z"
              stroke="#FF6D83"
              strokeWidth="5.04641"
            ></path>
            <path
              d="M229.664 133.113C177.69 153.192 136.515 194.258 116.432 246.322C96.349 194.359 55.2747 153.192 3.20006 133.113C55.1737 113.034 96.349 71.9677 116.432 19.9035C136.515 71.9677 177.589 113.034 229.664 133.113Z"
              stroke="#FF6D83"
              strokeWidth="5.04641"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_112_1156">
              <rect
                width="287.626"
                height="304.717"
                fill="white"
                transform="matrix(-1 0 0 -1 288 321.795)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-2 right-4 text-pink-300 hidden sm:block">
        <svg
          width="100"
          height="112"
          viewBox="0 0 288 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_112_1156)">
            <path
              d="M285.172 278.408C266.804 285.976 252.171 300.606 244.602 318.97C237.033 300.606 222.4 285.976 204.032 278.408C222.4 270.841 237.033 256.21 244.602 237.846C252.171 256.21 266.804 270.841 285.172 278.408Z"
              stroke="#FF6D83"
              strokeWidth="5.04641"
            ></path>
            <path
              d="M229.664 133.113C177.69 153.192 136.515 194.258 116.432 246.322C96.349 194.359 55.2747 153.192 3.20006 133.113C55.1737 113.034 96.349 71.9677 116.432 19.9035C136.515 71.9677 177.589 113.034 229.664 133.113Z"
              stroke="#FF6D83"
              strokeWidth="5.04641"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_112_1156">
              <rect
                width="287.626"
                height="304.717"
                fill="white"
                transform="matrix(-1 0 0 -1 288 321.795)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Noticeable Results in Less <br /> than 4 Weeks
          </h2>

          <p className="text-black max-w-3xl text-base mx-auto">
            Experience natural lashes reach their full growth potential by
            committing to our 3 month treatment, while seeing results early on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-bottom-to-top opacity-0 animation-delay"
              style={{ animationDelay: `${index * 200}ms` }} // Adds a delay for staggered animations
            >
              <div className="relative mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-200">
                  <Image
                    src={step.image}
                    alt={`Results after ${step.week}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-2">
                {step.week}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
