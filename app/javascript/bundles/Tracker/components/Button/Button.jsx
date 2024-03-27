import React from "react";
import {ButtonStyled} from "../../styles/app-syle";

export const Button = ({ name, icon, color, onClick, bg, bPad, bRad  }) => {
    return (
    <ButtonStyled
        style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,

        }}
    onClick={onClick}
    >
        {icon}
        {name}
    </ButtonStyled>
    )
}