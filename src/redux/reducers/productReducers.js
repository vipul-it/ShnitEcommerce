const initialData={
    product:[
        {
            name:'vipul',
            id:1
        }
    ]
}

export const cartReducers=((state=initialData,action)=>{
    switch(action.type){
        case 'PRODUCT':
            state.product = action.payload;
            return { ...state };
        default: 
        return {...state}
    }
})