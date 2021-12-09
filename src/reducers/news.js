import { NEWS_DATA,SET_SEARCH,GET_SEARCH } from "../actions";

const initialState={
    news:[],
    search:'',
    searchData:[]
}

export const getNews=(state=initialState,action)=>{
    switch(action.type){
        case NEWS_DATA:
            return{
                ...state,
                news:action.payload
            }
        case SET_SEARCH:
            return{
                ...state,
                search:action.payload
            } 
        case GET_SEARCH:
            return{
                ...state,
                searchData:action.payload
            }       
        default:
            return state
    }
}