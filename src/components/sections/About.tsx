import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { ABOUT } from "../../constants/data";
import { motion } from "framer-motion";

const About = () => {

  return (
    <div className="w-full h-[120vh] lg:h-[100vh] box-border lg:pt-16 lg:pb-10 px-3 mt-10 lg:px-10 mb-10">
      <div className="w-full h-full lg:flex justify-between">
        <div className="relative h-[35%] mb-5 flex flex-col items-end lg:w-[40%] lg:h-full">
          <p className="text-black text-md lg:text-lg text-left mb-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere mauris at rutrum tincidunt. Aliquam erat volutpat. Fusce
            quis diam nisl. 
            <br />
            Nullam id porttitor nisl. Nunc euismod lectus
            facilisis blandi t posuere. Aliquam maximus massa sit amet elementum
            dignissim. In hac habitasse platea dictumst. Pellentesque quis
            dapibus nisi. Cras faucibus tortor id diam blandit, eu finibus eros
            hendrerit.
          </p>
          <Link
            className="hero-btn absolute bottom-0 left-0 bg-black text-white px-4 py-1 lg:text-xl flex items-center"
            to={"/portfolio"}
          >
            {ABOUT.buttonText}
            <GoArrowRight className=" arrow lg:w-8 lg:h-8 ml-2 hover:ml-5" />
          </Link>
        </div>
        <div className="w-full flex flex-col justify-between lg:w-[58%] h-[60%] lg:h-full lg:flex lg:flex-row lg:justify-between">
          <div 
            className="relative bg-slate-500 w-full h-[55%] lg:h-full lg:w-[43%] overflow-hidden"
            style={{
              background: `url(${ABOUT.image1}) no-repeat center center / cover`,
            }}
          >
            <motion.div 
              className="absolute w-full h-full bg-white z-10"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: "-100%" }}
              transition={{ ease: "circInOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              ></motion.div>
          </div>
          <div 
            className="relative bg-slate-500 w-full h-[43%] lg:h-full lg:w-[55%] overflow-hidden"
            style={{
              background: `url(${ABOUT.image2}) no-repeat center bottom / cover`,
            }}
          >
            <motion.div 
              className="absolute w-full h-full bg-white z-10"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: "100%" }}
              transition={{ ease: "circInOut", duration: 2, delay: 0 }}
              viewport={{ once: true }}
              ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
