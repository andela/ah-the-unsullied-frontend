import expect from 'expect'; 
import articleReducer from '../../Articles/index'; 
import {GET_ARTICLE, DELETE_ARTICLE} from '../../../actions/articles/actionTypes';


const initialState = {
    article:{}
}

describe("Article Reducer Test ", () => {
    it('should get a single article', () =>{
        const action = {
            type: GET_ARTICLE
        }; 
        const newstate = articleReducer(initialState, action)
        expect(newstate.success).toEqual(action.payload)
    });
});

describe("Article Delete Test ", () => {
    it('should delete a single article', () =>{
        const action = {
            type: DELETE_ARTICLE
        }; 
        const newstate = articleReducer(initialState, action)
        expect(newstate.success).toEqual(action.payload)
    });
});
