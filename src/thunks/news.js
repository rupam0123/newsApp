import axios from 'axios';
import { getSearch, setNewsData } from '../actions';


export const requestNews = () => async (dispatch) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=ca1b65478da24874a51430b64dc294f0');
   dispatch(setNewsData(response.data.articles))
   
  } catch (err) {
    console.log(err);
  }
}
export const requestSerach = (text) => async (dispatch) => {
    
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${text}&apiKey=ca1b65478da24874a51430b64dc294f0`);

     dispatch(getSearch(response.data.articles))
     
    } catch (err) {
      console.log(err);
    }
  }
