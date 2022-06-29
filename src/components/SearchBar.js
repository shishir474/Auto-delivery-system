import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List"
import '../App.css';
import {AiOutlineSearch} from "react-icons/ai";

function SearchBar() {
    
  const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };



  return (
    <div className="main mt-4 mb-8">
      <div className="search">
        <TextField
         
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label={<span className='text-slate-400 font-bold text-xl'>   <AiOutlineSearch className='inline'/> Search... </span>}
        />
      </div>
      <List input={inputText} />
    </div>
  )
}

export default SearchBar