import axios from "axios";
import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import FormModal from "./FormModal";
export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFavDrinks: [],
      show:false,
      item:[],
    };
  }

  componentDidMount = () => {
    let url = `https://drinksexams.herokuapp.com/getFavDrinks`;

    axios.get(url).then((result) => {
      this.setState({
        allFavDrinks: result.data,
      });
    });
  };

  deletefav = (idx) => {
    let id = this.state.allFavDrinks[idx]._id;

    let url = `https://drinksexams.herokuapp.com/deletFav?id=${id}`;
    axios.delete(url).then((result) => {
      this.setState({
        allFavDrinks: result.data,
      });
    });
  };

  updateFav = (idx) => {
      this.openandclose();
      this.setState({
          item:this.state.allFavDrinks[idx]
      })
   
  };

  openandclose=()=>{
      this.setState({
          show:!this.state.show
      })

  }


  update=(data)=>{
    this.setState({
        show:!this.state.show
    })

    let obj=data;
    let url = `https://drinksexams.herokuapp.com/updateFav`;

    axios.put(url,obj).then(result=>{
        this.setState({
            allFavDrinks:result.data
        })
    })


    
  }


  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.state.allFavDrinks.map((item, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{item.strDrink}</Card.Title>

                  <Button onClick={() => this.deletefav(idx)} variant="primary">
                    {" "}
                    Delete
                  </Button>
                  <Button onClick={() => this.updateFav(idx)} variant="primary">
                    {" "}
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <FormModal 
        open={this.openandclose}
        show={this.state.show}
        item={this.state.item}
        update={this.update}
        
        />
      </div>
    );
  }
}

export default Favorite;
