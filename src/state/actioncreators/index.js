export const withdraw = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const deposite = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "deposite",
            payload: amount
        })
    }
}