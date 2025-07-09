import { useState } from "react";
import { Text } from "../components/UI/Text";
import toast from "react-hot-toast";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="h-[100dvh] overflow-auto p-2 bg-gradient-to-l from-gray-200 to-gray-400 dark:from-[#bfd1e2] dark:to-[#d4d4d4] transition-colors">
      <div className="h-[90%] p-10 bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg">
        <nav className="flex justify-between items-center  py-4">
          <div className="flex gap-4 items-center">
            <Text content="siddhantkadma.network@gmail.com" />
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  "siddhantkadma.network@gmail.com"
                );
                toast.success("Copied to clipboard!", {
                  duration: 2000,
                  position: "bottom-center",
                  icon: false,
                  style: {
                    background: "#bfd1e2",
                    color: "#fff",
                    fontSize: "16px",
                    backdropFilter: "blur(10px)",
                    padding: "5px 5px",
                    borderRadius: "8px",
                    border:
                      "color-mix(in oklab, var(--color-white) /* #fff = #ffffff */ 30%, transparent)",
                  },
                });
                setIsDark(!isDark);
              }}
              className="bg-white text-black px-4 py-2 rounded-2xl cursor-pointer"
            >
              Copy
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-2xl">
              CV
            </button>
          </div>
          <div className="text-black flex gap-1">
            <Text content="LinkedIn" /> / <Text content="Twitter" />
          </div>
        </nav>
        <section className="mt-12 flex flex-col justify-center items-left">
          <h1 className="text-5xl font-extrabold text-gray-700 pb-10">
            Code that matters.
            <br /> Architecture that scales.
          </h1>
          <div className="max-w-3xl">
            <hr className=" border-gray-600 border-2" />
            <h2 className="text-gray-600 text-xl font-semibold ">
              Solving real-world problems with clean architecture, secure
              backends, and efficient systems that are built to last. Driven by
              purpose, refined through execution, and focused on impact.
            </h2>
            <h3 className="text-black font-extrabold">- Siddhant</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
