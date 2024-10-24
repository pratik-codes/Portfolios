import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Pulse {
  children?: React.ReactNode;
  avatarImage?: string;
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const PulseAvatar = React.memo(function Ripple({
  children,
  mainCircleSize = 180,
  mainCircleOpacity = 1,
  numCircles = 3,
  className,
}: Pulse) {
  return (
    <div className="relative h-full">
      <div
        className={cn(
          "pointer-events-none select-none",
          className
        )}
      >
        {Array.from({ length: numCircles }, (_, i) => {
          const size = mainCircleSize + i * 15; // Larger circles as they go out
          const opacity = mainCircleOpacity - i * 0.10; // Fading effect for outer circles
          const animationDelay = `${i * 0.3}s`;

          if (i === 0) {
            return (
              <div
                className="absolute rounded-full ripple z-10"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: 1,
                  animationDelay,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {children}
              </div>
            )
          }

          return (
            <div
              key={i}
              className="absolute rounded-full bg-base/20 animate-ripple"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
});

PulseAvatar.displayName = "PulseAvatar";

export default PulseAvatar;

