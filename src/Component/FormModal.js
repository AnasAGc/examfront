import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
export class FormModal extends Component {
  
    handlesubmittion=(e)=>{
        e.preventDefault()

        let newobj={
            strDrink:e.target.title.value,
            strDrinkThumb:e.target.url.value,
            _id:this.props.item._id
        }
        this.props.update(newobj)
       
    }
  
  
  
  
  
    render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.open}
        >
         <Modal.Header closeButton>
          <Modal.Title>Editing Info</Modal.Title>
        </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handlesubmittion}>


              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Title</Form.Label>
                <Form.Control name='title' type="text" defaultValue={this.props.item.strDrink} />
               

                <Form.Label>URL</Form.Label>
                <Form.Control name='url' type="text" defaultValue={this.props.item.strDrinkThumb} />
               

              </Form.Group>


              <Modal.Footer>
              <Button variant="primary" type="submit">
              Save Changes
              </Button>
              </Modal.Footer>
            </Form>

          </Modal.Body>
    
        </Modal>
      </div>
    );
  }
}

export default FormModal;
