import React, {useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import './searchBar.module.scss'
import SearchResults from './SearchResults';
import './searchBar.module.scss'
export const SearchBar = () => {
  const [input,setInput]=useState("");


  // const fetchData = (value) => {
  //    fetch(`http://localhost:8080/api/v1/articles`)
  //   .then((response) => response.json())
  //   .then((json)=>{
  //         const results= json.filter((article) =>{
  //           return(
  //             value &&
  //             article &&
  //             article.title.includes(value)
  //         )
  //       });
  //         console.log(results)
  //   });
  // };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  return (
    <div className="bg-black">
      <div className="bg-black" >
        <input
    className="h-20vh w-full bg-black  border-gray-200 rounded py-3 px-4 text-gray-700 text-7xl leading-tight focus:outline-none focus:bg-slate-900 " 
         placeholder="SEARCH" 
         value={input}
         onChange={(e)=>handleChange(e.target.value)}
         >
        </input>
       </div>
        
        <SearchResults searchValue={input} />

    </div>
  )
}

export default SearchBar;
