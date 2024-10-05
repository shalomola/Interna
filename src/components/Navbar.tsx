import Navlinks from "./Navlink";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants/data.tsx"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // console.log(toggleMenu);
  console.log(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="w-full bg-white flex justify-between items-center z-30 fixed top-0 left-0 box-border py-2 px-3 lg:px-10">
      <h1 className="text-black text-xl font-semibold">Interna</h1>
      <div className="z-40">
        {window.innerWidth > 0 ? (
          <button
            className="flex items-center justify-center text-primary px-2 py-2 rounded-3xl"
            onClick={toggleMenu}
          >
            {isOpen ? (
                    <FaTimes className="text-primary h-5 w-5" />
                ) : (
                    <FaBars className="text-primary h-5 w-5" />
                )}
          </button>
        ) : (
          <ul className="list-none">
            {LINKS.map((link) => (
              <Navlinks 
                key={link.id}
                name={link.name} 
                to={link.id} />
            ))}
          </ul>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-30 flex flex-col justify-center items-center bg-white text-black"
          >
            <ul
              className="space-y-6 text-3xl"
            >
              {LINKS.map((link) => (
                <motion.li 
                key={link.id}
                variants={linkVariants}
                >
                  <NavLink 
                  to={link.id} 
                  onClick={toggleMenu}
                  rel="noopener noreferrer"
                  className="text-5xl font-light uppercase tracking-wide hover:text-gray-500 lg:text-9xl">
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
