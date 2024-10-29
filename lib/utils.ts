import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const AVATAR_IMAGE= "https://pbs.twimg.com/profile_images/1843680446153891840/j30OfHJQ_400x400.jpg";

