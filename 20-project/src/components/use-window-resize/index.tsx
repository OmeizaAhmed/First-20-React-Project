import { useLayoutEffect, useState } from "react";

export default function UseWindowResize() {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  function handleResize() {
    const height = window.innerHeight;
    const width = window.innerWidth;

    setWindowSize({ height, width });
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
