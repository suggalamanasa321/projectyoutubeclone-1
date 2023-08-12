import React, { useState } from 'react'
import SearchList from './SearchList';
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs';



 function SearchBar() {
   const [searchQuery, setSearchQuery] = useState("");
const [searchList, setSearchList] = useState(false);
const TitleArray = ['video1', 'video2','Animation','video','movies'].filter(q => q.includes(searchQuery));
    return (
        <>
            <div className='SearchBar_Container'>
                <div className='SearchBar_Container2'>
                    <div className="search_div">
                        <input type="text" className='iBox_SearchBar' placeholder='Search'
                         onChange={e=>setSearchQuery(e.target.value)}
                         value={searchQuery}
                         onClick={e=>setSearchList(true)}
                        />

                        <FaSearch className='searchIcon_SearchBar'
                         onClick={e=>setSearchList(false)}
                        />
                        <BsMicFill className='Mic_SearchBar'/>
                        {searchQuery&&searchList&&
                        
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
