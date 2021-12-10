import { NEWS_DATA,SET_SEARCH,GET_SEARCH,SET_FAVORITES } from "../actions";

const initialState={
    news:[],
    search:'',
    searchData:[],
    favorite:[]
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
        case SET_FAVORITES:
            return{
                ...state,
                favorite:action.payload
            }           
        default:
            return state
    }
}