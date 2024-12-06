import React from "react";
import type { SVGProps } from "react";

export default function CycleSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M13 35H7v6m34 0h-6v-6m0-22h6V7M7 7h6v6"></path>
        <path d="M13 7.294C7.578 10.871 4 17.018 4 24q.001 1.53.223 3M27 43.777A20 20 0 0 1 24 44c-6.982 0-13.129-3.578-16.706-9m36.483-14q.222 1.47.223 3c0 6.982-3.578 13.129-9 16.706M21 4.224A20 20 0 0 1 24 4c6.982 0 13.129 3.578 16.706 9"></path>
      </g>
    </svg>
  );
}
