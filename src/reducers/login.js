import { SHOW } from "../action";

const initialState = {
    
        show: false,
    
}
const login =(state=initialState,action)=>{
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                show: action.payload,
                   }
     
            default:
                return state;
        
    }
}
export default login;