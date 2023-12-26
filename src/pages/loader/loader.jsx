import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant1 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
      strokeDasharray: 0,
      strokeDashoffset: 0,
    },
    visible: {
      pathLength: 1,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 1, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
        strokeDasharray: { duration: 1, ease: "linear" },
        strokeDashoffset: { duration: 1, ease: "linear" },
      },
    },
  };
  
  const iconVariant2 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
      strokeDasharray: 0,
      strokeDashoffset: 0,
    },
    visible: {
      pathLength: 1,
      fill: "rgb(72, 163, 198)",
      stroke: "rgb(72, 163, 198)",
      strokeWidth: 3,
      scale: 0,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 1, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
        strokeDasharray: { duration: 1, ease: "linear" },
        strokeDashoffset: { duration: 1, ease: "linear" },
      },
    },
  };
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 2000"
        style={{ width: "30vw", height: "30vw" }}
      >
        {/* First SVG path */}
        <motion.path
          d="M1704.66,1443.54h-187.35c-9.1,0-16.32-2.9-21.7-8.72c-5.38-5.81-8.06-12.89-8.06-21.2V561.98
          c0-8.3,2.68-15.38,8.06-21.2c5.38-5.81,12.6-8.73,21.7-8.73h187.35c8.26,0,15.3,2.92,21.08,8.73c5.8,5.82,8.7,12.9,8.7,21.2v851.64
          c0,8.31-2.9,15.39-8.7,21.2C1719.96,1440.64,1712.92,1443.54,1704.66,1443.54z"
          variants={iconVariant2}
          initial="hidden"
          animate="visible"
        />

        {/* Second SVG path */}
        <motion.path
          d="M1279.33,561.98v851.64c0,8.31-2.9,15.39-8.7,21.2c-5.78,5.82-12.82,8.72-21.08,8.72H1062.2
          c-8.28,0-15.32-2.9-21.1-8.72c-5.78-5.81-8.68-12.89-8.68-21.2v-401.51c0-8.3-3.76-12.89-11.25-13.72
          c-7.51-0.82-13.77,2.08-18.75,8.72l-210,337.91c-4.16,6.66-10.83,9.99-19.97,9.99c-9.19,0-16.27-3.32-21.28-9.99l-209.95-337.91
          c-4.18-6.64-10.03-9.54-17.51-8.72c-7.51,0.83-11.25,5.41-11.25,13.72v401.51c0,8.31-2.9,15.39-8.7,21.2
          c-5.78,5.82-12.82,8.72-21.08,8.72H295.34c-8.28,0-15.32-2.9-21.1-8.72c-5.78-5.81-8.68-12.89-8.68-21.2V561.98
          c0-8.3,2.9-15.38,8.7-21.2c5.78-5.81,12.82-8.73,21.08-8.73h173.71c8.26,0,16.96,2.49,26.06,7.48s15.72,10.82,19.84,17.46
          l240,351.63c5,6.66,10.85,9.99,17.51,9.99c6.66,0,12.07-3.32,16.23-9.99l240-351.63c4.96-6.64,12-12.46,21.08-17.46
          c9.1-4.99,17.8-7.48,26.08-7.48h173.71c8.26,0,15.28,2.92,21.08,8.73C1276.43,546.6,1279.33,553.68,1279.33,561.98z"
          variants={iconVariant1}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
