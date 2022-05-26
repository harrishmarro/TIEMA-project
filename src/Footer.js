import React from "react";
import img1 from './img/TIEMA-logo.png';
import img2 from './img/bigUS12.png';

export default function Footer() {
  return (
    <>
      <div style={{position:"fixed",bottom:0,right:10}}>
        <img src={img1} alt="Logo" style={{position:"inherit",bottom:0,right:10,height:90,width:120}}/>
		<img src={img2} alt="Logo" style={{position:"inherit",bottom:0,right:140,height:90,width:120}}/>
      </div>
    </>
  );
}