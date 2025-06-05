import React from "react";

import style from "./startSteps.module.css"

import BtnStepStart from "../../../components/Button/BtnStepStart";
import AccordionStep from "./AccordionStep";



function StartSteps(){
    return(
        <div className={style.startStepsContainer}>
            <h2>Create a portfolio with Portlify: <br />
            5 simple steps</h2>
            <div className={style.stepBox}>
                <AccordionStep />
            </div>
            <div className={style.btn}>
                <BtnStepStart 
            Content={"Start building your portfolio now"}/>
            </div>
        </div>
    )
}

export default StartSteps;