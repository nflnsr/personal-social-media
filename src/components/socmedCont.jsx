import React from "react";

const socmedCont = () => {
  return (
    <div className="py-2.5">
      <svg
        width="264"
        height="50"
        viewBox="0 0 264 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_177_26)">
          <rect x="4" width="256" height="42" rx="12" fill="#F3F4F6" />
        </g>
        <defs>
          <filter
            id="filter0_d_177_26"
            x="0"
            y="0"
            width="264"
            height="50"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_177_26"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_177_26"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default socmedCont;
