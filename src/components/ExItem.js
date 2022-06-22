import { useState } from 'react'
import ExDate from './ExDate'
import './ExItem.css'
import NewExpense from './NewExpense'
const ExItem = (props) => {

    // const expenseDate= new Date(2022,2,28)
    // const expenseTitle='Car Insurance'
    // const expenseAmount=1345.45

    // let newTitle = props.extitle

    const [initTitle, setInitTitle] = useState(props.extitle)

    const handleClick = () => {
        setInitTitle('TitleChanged')
        console.log('The button is clicked and the ${initTitle} is changed')
    }
    return (
        <div className='expense-item'>
            
            <ExDate exdate={props.exdate} />

            {/* <div>{props.exdate.toDateString()}</div> */}
            <div className='expense-item_des'>
                <h2>{initTitle}</h2>
                <div>{props.examount}</div>
            </div>newTitle
            <button onClick={handleClick} onDoubleClick={() => console.log(`Button is Double clicked`)} className='btn btn-outline-primary'>Change Title</button>
        </div>
    )
}

export default ExItem