// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ABOUT } from "../constants/data";
// import { PALLET } from "../constants/data";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    const video = document.querySelector('video');
    
    if (video) {
      const setPlaybackSpeed = () => {
        video.playbackRate = 0.7;
      };
      
      // Wait for the video metadata to be loaded, then set the playback speed
      video.addEventListener('loadedmetadata', setPlaybackSpeed);

      // Clean up event listener when the component is unmounted
      return () => {
        video.removeEventListener('loadedmetadata', setPlaybackSpeed);
      };
    }
  }, []);

  
  return (
    <div className="w-full h-[100vh] box-border">
      <Navbar />
      <div className="w-full h-[100vh] box-border px-5 lg:px-10 pt-16 flex flex-col text-left">
        <div className="w-full  h-full">
          <h1 className="text-primary text-4xl font-medium mb-5">
            {ABOUT.title}
          </h1>
          <div className="w-full lg:h-[90%]"> 
            <div></div>
            <div className="w-full h-auto lg:h-[50%] text-primary text-center lg:text-left font-light text-xl lg:text-2xl lg:flex flex-col justify-center">
              <p className="w-full h-auto lg:h-[75%]">{ABOUT.description}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
