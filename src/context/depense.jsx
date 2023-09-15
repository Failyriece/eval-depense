

import { createContext, useContext, useReducer } from "react";
import depenseReducer, { initialState } from "../Reducer";


const depenseContext = createContext({});

export const useDepense = () => {
    return useContext(depenseContext)
}


const DepenseProvider = ({children}) => {
    const context = useProvider();

    return <depenseContext.Provider value={context}>
        {children}
    </depenseContext.Provider>
}

const useProvider = () => {
    const [state, dispatch] = useReducer(depenseReducer, initialState)

    return {state, dispatch}
}

export default DepenseProvider