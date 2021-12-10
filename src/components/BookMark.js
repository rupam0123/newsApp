import { Button } from 'react-bootstrap'
import React from 'react'
import Card from 'react-bootstrap/Card'
function BookMark(){
   const getBookmark=localStorage.getItem('bookmark')||'[]'
   const parseBookMark=JSON.parse(getBookmark)
   const handleClick=(i)=>{
       for(let index=0;index<=parseBookMark.length;index++){
        if(i===index){
         parseBookMark.splice(index,1);
        }
        localStorage.setItem('bookmark',JSON.stringify(parseBookMark));
         window.location.reload();
     }
   }
    return parseBookMark.length ?(
        <div className="container">
        <div className="row ">
       { parseBookMark.map((i,index)=>
       <div className="col-sm-4">
        <Card border="primary"  style={{ width: '18rem' }}>
          <Card.Header className="text-center">BookMarks</Card.Header>
          <Card.Img src={i.urlToImage} alt="Card image" />
          <Card.Body>
            <Card.Title className="bold">{i.title}</Card.Title>
            <Card.Text>
              {i.description}
            </Card.Text>
            <Button variant="danger"onClick={()=>handleClick(index)} >Remove</Button>
          </Card.Body>
        </Card>
        </div>
        )}
        </div>
        </div>
    ):<p>Please Add BookMark</p>
}
export default BookMark