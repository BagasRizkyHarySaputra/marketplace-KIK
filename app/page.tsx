"use client";

import { useState } from "react";
import Background from "./component/background";
import Header from "./component/header";
import Popup from "./component/popup";
import Payment from "./component/payment";
import "./static/css/page.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleCartClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleBuyNow = () => {
    setShowMainContent(false);
    setShowPopup(false);
  };

  const handlePaymentCartClick = () => {
    setShowPaymentPopup(true);
  };

  const handleClosePaymentPopup = () => {
    setShowPaymentPopup(false);
  };

  const handleResetCounter = () => {
    setCounter(1);
  };

  return (
    <>
      <Background hideImage={showPaymentPopup || !showMainContent} />
      <Header />
      {showMainContent && (
        <div className="main-content">
          <h1 className="main-title">SOP BUAH SIGMA</h1>
          <div className="main-ingredients">
            <span>Ingredients:</span>
            <ul>
              <li><span className="circle"></span>Mangga</li>
              <li><span className="circle"></span>Mutiara</li>
              <li><span className="circle"></span>Melon</li>
              <li><span className="circle"></span>Jelly</li>
              <li><span className="circle"></span>Buah Naga</li>
            </ul>
          </div>
          <p className="main-desc">
            Weladalah Sop buah cik tambahan energi rizz penuh warna, yang membuat si<br />Sigma tetap tenang, fokus, dan menang loh ya bahkan di tenga GYAATT-nya dunia.
          </p>
          <div className="main-buy">
            <button className="main-buy-btn" onClick={handleBuyNow}>Buy Now!</button>
            <span className="main-buy-cart" onClick={handleCartClick} style={{cursor: "pointer"}}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
            </span>
          </div>
        </div>
      )}
      {showPopup && showMainContent && <Popup onClose={handleClosePopup} counter={counter} resetCounter={handleResetCounter} />}
      {!showMainContent && <Payment onCartClick={handlePaymentCartClick} onClose={() => setShowMainContent(true)} counter={counter} setCounter={setCounter} />}
      {showPaymentPopup && <Popup onClose={handleClosePaymentPopup} counter={counter} resetCounter={handleResetCounter} />}
    </>
  );
}
