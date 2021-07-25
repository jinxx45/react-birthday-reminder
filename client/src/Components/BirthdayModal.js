import {Modal , Button} from 'react-bootstrap'
import {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect } from 'react';
import FileBase64 from 'react-file-base64';

function MyVerticallyCenteredModal(props) {
  const [startDate, setStartDate] = useState(new Date());
    return (
      <Modal
        {...props}
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
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name : "/>
  </div>
  <label className="mt-4" htmlFor="">Birthday Date : </label>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <br />
      <input type="file" />
    
  <button type="submit" class="btn btn-info">Add</button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
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


  
