import React from 'react'
import './SearchBar.css'
import {BsMicFill} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
import SearchList from "./SearchList";
import {useState} from 'react'
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [seachListA, setSeachList] = useState(false)
   const TitleArray=["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
    <div className='SearchBar_container'>
        <div className='SearchBar_container2'>
            <div className='search_div'>
            <input type="text"className=' iBox_SearchBar'placeholder='Search'
                onChange={e=>setSearchQuery(e.target.value)}
                value={searchQuery}
                 onClick={e=>setSeachList(true)}
             />
            <FaSearch className="searchIcon_SearchBar"
               onClick={e=>setSeachList(false)}/>
            <BsMicFill className="Mic_SearchBar" />
            {searchQuery&& seachListA &&
            

         <SearchList
         setSearchQuery={setSearchQuery}
         TitleArray={TitleArray}
         />
            }
        
        
            </div>
        </div>
    </div>
   </>
  ) 
}  
export default SearchBar      
 


