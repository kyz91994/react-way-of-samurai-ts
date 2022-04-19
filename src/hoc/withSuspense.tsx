import React, { Suspense } from "react";
import {Preloader} from "../components/common/Preloader";

export const withSuspense = (Component: React.ComponentType) => {
    return (props:any) => {
        return <Suspense fallback={<div>...Loading</div>}>
            <Component {...props}/>
        </Suspense>
    }
}