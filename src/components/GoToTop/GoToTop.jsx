import { useState, useEffect } from "react";
import { GoToBox } from "./GoToTop.styled";
import { HiOutlinePaperAirplane } from "react-icons/hi";

export const GoToTop = () => {
  const [isGoToVisible, setIsGoToVisible] = useState(false);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > 500) {
      setIsGoToVisible(true);
    } else if (pageYOffset < 499) {
      setIsGoToVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <GoToBox
      isGoToVisible={isGoToVisible}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <HiOutlinePaperAirplane />
    </GoToBox>
  );
};
