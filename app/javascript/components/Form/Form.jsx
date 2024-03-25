import {FormStyled} from "../../styles/app-syle";
import React,  {useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export const Form = () => {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category,description } = inputState;
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value })
    }

    return (
        <FormStyled>
        <div className="input-control">
            <input
                type="text"
                value={title}
                name={"title"}
                placeholder={"Salary Title"}
                onChange={(val) => handleInput("title")}/>
        </div>
        <div className="input-control">
            <input
                type="number"
                value={amount}
                name={"amount"}
                placeholder={"Salary Amount "}
                onChange={(val) => handleInput("amount")}/>
        </div>
        <div className="input-control">
            <DatePicker
                id="date"
                placeholderText={"Enter a Date"}
                selected={date}
                ></DatePicker>

        </div>
        <div className="input-control">
            <input
                type="text"
                value={category}
                name={"category"}
                placeholder={"Freelancing"}
                onChange={(val) => handleInput("category")}/>
        </div>
    </FormStyled>
    )
}