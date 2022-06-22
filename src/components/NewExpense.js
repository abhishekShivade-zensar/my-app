import React, { useState } from "react"
const NewExpense = (props) => {

    // const[enteredTitle,setEnteredTitled]=useState('')
    // const[enteredAmount,setEnteredAmount]=useState('')
    // const[enteredDate,setEnteredDate]=useState('')

// OR
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
            // enteredAmount: '',
            // enteredDate: ''
        // })
        // setEnteredTitled(event.target.value)
// A better way for above is
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredTitle: event.target.value
          }
        })
        console.log(event.target.value)

    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     // enteredTitle: '',
        //     enteredAmount: event.target.value,
        //     // enteredDate: ''
        // })
        // setEnteredAmount(event.target.value)

        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredAmount: event.target.value
          }
        })
        console.log(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
            // enteredTitle: '',
            // enteredAmount: '',
        //     enteredDate: event.target.value
        // })
        // setEnteredDate(event.target.value)

        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredDate: event.target.value
          }
        })
        console.log(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData ={
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            // date:userInput.enteredDate,
            date: new Date(userInput.enteredDate)
        }

        
        props.onSaveExpenseData(expenseData);
        console.log(expenseData)

        setUserInput(()=>{
            return {
                enteredTitle:'',
                enteredAmount:'',
                enteredDate:''
          }
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="form-horizontal w-50">
                <div className="form-group">
                    <label>Expense Title</label>
                    <input onChange={titleChangeHandler} type='text' value={userInput.enteredTitle}  className="form-control" />
                </div>
                <div className="form-group">
                    <label>Expense Amount</label>
                    <input onChange={amountChangeHandler} type='number' value={userInput.enteredAmount} className="form-control" min='0.01' step='0.01' />
                </div>
                <div className="form-group">
                    <label>Expense Date</label>
                    <input onChange={dateChangeHandler} type='date' value={userInput.enteredDate}  className="form-control" />
                </div>
                <div>
                    <button className="btn btn-outline-success d-flex mx-auto my-3" type="submit">Add Expense</button>
                </div>

            </form>
        </div>
    )
}

export default NewExpense