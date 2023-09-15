export const initialState = [
    
]

const depenseReducer = (state, action) => {
    switch(action.type) {
        case "add" : 
        return [
            ...state,
            {
                name: action.name,
                price: action.price,
                category: action.category
            }
        ]
        
        default:
            return state;
    }
}

export default depenseReducer
