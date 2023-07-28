import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

export const FadeInUpBox = ({
  children,
  yOffset = 24, // y initial possition
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
  delayOrder, // order of appearance
  ...rest
}: any) => {
  const [delay, setDelay] = useState(0.25)

  const offset = 0.4

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset)
  }, [delayOrder, offset])

  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing,
    }),
    [delay, easing]
  )

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={"show"}
      exit="hidden"
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
