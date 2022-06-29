import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import Modals from './Modals';
import Approvemodal from './Approvemodal';
import Returnmodal from './Returnmodal';




function Filter() {
  const [supplier, setSupplier] = useState("");
  const [arc, setArc] = useState("");
  const[detailsArc, setDetailsArc] = useState("");
  const [supplierDetails, setSupplierDetails] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [location, setLocation] = useState("");
  const [essentiability, setEssentiability] = useState("");
  const [validEndDate, setValidEndDate] = useState("");
  const [totalOpenvalue, setTotalOpenValue] = useState("");
  const [totalDoAmountNGST, setTotalDoAmountNGST] = useState("");
  const [totalDoAmountCGST, setTotalDoAmountCGST] = useState("");
  const [area, setArea] = useState("");
  const [project, setProject] = useState("");
  const [accountAssignment, setAccountAssignment] = useState("");
  const [revenue, setRevenue] = useState("");
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const [isChecked, setisChecked] = useState(false);
  // const [quantity, setQuantity] = useState("0");
  const [amount, setAmount] = useState("0");

  const [checkedState, setCheckedState] = useState(
    new Array(3).fill(false) 
  );
  // const quantity = [0,0,0];  // 3 items -> intialising each of their quantities with 0
  const [quantityArray, setQuantityArray] = useState(
    new Array(3).fill(0)
  )
  const [myArray, setMyArray] = useState([]); // contains all checked items{netPrice,quantity,}
  const [total, setTotal] = useState(0);

  const [deliveryDate, setDeliveryDate] = useState("");


  const handleSubmit = (e) => {
    //alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    // ....

  }


  // Handlers for APPROVAL SECTION Profile image 
  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

  const handleSubmission = () => {
    console.log('inside')
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

  const getTotalNGST = () => {
    let totalAmount=0;
    for(let i=0;i<myArray.length;i++) totalAmount+=myArray[i].amount;
    return totalAmount;
  }

  const getTotalGGST = () => {

  }


  const quantityHandleChange = (e,position) => {

    if (e.target.value < 0) return;

    const updatedArray = [...myArray];
    for(let i=0;i<updatedArray.length;i++){
      if (updatedArray[i].index === position){
        const newItem = {
          index: updatedArray[i].index,
          netPrice: updatedArray[i].netPrice,
          quantity: e.target.value,
          amount: e.target.value*updatedArray[i].netPrice
        }
        quantityArray[position] = e.target.value;
        updatedArray[i] = newItem; 
        break;
      }
    }

       setMyArray(updatedArray);
    console.log(updatedArray);
    console.log(quantityArray);
  }

  	


  const handleOnChange = (position,netPrice) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
            if (item==false){  // uncheck -> check
                const updatedArray = [
                  ...myArray,
                  {
                    //index: myArray.length,
                    index: position,
                    netPrice: netPrice,
                    quantity: 1,
                    amount: netPrice
                  }
                ];

                checkedState[position] = true;
            
                quantityArray[position] = 1;
       
                setMyArray(updatedArray);
                console.log('updatedArray', updatedArray);
                console.log('quantityArray', quantityArray);
                console.log('checkedState', checkedState);
            }
            else{ // check -> uncheck
                let idx=-1;
                for(let i=0;i<myArray.length;i++){
                  if (myArray[i].index==position){
                    idx= i; break; 
                  }
                }
                const updatedArray= [...myArray];
                updatedArray.splice(idx,1);
                setMyArray(updatedArray);
                quantityArray[position] = 0;
                checkedState[position] = false;
                console.log('updatedArray', updatedArray);
                console.log('quantityArray', quantityArray);
                console.log('checkedState', checkedState);
            }

            return !item;
      } 
      else {
        return item;
      }
  })
}
  


  return (
      <div className='mt-2 ml-4 scrollable-div'>
{/* Filter */}
        <div className='mr-4 border border-2 border-blue-400 shadow-blue-900 rounded-lg'>
            <div className='p-3 text-lg w-100%  border bg-blue-500 text-white text-2xl'> Filter </div>
            <form className='pr-6 mb-4'>
                  <div className='p-6'>    
                      <span> Select: </span> 
                      <div className="radio inline ml-6">
                        <label>
                          <input type="radio" value="option1"   />
                          <span className='pl-1'> Vendor Code </span>
                        </label>
                      </div>
                      <div className="radio inline pl-6">
                        <label >
                          <input type="radio" value="option2" />
                          <span className='pl-1'> UMC No </span>
                        </label>
                      </div>
                  </div>

                  <div className='pl-6'>
                  <label> <span className='pr-3'> Supplier: </span>
                      <input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} className="border bg-slate-100 w-96 p-2" />
                  </label>
                  <label className='ml-8'> <span className='pr-3'> ARC NO: </span> 
                      <input type="text" value={arc} onChange={(e) => setArc(e.target.value)} className="border bg-slate-100 w-96 p-2" />
                  </label>
                  </div>
            
                  <div className='flex flex-row-reverse mt-6'>
                  <button className="bg-gray-100 hover:bg-gray-200 py-2 px-3 border border-gray-700 rounded" type="submit">
                    <FiIcons.FiRefreshCw className='inline text-gray-50 text-black' /> 
                    <span> Refresh </span>
                  </button> 
                  <button className="bg-gray-100 hover:bg-gray-200  py-2 px-3 border border-gray-700  rounded mr-4" type="submit">
                    <MdIcons.MdCancel className='inline text-gray-50 text-black' /> 
                    <span> Clear </span>
                  </button> 
                  <button className="bg-green-500 hover:bg-green-700 py-2 px-3 rounded mr-4 text-white border border-gray-700 hover:border-green-500" type="submit">
                    <AiIcons.AiOutlineSearch className='inline text-slate-50' /> 
                    <span> Search </span>
                  </button> 
                  
                  </div>
            </form>
        </div>
   
{/* Details, Approval Section, Item-ref */}
        <div className='mt-6  mr-4 border border-2 border-green-200 shadow-green-900 rounded-lg'>
            <div className='p-3 mb-4 text-lg w-100%  border bg-green-500 text-white font-bold'> 
                Details </div>
            <div className='p-2 text-md border bg-green-500 w-fit mb-4 ml-4 text-white font-bold'>
                 <FaIcons.FaWpforms /> Submit Request DO Creation  </div>
            <div className='border ml-6 p-2'>
                <form>
                    <div className='pl-6'>
                        <label> <span className='-mr-1'> Supplier: </span>
                          <input type="text" value={supplierDetails} onChange={(e) => setSupplierDetails(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-16" />
                        </label>
                        <label className='ml-8'> <span className='mr-2'> Target Value: </span> 
                          <input type="text" value={targetValue} onChange={(e) => setTargetValue(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-24" />
                        </label>
                    </div>

                    <div className='pl-6'>
                        <label> <span className=' '> Valid End Date: </span>
                          <input type="text" value={validEndDate} onChange={(e) => setValidEndDate(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-3" />
                        </label>
                        <label className='ml-8'> <span className='mr-2'> Total Open Value: </span> 
                          <input type="text" value={totalOpenvalue} onChange={(e) => setTotalOpenValue(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-16" />
                        </label>
                    </div>

                    <div className='pl-6'>
                        <label> <span className='pr-3 mr-5'> ARC No. </span>
                          <input type="text" value={detailsArc} onChange={(e) => setDetailsArc(e.target.value)} className="border bg-slate-100 w-96 p-2" />
                        </label>
                        <label className='ml-8'> <span className=''> Total Do Amount(NGST): </span> 
                          <input type="text" value={totalDoAmountNGST} onChange={(e) => setTotalDoAmountNGST(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-6" />
                        </label>
                    </div>

                    <div className='pl-6'>
                        <label> <span className='-mr-3'> *Location: </span> 
                          <select value={location} className="border bg-slate-100 w-96 p-2 ml-16" onChange={(e) => {setLocation(e.target.value)}}>
                              <option value="Ford">Please Select</option>
                              <option value="Volvo">test 1</option>
                              <option value="Fiat">test 2</option>
                          </select>
                        </label>
                        
                        <label className='ml-8'> <span className=''> Total Do Amount(CGST):</span> 
                          <input type="text" value={totalDoAmountCGST} onChange={(e) => setTotalDoAmountCGST(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-8" />
                        </label>
                    </div>

                    <div className='pl-6'>
                        <label> <span className=''> *Area: </span> 
                          <select value={area} className="border bg-slate-100 w-96 p-2 ml-20" onChange={(e) => {setArea(e.target.value)}}>
                              <option value="Ford">Please Select</option>
                              <option value="Volvo">test 1</option>
                              <option value="Fiat">test 2</option>
                          </select>
                        </label>
                        
                        <label className='ml-8'> <span className='-mr-2'> *Project: </span> 
                          <input type="text" value={project} onChange={(e) => setProject(e.target.value)} className="border bg-slate-100 w-96 p-2 ml-36" />
                        </label>
                    </div>

                    <div className='pl-6'>
                        <label> <span className='-mr-4'> *Account <br></br> Assignment: </span> 
                          <select value={accountAssignment} className="border bg-slate-100 w-96 p-2 ml-12 -mt-6" onChange={(e) => {setAccountAssignment(e.target.value)}}>
                              <option value="Ford">Please Select</option>
                              <option value="Volvo">test 1</option>
                              <option value="Fiat">test 2</option>
                          </select>
                        </label>
                    </div>

                    <div className='pl-6'>
                        <label>
                            <span className='pr-3 mt-6'> *Essentiability: </span> 
                            <textarea value={essentiability} className="border bg-slate-100 w-96 p-2 mt-4" onChange={(e) => {setEssentiability(e.target.value)}} />
                        </label>
                        <label  className='ml-8'> <span className=''> *Revenue/Cap: </span> 
                          <select value={revenue} className="border bg-slate-100 w-96 p-2 ml-24" onChange={(e) => {setRevenue(e.target.value)}}>
                              <option value="Ford">Please Select</option>
                              <option value="Volvo">test 1</option>
                              <option value="Fiat">test 2</option>
                          </select>
                        </label>
                    </div>
               
                </form>
            </div>

{/* Approval Section */}
            <div className='border ml-6 p-2'>
                <div className='p-3 mb-4 text-lg w-100%  border bg-green-500 text-white font-bold'> 
                    Approval Section </div>
                <table className='table-fixed border-collapse border border-slate-500'>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-4'> 
                          *Head(IL3)
                          {/* <input type="file" name="file" onChange={changeHandler} /> */}
                          {/* {isFilePicked ? (
                                <div>
                                  <p>Filename: {selectedFile.name}</p>
                                  <p>Filetype: {selectedFile.type}</p>
                                  <p>Size in bytes: {selectedFile.size}</p>
                                  <p>
                                    lastModifiedDate:{' '}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                  </p>
                                </div>
                              ) : (
                                <p>Select a file to show details</p>
                          )} */}
                          
                              {/* <div>
                                <button onClick={handleSubmission}>Submit</button>
                              </div> */}
                      </td>
                      <td className='border border-slate-700 p-4 w-full'> Bhaskar Das Gupta(162644) </td>
                    </tr>
                    <tr>
                      <td className='border border-slate-700 p-4'> *Cheif(IL2) </td>
                      <td className='border border-slate-700 p-4 w-full'> Alok Krishna(123444) </td>
                    </tr>
                    <tr>
                      <td className='border border-slate-700 p-4'> *CHEIF of Chief(IL2) </td>
                      <td className='border border-slate-700 p-4 w-full'> Parvez B Battiwala(6122092) </td>
                    </tr>
                    <tr>
                      <td className='border border-slate-700 p-4'> *VP(IL3) </td>
                      <td className='border border-slate-700 p-4 w-full'> Avneesh Gupta(119336) </td>
                    </tr>
                    <tr>
                      <td className='border border-slate-700 p-4'> *Budgeting Team(PNO) </td>
                      <td className='border border-slate-700 p-2 w-full'> </td>
                    </tr>
                  </tbody>
                </table>
            </div>
{/* Item ref */}
            <table className='table-fixed ml-6 mt-2 mb-2 border-collapse border border-slate-500'>
                <thead>
                  <tr className='bg-slate-100'>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Item Ref </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> UMC NO </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Item Desc </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Plant Code </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> UM </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Net Price  </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Select </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Quantity </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Amount </th>
                    <th className='pt-4 pb-2 text-center border border-slate-700'> Delivery Date </th>
                  </tr>
                  <tr className='bg-slate-100'>
                    <th className='border border-slate-700'> 
                        <select value="" className="border m-2 p-1">
                                  <option value="Ford">Search Items</option>
                                  <option value="Volvo">test 1</option>
                                  <option value="Fiat">test 2</option>
                        </select>
                    </th>
                    <th className='border border-slate-700'> 
                        <select value="" className="border m-2 p-1">
                                  <option value="Ford">Search UMC</option>
                                  <option value="Volvo">test 1</option>
                                  <option value="Fiat">test 2</option>
                        </select>
                    </th>
                    <th className='border border-slate-700'> 
                        <select value="" className="border m-2 p-1">
                                  <option value="Ford">Search Item Desc</option>
                                  <option value="Volvo">test 1</option>
                                  <option value="Fiat">test 2</option>
                        </select>
                    </th>
                    <th className='border border-slate-700'> 
                        <select value="" className="border m-2 p-1">
                                  <option value="Ford">Search Plant</option>
                                  <option value="Volvo">test 1</option>
                                  <option value="Fiat">test 2</option>
                        </select>
                    </th>
                    <th className='border border-slate-700'> 
                        <select value="" className="border m-2">
                                  <option value="Ford"> </option>
                                  <option value="Volvo">test 1</option>
                                  <option value="Fiat">test 2</option>
                        </select>
                    </th>
                    <th className='border border-slate-700'></th>
                    <th className='border border-slate-700'></th>
                    <th className='border border-slate-700'></th>
                    <th className='border border-slate-700'></th>
                    <th className='border border-slate-700'></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 0001 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'>1064TG040210</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Roof Sheet</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 011 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> M2 </td>
                    {/* Net price */}
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> 410 </td>
                    {/* Checkbox */}
                    <td className='text-center pt-2 pb-2 border border-slate-700'> <input type="checkbox" value={isChecked} onChange={() => handleOnChange(0,410)} /> </td>
                    {/* Quantity: passing net price to quantity change handler*/}
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  <input type="text" value={quantityArray[0]} onChange={(e) => quantityHandleChange(e,0)}  className=" bg-amber-200 border bg-slate-100 p-2" /></td>
                    {/* Amount */}
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> {quantityArray[0]*410} </td> 

                    <td className='text-center pt-2 pb-2 border border-slate-700'>  <input type="text" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}  className="bg-amber-200 border bg-slate-100 p-2" /></td>
                  </tr>
                  
                  
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 0001 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'>1064TG040210</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Roof Sheet</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 011 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> M2 </td>
                    {/* Net price */}
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> 410 </td>
                    {/* Checkbox */}
                    <td className='text-center pt-2 pb-2 border border-slate-700'> <input type="checkbox" value={isChecked} onChange={() => handleOnChange(1,410)} /> </td>
                    {/* Quantity: passing net price to quantity change handler*/}
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  <input type="text" value={quantityArray[1]} onChange={(e) => quantityHandleChange(e,1)}  className=" bg-amber-200 border bg-slate-100 p-2" /></td>
                    {/* Amount */}
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> {quantityArray[1]*410}  </td> 

                    <td className='text-center pt-2 pb-2 border border-slate-700'>  <input type="text" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}  className="bg-amber-200 border bg-slate-100 p-2" /></td>
                  
                  
                  </tr>
                  
                  
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 0001 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'>1064TG040210</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Roof Sheet</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 011 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> M2 </td>
                    {/* Net price */}
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> 410 </td>
                    {/* Checkbox */}
                    <td className='text-center pt-2 pb-2 border border-slate-700'> <input type="checkbox" value={isChecked} onChange={() => handleOnChange(2,410)} /> </td>
                    {/* Quantity: passing net price to quantity change handler*/}
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  <input type="text" value={quantityArray[2]} onChange={(e) => quantityHandleChange(e,2)}  className=" bg-amber-200 border bg-slate-100 p-2" /></td>
                    {/* Amount */}
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> {quantityArray[2]*410}  </td> 

                    <td className='text-center pt-2 pb-2 border border-slate-700'>  <input type="text" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}  className="bg-amber-200 border bg-slate-100 p-2" /></td>
                  </tr>

                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  </td>
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'>  </td>                  
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'><span className='text-lime-600 font-bold'> NGST <br></br> GGST </span>   </td>
                    <td className='text-center pt-2 pb-2 font-bold border border-slate-700'> <span className='text-lime-600 '> {getTotalNGST()} </span>{getTotalGGST()}  </td> 
                    <td className='text-center pt-2 pb-2 border border-slate-700'>  </td>
                  </tr>
              
                 
                </tbody>
            </table>
        </div>

 {/* Status */}
        <div className='mt-4 mr-4 border border-2 border-blue-400 shadow-blue-900 rounded-lg'>
            <div className='p-3 text-lg w-100%  border bg-blue-500 text-white'> Filters </div>
            <form className='pr-6 mb-4'>

                  <div className='mt-6 ml-6'>
                      <label> <span className='-mr-3'> Status: </span> 
                        <select value={location} className="border bg-slate-100 w-96 p-2 ml-16" onChange={(e) => {setLocation(e.target.value)}}>
                            <option value="Ford"> All selected </option>
                            <option value="Volvo">test 1</option>
                            <option value="Fiat">test 2</option>
                        </select>
                      </label>

                      <button className="ml-6 bg-green-500 hover:bg-green-700 text-white  py-2 px-3 border border-green-700 hover:border-green-500 rounded mr-2" type="submit">
                        <AiIcons.AiOutlineSearch className='inline text-gray-50' /> 
                        <span> Search </span>
                      </button>  
                      <button className="btn bg-gray-100 hover:bg-gray-200 py-2 px-3 border border-gray-700  rounded mr-2" type="submit">
                        <MdIcons.MdCancel className='inline text-gray-50 text-black' /> 
                        <span> Clear </span>
                      </button> 
                      <button className="btn bg-gray-100 hover:bg-gray-200 py-2 px-3 border border-gray-700 rounded" type="submit">
                        <FiIcons.FiRefreshCw className='inline text-gray-50 text-black' /> 
                        <span> Refresh </span>
                      </button>
                  </div>

            </form>
        </div>

  {/* DO Requests */}
        <div className='mt-6 mb-6 mr-4 border border-2 border-green-200 shadow-green-900 rounded-lg'>
          <div className='p-3 mb-4 text-lg w-100%  border bg-green-500 text-white text-2xl'> DO Requests</div>
          <table className='table-fixed ml-6 mt-6 mb-2 border-collapse border border-slate-500'>
                <thead>
                  <tr className='bg-slate-100'>
                    <th className='text-center border border-slate-700'> Action </th>
                    <th className='text-center border border-slate-700'> View </th>
                    <th className='text-center border border-slate-700'> Request id </th>
                    <th className='text-center border border-slate-700'> Supplier </th>
                    <th className='text-center border border-slate-700'> ARC NO </th>
                    <th className='text-center border border-slate-700'> Total DO(NGST) </th>
                    <th className='text-center border border-slate-700'> Revenue </th>
                    <th className=' text-center border border-slate-700'> Revenue Details </th>
                    <th className=' text-center border border-slate-700'> Essentiability </th>
                    <th className=' text-center border border-slate-700'> Location </th>
                    <th className=' text-center border border-slate-700'> Project </th>
                    <th className='text-center border border-slate-700'> Valid End Date </th>
                    <th className='text-center border border-slate-700'> Status </th>
                    <th className='ext-center border border-slate-700'> Created Date </th>
                    <th className=' text-center border border-slate-700'> Created By </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> <Approvemodal> </Approvemodal> <Returnmodal></Returnmodal> </td>
                    <td className='text-center border border-slate-700'> <Modals> </Modals> </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 38 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> T040 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 4700076206 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 1230 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> K </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 0000020111 | TC Battery Rebuilding & MOR</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> test </td> 
                    <td className='text-center pt-2 pb-2 border border-slate-700'> BOP </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 120 MW CPP </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 13 May 2022 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> DORSUBMITTED </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 23 May 2022 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Suparna Das </td>
                  </tr>
                  
                  
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'><Approvemodal> </Approvemodal> <Returnmodal></Returnmodal>  </td>
                    <td className='text-center border border-slate-700'> <Modals> </Modals> </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 38 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> T040 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 4700076206 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 1230 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> K </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 0000020111 | TC Battery Rebuilding & MOR</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> test </td> 
                    <td className='text-center pt-2 pb-2 border border-slate-700'> BOP </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 120 MW CPP </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 13 May 2022 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> DORSUBMITTED </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 23 May 2022 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Suparna Das </td>
                  </tr>
                  
                  <tr>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> <Approvemodal> </Approvemodal> <Returnmodal></Returnmodal>   </td>
                    <td className='text-center border border-slate-700'> <Modals> </Modals> </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 38 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> T040 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 4700076206 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 1230 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> K </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 0000020111 | TC Battery Rebuilding & MOR</td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> test </td> 
                    <td className='text-center pt-2 pb-2 border border-slate-700'> BOP </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 120 MW CPP </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 13 May 2022 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> DORSUBMITTED </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> 23 May 2022 </td>
                    <td className='text-center pt-2 pb-2 border border-slate-700'> Suparna Das </td>
                  </tr>
  
                </tbody>
            </table>
        </div>

      </div> 
  
   
  
    
  )
}

export default Filter