const initState = {};
const reimburseReducer = (state = initState,action)=>{
    switch(action.type){
        case "CREATE_REIMBURSE":
        console.log("Creating reimbursement",action.reimburse)
        return state;
        case "CREATE_REIMBURSE_ERR":
        console.log("Creating reimbursement err",action.err)
        return state;
        default:
        return state
    }
    
}
export default reimburseReducer;