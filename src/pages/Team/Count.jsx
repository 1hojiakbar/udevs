import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { CountStyle, CountTitle } from "./style";

function Count() {
  const count = useMotionValue(74);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });

    return animation.stop;
  }, []);

  return (
    <>
      <CountStyle>{rounded}</CountStyle>
      <CountTitle>Dedicated team</CountTitle>
    </>
  );
}

export default Count;
