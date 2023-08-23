import { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const smoothScroll = () => {
    $('body,html').animate({
        scrollTop:0
    },1000)
  };
  return (
    <>
      {scroll && (
        <div className="scroll-to-top shadow-sm" onClick={smoothScroll}>
          <i className="fas fa-chevron-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
