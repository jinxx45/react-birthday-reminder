import {Modal , Button} from 'react-bootstrap'
import {Component, useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';


class  MyVerticallyCenteredModal extends Component {
  constructor(props) {
    super(props);
    this.state ={
        file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
}
onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("/upload",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
}
onChange(e) {
    this.setState({file:e.target.files[0]});
}

    render(){  
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Birthdays
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={(e)=>this.state.setState({name:e.target.value})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name : "/>
  </div>
  <label className="mt-4" htmlFor="">Birthday Date : </label>
  <DatePicker selected={this.state.startDate} onChange={(date) => this.state.setState({startDate:date})} />
      <br />
      <input type="file" onChange={this.onChange}/>
    
  <button type="submit" onClick={this.onFormSubmit} class="btn btn-info">Add</button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

  
  function BirthdayModal() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="danger" onClick={() => setModalShow(true)}>
          Add Birthday
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default BirthdayModal;


  
