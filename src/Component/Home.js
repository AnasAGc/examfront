import React, { Component } from "react";
import axios from "axios";
import { Card, Col, Row,Button } from "react-bootstrap";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldrinks: [],
    };
  }

  componentDidMount = () => {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
    axios.get(url).then((result) => {
    //   console.log(result.data.drinks);
      this.setState({
        alldrinks: result.data.drinks,
      });
    });
  };


  addtofav= (idx)=>{

      let url=`http://localhost:3002/addtofav`;
      let obj={
        strDrink:this.state.alldrinks[idx].strDrink,
        strDrinkThumb:this.state.alldrinks[idx].strDrinkThumb,
      }
     
        axios.post(url,obj).then(result=>{
          console.log(result);
      })

  }




  render() {
    return (
      <div>
 
        <Row xs={1} md={3} className="g-4">
          {this.state.alldrinks.map((item, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.strDrinkThumb}/>
                <Card.Body>
                  <Card.Title>{item.strDrink}</Card.Title>
               
                  <Button onClick={()=>this.addtofav(idx)} variant="primary"> Add to favorite</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       
      </div>
    );
  }
}

export default Home;
