import React from "react";
import {OrbStyled} from "../../styles/app-syle";
import {useWindowSize} from "../../utils/useWindowSize";

export const Orb = () => {
    const {width, height} = useWindowSize();
    return <OrbStyled width={width} height={height} />
}