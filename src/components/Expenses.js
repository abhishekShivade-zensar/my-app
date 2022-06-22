import ExItem from "./ExItem"

const Expenses = (props) => {
    return (
        <div>
            {/* {props.items.length ===0}?
            <p>No Expense Found</p>: */}
            
            {props.Expense.map(e => <ExItem key={e.id} extitle={e.title} examount={e.amount} exdate={e.date} />
            )}
            
        </div>
    )
}

export default Expenses