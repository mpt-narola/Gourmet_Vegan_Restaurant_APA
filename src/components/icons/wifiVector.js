import React from "react";

const wifiVector = ({ stroke = "", fill = "" }) => {
  return (
    <svg
      width="71"
      height="51"
      viewBox="0 0 71 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.96924 18.8342C22.1692 -3.61139 49.1026 -3.61139 69.3026 18.8342M15.4359 32.3008C27.5559 18.8342 43.7159 18.8342 55.8359 32.3008"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.636 49.1342C37.4953 49.1342 39.0026 47.6269 39.0026 45.7675C39.0026 43.9082 37.4953 42.4009 35.636 42.4009C33.7766 42.4009 32.2693 43.9082 32.2693 45.7675C32.2693 47.6269 33.7766 49.1342 35.636 49.1342Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default wifiVector;
