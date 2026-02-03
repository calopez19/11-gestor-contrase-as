import { useState } from "react";
import { motion } from "motion/react";
import gmail from "../../public/image/gmail.png";
import "../styles/card.css";

export function FlippingCard() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  function handleFlip() {
    if (!isAnimated) {
      setIsFlipping((preFlip) => !preFlip);
      setIsAnimated(true);
    }
  }
  return (
    <>
      <div className="card flip-card" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner"
          initial={false}
          animate={{ rotateY: isFlipping ? 180 : 360 }}
          transition={{duration: 0.6, animationDirection:'normal'}}
          onAnimationComplete={() =>  setIsAnimated(false) }
        >
          <div className="flip-card-front"></div>
          <div className="flip-card-back"></div>
        </motion.div>
      </div>
    </>
  );
}
