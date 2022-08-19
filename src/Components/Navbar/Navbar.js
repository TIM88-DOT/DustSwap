import React from "react";
import classes from "./Navbar.module.scss";
import img from "../../Assets/DustSwapLogo.png";
import walletConnect from "../../Assets/WalletConnect.png";
import metamask from "../../Assets/MetaMask.png";

// import Web3 from "web3";

function Navbar() {

  return (
    <>
      <div className={classes["navbar"]}>
        <div className={classes["left"]} >
          <img className={classes["logo_img_sm"]} src={img} alt="" />
          <span>DustSwap </span>
        </div>
        <div className={classes["right"]}>
          <a href="#"> <img src={walletConnect} alt="" /></a>
          <a href="#"> <img style={{width:'70px'}} src={metamask} alt="" /></a>
        </div> 
      </div>
    </>
  );
}

export default Navbar;
