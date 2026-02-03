import { useState } from "react";
import { motion } from "motion/react";
import gmail from "../../public/image/gmail.png";
import "../styles/card.css";
import { SettingsOutline } from "../assets/settings.jsx";
import DeleteButton from "./DeleteButton.jsx";
import ChangeButton from "./ChangeButton.jsx";

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
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div className="card flip-card-front">
            <img src={gmail} alt="" />
          </div>
          <div className="card flip-card-back">
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                boxSizing: "border-box",
              }}
            >
              <div>
                <img
                  src={gmail}
                  alt="gmail icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <p>usuario</p>
                <p>*******</p>
              </div>
              <SettingsOutline />
            </div>
            <div>
              <DeleteButton/>
              <ChangeButton/>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
