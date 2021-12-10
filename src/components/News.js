
import { Button } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestNews, requestSerach } from '../thunks/news';
import { ListGroup } from 'react-bootstrap';
import { setSerch } from '../actions';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { red } from '@mui/material/colors';

function News(props) {
  const param = 'currentData'
  const dispatch = useDispatch();
  const { news, search, searchData } = useSelector((state) => state.getNews)
  const handleClick = (index, param) => {
    props.history.push(`/desc/${index}/${param}`);
  }
  const handleChange = (event) => {
    const search = event.target.value
    dispatch(setSerch(search))

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestSerach(search))

  }
  const addFav = (i) => {
    news.map((data,index)=>{
      if(index===i){
        let getBookmark=localStorage.getItem('bookmark')||'[]'
        let parseBookMark=JSON.parse(getBookmark)
        parseBookMark.push(data)
        localStorage.setItem('bookmark',JSON.stringify(parseBookMark))
      }
    })
  };

  useEffect(() => {
    dispatch(requestNews())
  }, [dispatch])

  return (
    <div>
      <h1 className=" text-danger">NEWS APP</h1>
      <form className="col-md-3 my-3 mx-2">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSubmit}>Search</button>
      </form>
      {searchData.map((item, index) =>
        <ListGroup variant="flush">
          <ListGroup.Item onClick={() => handleClick(index)}>{item.title}</ListGroup.Item>
        </ListGroup>)}
      <h1 className="text-center">Today's Headlines</h1>
      {news.map((item, i) =>
        <>
          <ListGroup variant="flush">
            <img alt="img" className="img-fluid" src={item.urlToImage} width="500" height="500" />
            <ListGroup.Item ><h3>{item.title}</h3>
              <Button onClick={() => handleClick(i, param)}>Read More...</Button>
              <Checkbox icon={<IoIosHeartEmpty />} checkedIcon={<IoIosHeart style={{color:'red'}} />} onClick={() => addFav(i)} />
            </ListGroup.Item>
          </ListGroup></>)}
    </div>
  );
}

export default News;
