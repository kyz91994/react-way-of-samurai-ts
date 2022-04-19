import React from "react";
import loader from "../../asserts/images/spinning-circles.svg";

type PreloaderPropsType = {}
export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            <img alt='loading...' src={loader}/>
        </div>
    )
}