import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Satyan Rajmani",
      role: "Chair Person, Crt Bionics Australia",
      feedback:
        "Siddhant has a rare ability to deeply understand system internals and translate that into scalable backend architecture. Working with him improved our deployment cycle and backend efficiency significantly.",
    },
    {
      name: "Sushant Kant",
      role: "CTO, Crt Bionics India",
      feedback:
        "Reliable, fast, and always thinking ahead. Siddhant’s approach to problem solving and clean code made a real impact on our platform performance and stability.",
    },
  ];
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black pb-10">
        What People Says About Working With Me
        <span className="text-gray-500">.</span>
      </h1>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-[100rem]">
          <BiSolidQuoteLeft className="text-8xl text-gray-500" />
          <div className="flex justify-around items-center gap-2 w-full">
            <AiOutlineArrowLeft className=" flex-1 text-2xl text-gray-500" />
            <div className="flex-5 text-gray-500 p-1 bg-gray-300 relative w-full rounded-3xl">
              <div className="absolute top-0 left-0 bg-gray-500 w-[10%] h-full z-10 rounded-3xl">
                {" "}
              </div>
            </div>
            <AiOutlineArrowRight className=" flex-1 text-2xl text-gray-500" />
          </div>
          <div className="flex flex-col gap-4"></div>
        </div>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition mb-4 w-[100rem]"
          >
            <h2 className="text-2xl font-bold text-black mb-2">
              {testimonial.name}
            </h2>
            <p className="text-gray-700 text-lg">{testimonial.feedback}</p>
            <p className="mt-2 text-sm text-gray-600 italic">
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
