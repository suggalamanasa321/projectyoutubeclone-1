import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './WHL.css'
import WHLVideoList from './WHLVideoList';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../actions/History';


function WHL({page,videoList}) {
  const CurrentUser = useSelector((state) => state.currentUserReducer) || {}; // check code responsible to update currentUserReducer state 
  const dispatch=useDispatch();
  const handleClearHistory=()=>{
    if(CurrentUser){
      dispatch(clearHistory({
        userId:CurrentUser.result._id
      }))
    }
  }
  return (
  
    <div className='container_pages_app'>
        <LeftSidebar/>
        <div className="container2_pages_app">
          <div className='container_whl'>
            <div className='box_WHL leftside_whl'>
              <b>Your {page} Shown here</b>
              {
                page==='History'&&
                <div className='clear_History_btn' onClick={()=>handleClearHistory()}>
                Clear History
                </div>
              }
              
            </div>
            <div className='rightside_whl'>
              <h1>{page}</h1>
              <div className='whl_list'>
                <WHLVideoList
                CurrentUser={CurrentUser.result._id}
                page={page}
                videoList={videoList}/>
                
              </div>
            </div>

          </div>
        </div>
    </div>
    
  );
}

export default WHL;
