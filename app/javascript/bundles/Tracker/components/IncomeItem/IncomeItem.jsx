import React from "react";
import {IncomeItemStyled} from "../../styles/app-syle";
import {calender, comment, dollar, trash} from "../../utils/icons";
import {Button} from "../Button/Button";


export const IncomeItem = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) => {
    return <IncomeItemStyled indicator={indicatorColor}>
        <div className="icon"></div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <p>{ dollar } 45</p>
                <p>{calender} {date}</p>
                <p>{comment} {description} </p>

            </div>
            <div className="btn-con">
                <Button
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'var(--primary-color'}
                    color={'#fff'}
                    iColor={'#fff'}
                    hColor={'var(--color-green)'}
                    onClick={() => deleteItem(id)}
                />
            </div>

        </div>
    </IncomeItemStyled>
}