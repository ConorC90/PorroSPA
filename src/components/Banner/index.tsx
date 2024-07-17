import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";

const MovingBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerWidth, setBannerWidth] = useState<number>(0);

  useEffect(() => {
    // Measure the width of the banner

    if (bannerRef.current) {
      setBannerWidth(bannerRef.current.scrollWidth); // using scrollWidth to include total width including overflow
    }
    console.log(bannerWidth);
    // Update the CSS variable --banner-width when the banner width changes
    document.documentElement.style.setProperty(
      "--banner-width",
      `${bannerWidth}px`
    );
  }, [bannerWidth]); // Rerun the effect when bannerWidth changes

  return (
    <div className="moving-banner">
      <span className="banner-content">
        Women's regristration is still open!
      </span>
    </div>
  );
};

export default MovingBanner;
