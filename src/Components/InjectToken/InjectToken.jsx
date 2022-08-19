import { React, useState } from "react";
import classes from "./InjectToken.module.scss";


// import Web3 from "web3";

function InjectToken() {
    const [token, setToken] = useState("Paste Token Address...");

    const updateValue = (e) => {
        setToken(e.value);
    }
    return (
        <>
            <div className={classes["container"]}>
                <div className={classes["token-input"]}>
                    <input onChange={(e) => updateValue(e)} type="text" value={token} />
                </div>
                <div className={classes["import-btn"]}>
                    <div>
                        IMPORT TOKEN
                    </div>
                </div>
                <div className={classes["tier"]}>
                    <div>
                        <span>Dusting Tier : </span> Diamond
                    </div>
                </div>
            </div>
        </>
    );
}

export default InjectToken;