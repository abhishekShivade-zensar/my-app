import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import ExItem from './components/ExItem';
import Expenses from './components/Expenses';
// import NewExpense from './components/NewExpense';
import ExpenseData from './components/ExpenseData';

// function App() {
//   let myText='Hello'
//   var newVar='Hi'
//   return (
//     <div className='App'>
//       <h1>Hello....!</h1>
//       <a href='#'>Go to home page</a>
//       <p>This is paragraph</p>
//       <ul>
//         <li>Apple</li>
//         <li>Mango</li>
//       </ul>
//       <lablel>{myText}</lablel>
//       <p>{newVar}</p>
//     </div>

//   );
// }

// Class Component

// class App extends React.Component{
//   render(){
//     return(
//       <h3 className='myClass'>Hello this is class Component</h3>
//     )
//   }
// }

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 2345.45, date: new Date(2022, 2, 28) },
  { id: 'e2', title: 'Movie Tickets', amount: 2000.00, date: new Date(2022, 3, 20) },
  { id: 'e3', title: 'Corporation Tax', amount: 12345.45, date: new Date(2022, 4, 12) },
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  // const expenses = [
  // { id: 'e1', title: 'Car Insurance', amount: 2345.45, date: new Date(2022, 2, 28) },
  // { id: 'e2', title: 'Movie Tickets', amount: 2000.00, date: new Date(2022, 3, 20) },
  // { id: 'e3', title: 'Corporation Tax', amount: 12345.45, date: new Date(2022, 4, 12) },
  // ]

  const addExpenseHandler = expense => {
    // setExpenses([expense,...expenses]) // bad practice
    setExpenses(prevExpenses => {
      // console.log('inside setExpenses')
      console.log('prevExpenses :')
      console.log(...prevExpenses)
      // console.log('returning')
      return (
        [expense, ...prevExpenses]
        
      )
    })
    console.log('I am in app.js')
    console.log(expense)
  }

  return <div className="container">Lets Start

    {/* {expenses.map(e => {
      return <ExItem key={e.id} extitle={e.title} examount={e.amount} exdate={e.date}/>
      })} */}

    <Expenses Expense={expenses} />
    {/* <NewExpense /> */}
    <ExpenseData onAddExpense={addExpenseHandler} />

    {/* <ExItem extitle={expenses[0].title} examount={expenses[0].amount} exdate={expenses[0].date}></ExItem>
   <ExItem extitle={expenses[1].title} examount={expenses[1].amount} exdate={expenses[1].date}></ExItem>
   <ExItem extitle={expenses[2].title} examount={expenses[2].amount} exdate={expenses[2].date}></ExItem> */}
  </div>
}

export default App;
