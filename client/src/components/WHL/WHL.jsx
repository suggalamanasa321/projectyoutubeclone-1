import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './WHL.css'
import WHLVideoList from './WHLVideoList';


function WHL({page,videoList}) {
  console.log(videoList);
  return (
  
    <div className='container_pages_app'>
        <LeftSidebar/>
        <div className="container2_pages_app">
          <p className='container_whl'>
            <div className='box_WHL leftside_whl'>
              <b>Your {page} Shown here</b>
              {
                page==='History'&&
                <div className='clear_History_btn'>
                Clear History
              </div>
              }
              
            </div>
            <div className='rightside_whl'>
              <h1>{page}</h1>
              <div className='whl_list'>
                <WHLVideoList
                page={page}
                videoList={videoList}/>
                
              </div>
            </div>

          </p>
        </div>
    </div>
    
  )
}

export default WHL;
