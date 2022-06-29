import React from 'react'
import SearchBar from './SearchBar'
import { CgProfile } from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as VscIcons  from "react-icons/vsc";
import * as BsIcons  from "react-icons/bs";
import { Link } from 'react-router-dom';
import "../styles.css"


function SideBar() {
  return (
 
        <div className='h-100% bg-slate-800 scrollable-div'> 
            <div className=' w-full flex justify-center border-gray-50 bg-slate-900 pt-12 pb-12'> 
                {/* Apply Profile picture icon here */}
                <CgProfile size={'8rem'} />
            </div>
            <div className=''> 
                {/* search bar */}
                <SearchBar></SearchBar>
            </div>
            <div>
                <ul>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <VscIcons.VscTypeHierarchySuper className='inline' />
                        <span> Procurement Hierarchy </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <BsIcons.BsReverseLayoutTextWindowReverse className='inline' />
                        <span> ManagePackages</span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <BsIcons.BsReverseLayoutTextWindowReverse  className='inline' />
                        <span> TechnicalSpecification</span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <BsIcons.BsReverseLayoutTextWindowReverse  className='inline' />
                        <span> TechnicalSpecification_Approval</span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <BsIcons.BsReverseLayoutTextWindowReverse  className='inline' />
                        <span> TSList </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <BsIcons.BsReverseLayoutTextWindowReverse  className='inline' />
                        <span> UploadPackages </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <VscIcons.VscGraph  className='inline' />
                        <span> Dashboard </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaTruck className='inline' />
                        <span> Delivery Compliance </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaMendeley className='inline' />
                        <span> Auto GRN </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaMendeley  className='inline' />
                        <span> Central Planning </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaMendeley   className='inline' />
                        <span> Clain Request </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaMendeley  className='inline' />
                        <span> Contracting </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaMendeley  className='inline' />
                        <span> Cost Comittee Convenor </span>
                    </li>
                    <li className='space-x-4 pt-4 pb-4 pl-6 text-white font-bold'>
                        <FaIcons.FaMendeley className='inline' />
                        <span> Cost Comittee Member </span>
                    </li>
                </ul>    
            </div>  
        </div>
    
  
  )
}

export default SideBar