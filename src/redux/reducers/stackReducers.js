const initialData={
    stackName:null
}

export const ChangeStackReducer=((state=initialData,action)=>{
    // console.log(action,'=-=-=-=q-we=qwe');
    switch(action.type){
        case 'CHANGE_STACK':
            state.stackName = action.payload;
            return { ...state };
        default: 
        return {...state}
    }
})



const manageButton={
    signup:false,
}
export const ManagewelcomeScreen=((state=manageButton,action)=>{
    switch(action.type){
        case 'CHANGE_WELCOME':
            state.signup = action.payload;
            return { ...state };
        default: 
        return {...state}
    }
})



const showToggle={
    toggle:false,
}
export const changeUserType=((state=showToggle,action)=>{
    switch(action.type){
        case 'CHANGE_USER':
            state.toggle = action.payload;
            return { ...state };
        default: 
        return {...state}
    }
})



