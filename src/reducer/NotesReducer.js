
export const initialState = [
    {title: 'title 1'},   
    {title: 'title 2'},   
    {title: 'title 3'},   
]

export const reducdr = (state, action) => {
    switch(action.type) {
        case "ADD": 
            return[...state, {title: `title${state.length+ 1}`}]

        default:
            return state
    }
    
}