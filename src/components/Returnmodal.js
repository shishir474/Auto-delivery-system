import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import * as BsIcons from "react-icons/bs";
import "../styles.css"



function Returnmodal() {
     //const [show,setShow] = useState(false);
    const [show, setShow] = useState(false);
    const[text, setText] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="light" onClick={handleShow}>
          <BsIcons.BsFillRecordBtnFill className='text-red-900 text-2xl mx-auto' />
        </Button>
  
        <Modal show={show} onHide={handleClose} dialogClassName="approve-modal">
          
          <Modal.Header closeButton className='bg-slate-100'>
            <Modal.Title >Return</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
              <div className='ml-4'>
              <p className='text-slate-700 font-semibold'> Remarks </p>    
              <textarea value={text} onChange={(e) => setText(e.target.value)} className="border bg-slate-100 w-11/12 p-2 -mt-2" />
              </div>
          </Modal.Body>

          <Modal.Footer className='bg-slate-100'>
            <Button variant="danger" >  Return  </Button>
            <Button variant="secondary" > Cancel </Button>
        </Modal.Footer>

      </Modal>
      </>
    );
}

export default Returnmodal