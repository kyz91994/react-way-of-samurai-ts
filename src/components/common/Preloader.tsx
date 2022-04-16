import React from "react";
import loader from "../../asserts/images/spinning-circles.svg";

type PreloaderProppsType = {}
export const Preloader = (props: PreloaderProppsType) => {
    return (
        <div>
            <img alt='loading...' src={loader}/>
        </div>
    )
}