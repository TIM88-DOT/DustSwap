import { React, useState } from "react";
import classes from "./TokenInfo.module.scss";


// import Web3 from "web3";

function TokenInfo(props) {
    const whiteOutline = props.whiteOutline
    return (
        <>
            <div className={whiteOutline ? classes["container--white"] : classes["container"]}>
                <div className={whiteOutline ? classes["row-1--white"] : classes["row-1"]}>
                    <h1>CULT/WETH</h1>
                    <div className={whiteOutline ? classes["close-btn--white"] : classes["close-btn"]}>X</div>
                </div>
                <p>0xf0f9d895aca5c8678f706fb8216fa22957685a13</p>
                <div className={whiteOutline ? classes["row-2--white"] : classes["row-2"]}>
                    <div className={classes["row-2-item"]}><span style={{ color: "#43ABE0", paddingRight: "5px" }}>Liquidity:</span>$6.08M</div>
                    <div className={classes["row-2-item"]}><span style={{ color: "#43ABE0", paddingRight: "5px" }}>Market Cap:</span> $68.89M</div>
                    <div className={classes["row-2-item"]}><span style={{ color: "#43ABE0", paddingRight: "5px" }}>Price USD:</span> $0.00001613</div>
                    <div className={classes["row-2-item"]}> <span style={{ color: "#43ABE0", paddingRight: "5px" }}>Price ETH:</span>$.089467</div>
                </div>
                <div className={classes["row-3"]}>
                    <div className={classes["row-3-item"]}>
                        <div><span style={{ color: "#43ABE0", paddingRight: "5px" }}>Your Dust Balance:</span> 9,702.82 CULT</div>
                        <div><span style={{ color: "#43ABE0", paddingRight: "5px" }}>Injected to Treasury:</span> 0.0000 </div>
                    </div>
                    <div className={classes["row-3-item"]}>
                        <div className={whiteOutline ? classes["inject-btn--white"] : classes["inject-btn"]}>Inject To Treasury</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TokenInfo;