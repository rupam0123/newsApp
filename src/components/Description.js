import {Button} from 'react-bootstrap'
import React from 'react'
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'
function Description(props) {
  const { news, searchData } = useSelector((state) => state.getNews)
  const param1 = props.match.params.id
  const param2 = props.match.params.param
  const goBack=()=>{
    props.history.push('/')
  }

  return news.length ? (
    <>
      {param2 === 'undefined' ?
        <Card border="primary" style={{ width: '30rem', marginLeft: "400px" }}>
          <Card.Header className="text-center">News</Card.Header>
          <Card.Img src={searchData[param1].urlToImage} alt="Card image" />
          <Card.Body>
            <Card.Title className="bold">{searchData[param1].title}</Card.Title>
            <Card.Text>
              {searchData[param1].description}
            </Card.Text>
          </Card.Body>
        </Card>

        : <Card border="primary" style={{ width: '30rem', marginLeft: "400px" }}>
          <Card.Header className="text-center">News</Card.Header>
          <Card.Img src={news[param1].urlToImage} alt="Card image" />
          <Card.Body>
            <Card.Title className="bold">{news[param1].title}</Card.Title>
            <Card.Text>
              {news[param1].description}
            </Card.Text>
          </Card.Body>
        </Card>}
    </>
  ):<Button variant="warning" onClick={goBack}> go back</Button>
}
export default Description