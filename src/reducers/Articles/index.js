import { GET_ARTICLE, DELETE_ARTICLE } from '../../actions/articles/actionTypes';
 
const initialState = {
    article:{}, 
    loading: false
}

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_ARTICLE: 
            return{
            ...state, article: action.payload };
        case DELETE_ARTICLE:
            return{
                ...state, article: action.payload
            }
        default:
            return state
    }
}
