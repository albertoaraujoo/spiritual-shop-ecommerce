import React from "react";

export const Logo = () => {
  return (
    <svg
      width={120}
      height={46}
      viewBox="0 0 110 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[46px] w-[120px]"
    >
      {/* Modern fashion icon - Abstract clothing/fabric waves */}
      <path
        d="M4 18c0-6 4-10 10-10s10 4 10 10c0 6-4 10-10 10S4 24 4 18z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 18c2-3 6-3 8 0s6 3 8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 14c2-2 6-2 8 0s6 2 8 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      <path
        d="M8 22c2 2 6 2 8 0s6-2 8 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />

      {/* Text with modern typography */}
      <text
        x="36"
        y="14"
        fontSize="13"
        fontWeight="300"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="1px"
      >
        SPIRITUAL
      </text>
      <text
        x="36"
        y="28"
        fontSize="9"
        fontWeight="600"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="3px"
      >
        SHOP
      </text>
    </svg>
  );
};

export default Logo;
