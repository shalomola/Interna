import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { PROJECTS } from "../constants/data";

const Portfolio = () => {
  return (
    <div className="w-full h-[100vh] box-border">
      <Navbar />
      <div className="w-full h-[100vh] box-border px-5 lg:px-10 pt-16 flex flex-col text-left">
        <div className="w-full">
          <h1 className="text-black text-4xl font-medium mb-5">
            Our Portfolio
          </h1>
        </div>
        <div className="projects columns-1 gap-x-1 mx-auto max-w-7xl md:columns-3 lg:columns-4 lg:overflow-hidden lg:overflow-y-scroll">
          {PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              href='#'
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute z-5 bottom-2 left-2 mt-2 text-white">
                  <h3 className="text-xs lg:text-md tracking-wider bg-black px-3 py-1">
                    Project
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
