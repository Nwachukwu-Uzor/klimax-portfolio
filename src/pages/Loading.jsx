import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/loading.module.css";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((old) => {
        if (old >= 100) {
          navigate("/home");
        }
        return old + 10;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className={`${styles.loading} flex items-center justify-center`}>
      <div className="flex flex-col gap-4 items-center text-white w-[90%] mx-auto">
        <h1 className="text-lg lg:text-5xl font-bold">Fuel for thought</h1>
        <p className="text-lg">
          Just one small positive thought in the morning can change your whole
          day.
        </p>
        <div className="bg-[rgba(255,255,255,0.1)] w-[70%] max-w-[350px] mx-auto h-[35px] relative flex items-center justify-center rounded-[5px]">
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
        </div>
      </div>
    </section>
  );
};

export default Loading;
