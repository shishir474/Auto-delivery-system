import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import * as AiIcons from "react-icons/ai";
import "../styles.css"
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";


function Modals() {
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    const step1Content = <h1></h1>;
    const step2Content = <h1></h1>;
    const step3Content = <h1></h1>;
    const step4Content = <h1></h1>;
  
    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
      return true;
    }
    // https://codesandbox.io/s/pbs5n?file=/src/App.js:509-1175
    function step3Validator() {
      // return a boolean
    }

  return (
     <>
      <Button variant="light" onClick={handleShow}>
          <AiIcons.AiOutlineSearch className='text-cyan-700 text-2xl font-bold mt-2 ml-4 mb-4 mr-4' />
      </Button>

      <Modal
        show={lgShow}
        onHide={handleClose}
        dialogClassName="my-modal"vendor code
        // backdrop="static"
        // keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">DO Request Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className="App border-2 border-sky-500 text-sm font-bold">
          <StepProgressBar
            startingStep={0}
            steps={[
              {
                label: "DO Request Submitted",
                name: "DO Request Submitted",
                content: step1Content
              },
              {
                label: "L1 Approval",
                name: "L1 Approval",
                content: step2Content
              },
              {
                label: "L2 Approval",
                name: "L2 Approval",
                content: step3Content
              },
              {
                label: "L3 Approval",
                name: "L3 Aproval",
                content: step4Content,
                validator: step2Validator
              },
              {
                label: "Budgeting Team Approval",
                name: "Budgeting Team Approval",
                content: step4Content
              }
            ]}
          />
        </div>

        <div className='flex justify-between mt-4'>
            <label> <span className='-mr-3'> Show</span> 
              <select value="" className="border bg-slate-100 w-15 p-2 ml-6">
                  <option value="Ford">Please Select</option>
                  <option value="Volvo">test 1</option>
                  <option value="Fiat">test 2</option>
              </select>
              <span className='ml-2'> entries </span>
            </label>
            <label> <span className='pr-3'> Search: </span>
              <input type="text" value=""  className="border bg-slate-100 p-2" placeholder='Type any keywords' />
            </label>
        </div>
      
        <table className='table-fixed ml-6 mt-6 mb-2 border-collapse border border-slate-500'>
                <thead>
                  <tr className='bg-slate-100'>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Item Ref </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> UMC NO </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Item Desc </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Plant Code </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Net Price </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> UM </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Quantity </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Amount </th>
                    <th className='pt-4 pb-2 pl-2 pr-2 text-center border border-slate-700'> Delivery Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center p-2 border border-slate-700'> 00001</td>
                    <td className='text-center p-2 border border-slate-700'> 5870C0194</td>
                    <td className='text-center p-2 border border-slate-700'> Roof Sheeting, Roof Sheeting, Project, R </td>
                    <td className='text-center p-2 border border-slate-700'> 5100 </td>
                    <td className='text-center p-2 border border-slate-700'> 410 </td>
                    <td className='text-center p-2 border border-slate-700'> M2 </td>
                    <td className='text-center p-2 border border-slate-700'> 1 </td>
                    <td className='text-center pp-2 border border-slate-700'> 410</td>
                    <td className='text-center p-2 border border-slate-700'> 23 May 2022 </td> 
                  </tr>
                  
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 00001</td>
                    <td className='text-center border border-slate-700'> 5870C0194</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Roof Sheeting, Roof Sheeting, Project, R </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 5100 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 410 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> M2 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 1 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 410</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 23 May 2022 </td> 
                  </tr>
                  
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 00001</td>
                    <td className='text-center border border-slate-700'> 5870C0194</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Roof Sheeting, Roof Sheeting, Project, R </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 5100 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 410 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> M2 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 1 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 410</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 23 May 2022 </td> 
                  </tr>
                </tbody>
            </table>
        </Modal.Body>
        
        <Modal.Footer className='bg-slate-100'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default Modals