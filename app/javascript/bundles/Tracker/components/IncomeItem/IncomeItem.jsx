import React from "react";
import {IncomeItemStyled} from "../../styles/app-syle";
import {calender, comment, dollar, trash} from "../../utils/icons";
import {Button} from "../Button/Button";
import {categoryIcon, expenseCatIcon} from "../../utils/get-category-icon";
import capitalize from "../../utils/capitalize";


export const IncomeItem = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type,
    csrf_token
}) => {
    return <IncomeItemStyled indicator={indicatorColor}>
        <div className="icon">
            {(type === "expenses") ? expenseCatIcon(category) : categoryIcon(category)}
        </div>
        <div className="content">
            <h5>{capitalize(title)}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{ dollar } {amount}</p>
                    <p>{calender} {date}</p>
                    <p>{comment} {description} </p>
                </div>

            <div className="btn-con">
                <form action={`/incomes/${id}`} method={'post'}>
                    <input type="hidden" value={csrf_token} name={"authenticity_token"}/>
                    <input type="hidden" name="_method" value="delete"/>

                    <Button
                        icon={trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                    />
                </form>
            </div>
        </div>
        </div>
    </IncomeItemStyled>
}