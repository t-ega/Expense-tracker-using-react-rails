import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import {useGlobalContext} from "../../Context/globalContext";
import {FormStyled} from "../../styles/app-syle";
import {Button} from "../Button/Button";
import {plus} from "../../utils/icons";

export const ExpenseForm = () => {
    const { appData } = useGlobalContext()
    const { csrf_token, expense } = appData;
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    useEffect(() => {
        // run this when the component loads to check if the server is sending any income to
        // display to the client
        if (expense){
            setInputState({...expense})
        }
    }, []);

    const { title, amount, date, category,description } = inputState;
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value })
    }

    return (
        <FormStyled action={"/expenses"} method={'post'}>
            <div className="input-control">
                <input
                    type="hidden"
                    value={ csrf_token }
                    name={"authenticity_token"}
                />
            </div>

            <div className="input-control">
                <input
                    type="hidden"
                    value={"expense"}
                    name={"expense[entry_type]"}
                />
            </div>

            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name={"expense[title]"}
                    placeholder={"Expense Title"}
                    onChange={handleInput("title")}/>
            </div>
            <div className="input-control">
                <input
                    type="number"
                    value={amount}
                    name={"expense[amount]"}
                    placeholder={"Expense Amount "}
                    onChange={handleInput("amount")}/>
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText={"Enter a Date"}
                    selected={date}
                    name={"expense[date]"}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="expense[category]" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="expense[description]"
                    value={description}
                    placeholder='Add A Reference'
                    id="description"
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}>
                </textarea>
            </div>
            <div className="submit-btn">
                <Button
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}