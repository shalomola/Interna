import { useEffect } from "react";
import video from "../../assets/internavid.mp4";
import logo from "../../assets/Interna.png";

const Video = () => {

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
    <div className="relative w-full h-[100vh] p-3 lg:p-10 box-border ">
        <div className="relative w-full h-full border">
          <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ userSelect: 'none' }}
          ></video>
          <div className="absolute bottom-5 right-5 w-20">
            <img src={logo} alt="logo" className="w-14 lg:w-20" />
          </div>
        </div>
    </div>
  )
}

export default Video