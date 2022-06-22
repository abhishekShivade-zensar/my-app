const ExDate=(props)=>{
    const month= props.exdate.toLocaleString('en-us',{month:'long'})
    const year= props.exdate.getFullYear()
    const day= props.exdate.toLocaleString('en-us',{day:'2-digit'})
    
    return(
        <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </div>
    )
}

export default ExDate