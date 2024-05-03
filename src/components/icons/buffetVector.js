import React from "react";

const buffetVector = ({ stroke = "", fill = "" }) => {
  return (
    <svg
      width="57"
      height="62"
      viewBox="0 0 57 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M54.895 19.7119C55.1662 19.7119 55.3696 19.8136 55.5052 20.0169C55.6408 20.2203 55.573 20.4576 55.3018 20.7288V40.0508C55.3018 40.8644 55.0306 41.339 54.4882 41.4746C54.3526 41.4746 54.1492 41.5085 53.878 41.5763C53.6068 41.6441 53.4035 41.678 53.2679 41.678C52.8611 41.678 52.3865 41.5424 51.8441 41.2712C49.8102 39.9153 47.5052 39.1017 44.9289 38.8305C44.2509 38.8305 43.4374 38.9661 42.4882 39.2373V59.3729H47.9797H48.1831C48.5899 59.3729 48.7933 59.6441 48.7933 60.1864C48.7933 60.5932 48.5221 60.7966 47.9797 60.7966H35.573H35.3696C34.9628 60.7966 34.7594 60.5254 34.7594 59.9831C34.7594 59.5763 35.0306 59.3729 35.573 59.3729H41.0645V39.8475C40.9289 39.8475 40.7255 39.9492 40.4543 40.1525C40.1831 40.3559 39.9119 40.5254 39.6408 40.661C37.878 42.017 35.9119 42.0847 33.7424 40.8644C32.2509 39.7797 30.3526 39.1017 28.0475 38.8305C26.0136 39.1017 24.1153 39.7797 22.3526 40.8644C20.1831 42.0847 18.1492 42.017 16.2509 40.661C15.4374 40.1186 14.8272 39.7797 14.4204 39.6441V59.5763H19.7085C20.2509 59.5763 20.5221 59.7797 20.5221 60.1864C20.5221 60.7288 20.2509 61 19.7085 61H7.50516H7.09838C6.6916 61 6.48821 60.7288 6.48821 60.1864C6.48821 59.7797 6.82719 59.5763 7.50516 59.5763H12.7933V39.0339C12.5221 38.8983 12.0475 38.8305 11.3696 38.8305C8.92889 39.1017 6.6238 39.9831 4.45431 41.4746C3.77634 41.8814 2.96279 41.8814 2.01363 41.4746C1.47126 41.2034 1.20007 40.7288 1.20007 40.0508V20.7288C1.20007 20.0508 1.47126 19.7119 2.01363 19.7119H4.45431C3.50516 18.8983 3.03058 17.8136 3.03058 16.4576V13.8136H2.01363C1.60685 13.8136 1.40346 13.5424 1.40346 13C1.40346 12.4576 1.60685 12.1864 2.01363 12.1864H3.03058V9.54237C3.03058 8.45763 3.47126 7.47458 4.35262 6.59322C5.23397 5.71186 6.28482 5.27119 7.50516 5.27119H20.7255V2.22034C20.7255 1.67797 20.9967 1.40678 21.5391 1.40678H34.7594C35.3018 1.40678 35.573 1.67797 35.573 2.22034V5.27119H48.1831C49.4035 5.27119 50.4204 5.71186 51.234 6.59322C52.0475 7.47458 52.4543 8.45763 52.4543 9.54237V12.3898H54.2848C54.6916 12.3898 54.895 12.5932 54.895 13C54.895 13.678 54.6916 14.017 54.2848 14.017H52.4543V16.4576C52.3187 17.9492 51.8441 19.0339 51.0306 19.7119H54.895ZM22.1492 2.83051V5.27119H33.9458V2.83051H22.1492ZM4.6577 9.54237V12.1864H51.0306V9.54237C51.0306 8.86441 50.7594 8.22034 50.217 7.61017C49.6746 7 48.9967 6.69492 48.1831 6.69492H7.50516C6.6916 6.69492 6.01363 7 5.47126 7.61017C4.92889 8.22034 4.6577 8.86441 4.6577 9.54237ZM51.0306 14.017H4.45431V16.8644C4.45431 17.5424 4.7255 18.1525 5.26787 18.6949C5.81024 19.2373 6.42041 19.5085 7.09838 19.5085H48.1831C48.9967 19.5085 49.6746 19.2373 50.217 18.6949C50.7594 18.1525 51.0306 17.5424 51.0306 16.8644V14.017ZM21.9458 39.6441C23.3018 38.6949 25.1323 37.9492 27.4374 37.4068V21.339H2.82719V40.0508L3.03058 40.2542C3.16617 40.3898 3.33567 40.4576 3.53906 40.4576C3.74245 40.4576 3.84414 40.3898 3.84414 40.2542C6.14923 38.6271 8.79329 37.678 11.7763 37.4068C13.6746 37.4068 15.6408 38.1525 17.6746 39.6441C19.0306 40.5932 20.4543 40.5932 21.9458 39.6441ZM54.2848 40.0508V21.339H28.8611V37.4068C31.1662 37.5424 33.2679 38.2881 35.1662 39.6441C36.6577 40.5932 38.0814 40.5932 39.4374 39.6441C41.4713 38.1525 43.4374 37.4068 45.3357 37.4068C47.9119 37.5424 50.556 38.4915 53.2679 40.2542C53.5391 40.5254 53.8102 40.5254 54.0814 40.2542C54.217 40.2542 54.2848 40.1864 54.2848 40.0508Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};

export default buffetVector;
