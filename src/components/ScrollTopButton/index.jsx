import { useEffect, useState } from "react";
import { Arrow } from "../../assets/icons/Arrow";

export const ScrollTopButton = () => {
  const [scrollPage, setScrollPage] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPage(window.scrollY);
    });
    if (scrollPage > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollPage]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
    onClick={scrollToTop}
      className={`fixed right-3 bottom-8 transition z-50 bg-slate-100 flex items-center justify-center rounded-full p-0.5 shadow-sm ${
        isVisible ? "scale-100" : "scale-0"
      }`}
    >
      <Arrow className="text-primaryViolet" />
    </button>
  );
};
