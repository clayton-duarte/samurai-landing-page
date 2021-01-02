import React, { FunctionComponent } from "react";
import { useTheme } from "@emotion/react";

const Logo: FunctionComponent = ({ ...props }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 70"
      fill={theme.red}
      {...props}
    >
      <path d="M0,9.3a27.31,27.31,0,0,1,4.44.16A3.59,3.59,0,0,1,6.3,11c5.92,8.62,14.34,10.7,24.25,9.37a34.29,34.29,0,0,1,8.47,0c11,1.3,20.69-.44,27.35-10.33.62-.93,2-1.35,3.91-2.53a39.54,39.54,0,0,1,0,4.43c-.07.61-.7,1.13-.87,1.75-3.28,12-10.91,16-23.47,14.54C35.23,27,24.29,27.9,13.48,28a5.59,5.59,0,0,1-5.79-3.51C5.28,19.71,2.58,15,0,10.29Z" />
      <path d="M0,66.46C2.38,57,4.84,47.59,7.12,38.12c1.55-6.41,2-6.76,9.66-4.91L12,69.42H0Z" />
      <path d="M60,69.42C58.68,60.7,57.38,52,56.17,43.26c-.47-3.38-.71-6.78-1-10.12,7.43-1.7,8-1.34,9.5,5.18,1.86,8.31,3.83,16.59,5.52,24.92.4,2-.11,4.12-.21,6.18Z" />
      <path d="M19.32,50.5c5.17-1.82,9.47-3.49,13.87-4.81a9.61,9.61,0,0,1,5.21,0c4.4,1.32,8.69,3,13.91,4.9.26,2,.86,5.19,1,8.41a3.86,3.86,0,0,1-1.92,2.9c-10.13,4.86-20.44,4.77-30.61.23-1.25-.56-2.2-3-2.28-4.62C18.35,54.9,19.07,52.3,19.32,50.5Z" />
      <path d="M19.8,45.61l1.53-13.16c9.2,0,18.25-.06,27.3.1.69,0,1.8,1.4,1.95,2.28.52,3,.71,6.11,1.16,10.54-3.55-1-6.62-1.41-9.14-2.78C37.91,40,33.66,40,29,42.57,26.59,43.9,23.71,44.36,19.8,45.61Z" />
      <path d="M39.76,15.65H32.09c0-4.56-.22-8.93.18-13.25.09-1,2.39-2.41,3.66-2.4s3.56,1.46,3.65,2.45C40,6.64,39.76,10.89,39.76,15.65Z" />
      <path d="M44.58,15.86V3.63c3.72,2.69,6.76,4.71,9.54,7,.81.68,1.49,2.47,1.13,3.29s-2,1.68-3.15,1.83A65.52,65.52,0,0,1,44.58,15.86Z" />
      <path d="M15,12.62,26.84,3.17V16.06l-11.2-.91Z" />
    </svg>
  );
};

export default Logo;
