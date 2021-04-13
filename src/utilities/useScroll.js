import { useRef, useEffect, useState } from "react";

export const useScroll = () => {
  const [open, setOpen] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        element.current &&
        window.scrollY > element.current.getBoundingClientRect().bottom
      ) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY, element.current.getBoundingClientRect());
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { element, open };
};
