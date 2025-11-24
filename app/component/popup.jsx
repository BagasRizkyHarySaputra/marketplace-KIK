import "../static/css/popup.css";
import "../static/js/popup.js";

import { useRef, useEffect, useState } from "react";

export default function Popup({ onClose, counter = 1, resetCounter }) {
  const popupRef = useRef(null);
  const [animateOut, setAnimateOut] = useState(false);

  function handleOverlayClick(e) {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setAnimateOut(true);
    }
  }

  useEffect(() => {
    if (!animateOut) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 300); // durasi animasi keluar
    return () => clearTimeout(timer);
  }, [animateOut, onClose]);

  return (
    <div className="popup-outer" onClick={handleOverlayClick}>
      <div
        ref={popupRef}
        className={animateOut ? "popup-animate-out" : "popup-animate-in"}
        style={{display: "flex", flexDirection: "column", alignItems: "center"}}
      >
        <div className="popup-top-row">
          <div className="popup-box-left">
            <div className="popup-cart-title">SOP BUAH<br />SIGMA</div>
            <div className="popup-cart-qty">x {counter}</div>
          </div>
              <div className="popup-box-right" onClick={() => resetCounter && resetCounter()} style={{cursor:'pointer'}}>
            <img src="/tempatSampah.svg" alt="Delete" className="popup-cart-icon" style={{width: "60px", height: "auto"}} />
          </div>
        </div>
        <div className="popup-btn">
          <span className="popup-pay-text" onClick={() => setAnimateOut(true)} style={{cursor:'pointer'}}>Continue Payment!</span>
        </div>
      </div>
    </div>
  );
}
