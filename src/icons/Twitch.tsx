import { SVGProps } from "react";

export const Twitch = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 256 268"
      width="256"
      height="268"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M17.458 0 0 46.556v186.201h63.983V268l46.53-35.243h37.215L256 139.094V0H17.458Zm23.259 23.263H232.73v104.285l-28.927 27.656H128l-37.216 35.243v-35.243H40.717V23.263Z"
        fill="currentColor"
      />
      <path
        d="M186.867 60.494h-23.26v69.779h23.26V60.494Zm-63.997 0h-23.26v69.779h23.26V60.494Z"
        fill="currentColor"
      />
    </svg>
  );
};
