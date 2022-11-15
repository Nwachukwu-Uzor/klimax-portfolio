import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/loading.module.css";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((old) => {
        if (old >= 100) {
          navigate("/projects");
        }
        return old + 10;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <section className={`${styles.loading} flex items-center justify-center`}>
      <div className="flex flex-col gap-4 items-center text-white w-[90%] mx-auto">
        <motion.h1
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="text-3xl lg:text-5xl font-bold"
        >
          Fuel for thought
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg"
        >
          Just one small positive thought in the morning can change your whole
          day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[rgba(255,255,255,0.1)] w-[70%] max-w-[350px] mx-auto h-[35px] relative flex items-center justify-center rounded-[5px]"
        >
          <div
            className={` absolute top-0 bottom-0 left-0 z-10 bg-white transition-all duration-300`}
            style={{
              width: `${percentage}%`,
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              borderTopRightRadius: percentage === 100 ? "5px" : "0px",
              borderBottomRightRadius: percentage === 100 ? "5px" : "0px",
            }}
          ></div>
          <span className="text-black font-bold absolute z-20">
            Loading {percentage}%
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Loading;
