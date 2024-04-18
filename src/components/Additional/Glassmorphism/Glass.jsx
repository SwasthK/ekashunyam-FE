import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "@/utils/variants";
import {
  motion,
  useScroll,
} from "framer-motion";

const Glass = () => {
  const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "center center"],
  // });
  // const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);
  // const top = useTransform(scrollYProgress, [0, 1], ["0px", "-900px"]);
  // const opacity = useTransform(scrollYProgress, [0, 1], ["0", "1"]);
  // const scale = useTransform(scrollYProgress, [0, 1], ["1.8", "1"]);
  // const letterSpacing = useTransform(scrollYProgress, [0, 1], ["", "+3.8rem"]);

  const navigate = useNavigate();
  return (
    <motion.div
      // ref={targetRef}
      // style={{ scale, opacity }}
      // transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="h-screen"
    >
      {/* <motion.div className="bg-image dark-overlay bg-center bg-cover bg-[url('/src/Public/Images/collections/3.jpg')]   flex items-center justify-center w-screen px-8 gap-8 py-7 h-full"> */}
      <motion.div className="bg-image dark-overlay flex items-center justify-center w-screen px-8 gap-8 py-7 h-full">
        {/* <div className=""> */}
        {/* <div className="bg-image dark-overlay bg-center bg-cover bg-[url('/src/Public/Images/Home/1.jpg')]  flex items-center justify-center w-screen px-8 gap-8 py-7 "> */}
        <div className="bg-opacity-0 shadow-xl backdrop-blur-3xl border-[0.8] border-opacity-20 rounded-lg w-[500px] p-6  flex items-center justify-evenly flex-col cursor-pointer sm:h-96 hover:backdrop-blur-md transition-all duration-500 xl:hover:w-2/5">
          <div>
            <h1 className="text-4xl md:text-5xl font-gilroy-light text-white hover:text-purple-200">
              The Showdown Begins April 29th !
            </h1>
            <h2 className="mt-2 sm:mt-6 mb-4 bg-[#fafb63] w-40 px-2 rounded-e-full">
              Don't Be Left Out!
            </h2>
          </div>
          <div className="w-full px-6">
            <button
              onClick={() => navigate("/register")}
              className="bg-white w-full py-3 md:text-3xl text-2xl sm:py-6  px-2 font-megatron rounded-md animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium  text-yellow-100 transition-colors hover:outline-none hover:ring-1 hover:ring-yellow-400 hover:ring-offset-1 hover:ring-offset-yellow-50 "
            >
              Register Now !
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Glass;
