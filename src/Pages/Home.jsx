import { useState } from "react";
import { Text } from "../components/UI/Text";
import toast from "react-hot-toast";
import { Navbar } from "../components/UI/NavBar";
import { About } from "../components/UI/About";
import { Footer } from "../components/UI/Footer";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { Projects } from "../components/UI/Projects";
import { LetsConnect } from "../components/UI/LetsConnect";
import { Testimonials } from "../components/UI/Testimonials";
import { motion } from "framer-motion";
const Home = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-white transition-colors p-10">
      <div className="h-[10%]">
        <Navbar />
      </div>
      <div className="h-[85%] w-full overflow-y-scroll relative">
        {/* Home */}
        <motion.div
          className="h-full lg:w-[50%] w-screen flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black pb-10 leading-tight">
            Code that matters<span className="text-gray-500">.</span>
            <br />
            Architecture that scales<span className="text-gray-500">.</span>
          </h1>

          <motion.h2
            className="text-gray-700 text-3xl font-semibold mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I’m Siddhant — a software engineer focused on building reliable,
            scalable systems.
          </motion.h2>

          <motion.p
            className="text-gray-600 text-xl font-normal mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I specialize in clean architecture, secure APIs, real-time
            infrastructure, and system-level automation — turning ideas into
            production-ready solutions.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <Projects />

        {/* Beyond Code */}
        <div className="h-full lg:w-[50%] w-screen flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black pb-10">
            Beyond Code
            <span className="text-gray-500">.</span>
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            I'm <span className="font-semibold text-black">Siddhant Kadam</span>{" "}
            — a software engineer who crafts more than just features. I design
            secure, scalable, and maintainable backend systems built to last.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            From building{" "}
            <span className="font-semibold">real-time systems</span> with
            WebSockets, RabbitMQ, and MQTT to designing{" "}
            <span className="font-semibold">OTA pipelines</span> on Linux
            devices and CI/CD flows with Docker — I go deep into the
            architecture that powers modern systems.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            I’m obsessed with <span className="font-semibold">learning</span>.
            Whether it's reading technical blogs, exploring system design
            strategies, or diving into backend architecture books — I love
            understanding how things really work.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed">
            For me, software isn’t just about shipping code — it's about
            building with{" "}
            <span className="font-semibold text-black">
              clarity, sustainability, and intent
            </span>
            .
          </p>
        </div>

        <Testimonials />

        <LetsConnect />

        <div className=" flex flex-col gap-2 fixed bottom-30 right-30">
          <div className="p-2 rounded-full border-2 border-gray-500 w-fit cursor-pointer">
            <FaAngleUp className="text-gray-500" size={20} />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-500 w-fit cursor-pointer">
            <FaAngleDown className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
