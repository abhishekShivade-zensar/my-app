import React from "react";
import NewExpense from "./NewExpense";

const ExpenseData = (props) => {

    const saveExpenseDataHandler=(entredExpenseData)=>{
        const expenseData={
            ...entredExpenseData,
            id:Math.random().toString()
        }
        // console.log('entredExpenseData')
        // console.log(...entredExpenseData)
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return(
        <div><NewExpense onSaveExpenseData={saveExpenseDataHandler} /></div>
    )
}

export default ExpenseData