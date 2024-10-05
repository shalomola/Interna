// import { Link } from "react-router-dom";
import { HERO } from "../../constants/data";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-[100vh] box-border lg:px-10 overflow-hidden  lg:mt-24">
        <div className="relative w-full h-[100vh] lg:h-[90vh] box-border px-3 lg:px-10 pt-28 flex flex-col-reverse lg:flex lg:flex-row mb-10">
          <motion.div        
            initial={{ opacity: 1, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5, delay: 3 }}
            viewport={{ once: true }}
            className="hero-img lg:absolute top-0 left-0 lg:ml-10 w-full h-full lg:w-[45%] lg:h-[92%] box-border flex justify-end"
            style={{
              background: `url(${HERO.imgSrc}) no-repeat center bottom / cover`,
            }}
          >
            <motion.div
              className="absolute w-full h-full bg-white"
              initial={{ opacity: 1, height: "100%" }}
              whileInView={{ opacity: 1, height: "0%" }}
              transition={{ ease: "circInOut", duration: 1, delay: 3.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.div
            className="lg:absolute text-center top-0 left-[50%] -translate-x-[50%] lg:mr-10 w-full lg:w-[50%] h-[40vh] lg:h-[92%] mb-auto flex flex-col items-end"
            initial={window.innerWidth > 1024 ? { opacity: 1, left: "50%", translateX: "-50%", textAlign: "center" } : { opacity: 1, textAlign: "center" }}
            whileInView={{ opacity: 1, right: 0, translateX: 0, textAlign: "right" }}
            transition={{ ease: "backOut", duration: 1, delay: 2 }}
            viewport={{ once: true }}
            >
            <motion.h1
              className="lg:w-[100%] text-black text-sans font-medium text-4xl lg:text-7xl leading-none"
              initial={{ opacity: 0, y: "150%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
            Your Dream
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: "150%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-[100%] text-black text-sans font-medium text-4xl lg:text-7xl lg:mb-5 leading-none"
            >Our Expertise
            </motion.h1>
            <motion.p
              className="lg:w-[100%] mb-10 text-black font-light text-md lg:text-lg"
              initial={{ opacity: 0, y: "150%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {HERO.description}
            </motion.p>
            <motion.a
              className="hero-btn lg:absolute bottom-[0px] right-0 bg-black text-white px-4 py-1 lg:text-xl flex items-center"
              initial={{ opacity: 0, y: "150%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "backInOut", duration: 1, delay: 3.5 }}
              viewport={{ once: true }}
              href={"/contact"}
            >
              {HERO.buttonText}
              <GoArrowRight className=" arrow lg:w-8 lg:h-8 ml-2 hover:ml-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
