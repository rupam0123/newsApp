import axios from 'axios';
import { getSearch, setNewsData } from '../actions';


export const requestNews = () => async (dispatch) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=c0038726a4b44b8c9dbc3325b4a4ac02');
   dispatch(setNewsData(response.data.articles))
   
  } catch (err) {
    console.log(err);
  }
}
export const requestSerach = (text) => async (dispatch) => {
    
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${text}&apiKey=c0038726a4b44b8c9dbc3325b4a4ac02`);

     dispatch(getSearch(response.data.articles))
     
    } catch (err) {
      console.log(err);
    }
  }
