import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    // This function will be called with each resize
    const handleResize = () => setWidth(window.innerWidth);

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // When dismounting a component, clean the listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // An empty array of dependencies means that the effect will be triggered only once

  return width; // Return the current width of window
};

export default useWindowWidth;
