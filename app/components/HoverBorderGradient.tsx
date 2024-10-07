"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction] = useState<Direction>("TOP");

  // const rotateDirection = (currentDirection: Direction): Direction => {
  //   const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
  //   const currentIndex = directions.indexOf(currentDirection);
  //   const nextIndex = clockwise
  //     ? (currentIndex - 1 + directions.length) % directions.length
  //     : (currentIndex + 1) % directions.length;
  //   return directions[nextIndex];
  // };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(25% 55% at 50% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(40% 48% at 0% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(50% 55% at 50% 100%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(40% 46% at 100% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(80% 190% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%)";

  // useEffect(() => {
  //   if (!hovered) {
  //     const interval = setInterval(() => {
  //       setDirection((prevState) => rotateDirection(prevState));
  //     }, duration * 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-white/5 hover:bg-white/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-[3px] decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-zinc-100 hover:text-white z-10 bg-red-800 hover:bg-red-700 transition-colors duration-1000 font-semibold uppercase px-10 py-3.5 text-lg sm:text-xl rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : undefined,
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
