import Marquee from "../Marquee";
import { CONTACT, SOCIAL_MEDIA_LINKS } from "../../constants/data.tsx";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact">
      <div className="w-full h-[120vh] lg:h-[100vh] overflow-hidden lg:pt-16">
        <div className="h-[35%]">
          <Marquee />
        </div>
        <div className="relative h-[65%] w-full bg-black">
          <div className="absolute h-full w-full bg-transparent z-50 box-border px-3 lg:px-10 py-2 lg:py-3">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4  text-white">
              Contact Us
            </h1>
            <div className="w-full h-full lg:flex">
              <form className="lg:h-full lg:w-1/2 flex flex-col items-start z-40 box-border">
                <div className="w-full lg:w-full lg:flex justify-between">
                  <div className="lg:w-[48%] mb-4">
                    <label className="text-white text-sm leading-none">
                      Name
                    </label>
                    <input className="w-full bg-transparent text-sm text-gray-300 font-light focus:outline-none focus:border-primary leading-none" />
                    <hr />
                  </div>
                  <div className="lg:w-[48%] mb-4">
                    <label className="text-white text-sm leading-none">
                      Country
                    </label>
                    <input className="w-full bg-transparent text-sm text-gray-300 font-light focus:outline-none focus:border-primary leading-none" />
                    <hr />
                  </div>
                </div>
                <div className="lg:w-full">
                  <div className="lg:w-full mb-4">
                    <label className="text-white text-sm leading-none">
                      Email
                    </label>
                    <input className="w-full bg-transparent text-sm text-gray-300 font-light focus:outline-none focus:border-primary leading-none" />
                    <hr />
                  </div>
                  <div className="lg:w-full mb-4">
                    <label className="text-white text-sm leading-none">
                      What do you have to say?
                    </label>
                    <textarea
                      rows={6}
                      className="w-full bg-transparent text-sm text-gray-300 font-light focus:outline-none focus:border-primary leading-none"
                    />
                    <hr/>
                  </div>
                </div>
                <Link
                  className="hero-btn bg-white text-black px-5 py-1 lg:text-lg flex items-center font-semibold"
                  to={"/portfolio"}
                >
                  Send
                </Link>
              </form>
              <div className="lg:w-1/2 lg:h-full flex flex-col items-end">
                <div className="text-right">
                  <p className="text-right text-sm lg:text-xl text-white">
                    Interested in Working Together?
                  </p>
                  <p className="text-white mt-2 text-sm lg:text-xl font-light">
                  123 Main St, <br /> White City, <br /> Angel State, <br /> 900100
                  </p>
                  <p className="text-right text-sm font-light text-white lg:pt-3 lg:text-xl mt-2 lg:mt-0">
                    {CONTACT.email}
                  </p>
                  <p className="text-right text-sm font-light text-white lg:pb-6 lg:text-xl mt-2 lg:mt-0">
                    {CONTACT.phone}
                  </p>
                </div>
                <div className="text-white flex mt-3 lg:mt-0">
                  {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <img
            src={CONTACT.imgSrc}
            alt=""
            className="absolute bottom-0 right-0 z-30 opacity-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
