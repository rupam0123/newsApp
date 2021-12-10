export const NEWS_DATA = 'SET_NEWS_DATA'
export const SET_SEARCH = 'SET_SEARCH'
export const GET_SEARCH ='GET_SEARCH'
export const SET_FAVORITES='SET_FAVORITES'


export const setNewsData= (payload)=>({type:NEWS_DATA,payload})
export const setSerch = (payload)=>({type:SET_SEARCH,payload})
export const getSearch=(payload)=>({type:GET_SEARCH,payload})
export const setFavorite=(payload)=>({type:SET_FAVORITES,payload})
