/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";
import { BeforeAfterProps } from "./types";

export const BeforeAfter = ({ after, before }: BeforeAfterProps) => {
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [beforeWidth, setBeforeWidth] = useState(50);

  const setSize = () => {
    const width = wrapperRef.current?.clientWidth || 0;
    const height = wrapperRef.current?.clientHeight || 0;
    setWrapperSize({ width, height });
  };

  useEffect(() => {
    setSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-full w-full rounded-xl overflow-hidden border-[1.5rem] border-purple-900"
    >
      {/* before */}
      <div
        style={{ maxWidth: beforeWidth + "%" }}
        className="absolute inset-0 w-full h-full z-10 overflow-hidden"
      >
        <img
          width={wrapperSize.width}
          height={wrapperSize.height}
          style={{ height: wrapperSize.height + "px" }}
          className="object-cover max-w-none"
          {...before}
        />
      </div>
      {/* after */}
      <div className="absolute inset-0 w-full h-full">
        <img
          width={wrapperSize.width}
          height={wrapperSize.height}
          className="object-cover max-w-none"
          style={{ height: wrapperSize.height + "px" }}
          {...after}
        />
      </div>

      {/* slider button */}
      <div
        style={{ left: beforeWidth + "%" }}
        className="absolute text-gray-800 bg-gray-50 p-1 rounded-full z-30 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg pointer-events-none"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.5rem"
          width="1.5rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"></path>
        </svg>
      </div>

      {/* slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={beforeWidth}
        onChange={(e) => {
          setBeforeWidth(+e.target.value);
        }}
        className="appearance-none absolute z-20 inset-0 bg-purple-900/20 hover:bg-transparent"
        style={{ ["--wrapper-height" as any]: wrapperSize.height + "px" }}
      />
    </div>
  );
};
