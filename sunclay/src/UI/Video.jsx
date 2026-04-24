import React from "react";

function Video({ size, children }) {
  const Videostyle = {
    borderRadius: "4px",
    border: "none",
    width: "105%",
    // height: size || "150%",
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
  };
  return (
    // muted
    <video style={Videostyle} autoPlay loop playsInline muted>
      {children}
    </video>
  );
}

export default Video;

// import React, { useRef, useEffect } from 'react';

// const LoopingVideo = ({ src }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       // Alternative approach: listen for the 'ended' event and manually restart
//       const handleEnded = () => {
//         videoRef.current.currentTime = 0;
//         videoRef.current.play();
//       };
//       videoRef.current.addEventListener('ended', handleEnded);

//       // Ensure video is muted and plays inline
//       videoRef.current.defaultMuted = true;

//       return () => {
//         videoRef.current.removeEventListener('ended', handleEnded);
//       };
//     }
//   }, [src]);

//   return (
//     <video ref={videoRef} autoPlay muted loop playsInline width="100%">
//       <source src={src} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// };
