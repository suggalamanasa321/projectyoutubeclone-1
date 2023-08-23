import React from 'react'
import './Library.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import vid from '../../components/Video/vid.mp4'
import { FaHistory } from 'react-icons/fa'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'  
import { useSelector } from 'react-redux'

function Library() {
  const CurrentUser = useSelector((state) => state.currentUserReducer) || {};

  const watchLaterList = useSelector((state) => state.WatchLaterReducer);
  const historyList = useSelector((state) => state.HistoryReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer)
  // const vids = [{
  //   _id: 1,
  //   video_src: vid,
  //   chanel: '62bafe6752cea35a6c30685f',
  //   title: 'video 1',
  //   Uploader: "ABC",
  //   description: 'description of video 1'
  // },
  // {
  //   _id: 2,
  //   video_src: vid,
  //   chanel: 'cdd',
  //   title: 'video 2',
  //   Uploader: "BCD",
  //   description: 'description of video 2'

  // },
  // {
  //   _id: 3,
  //   video_src: vid,
  //   chanel: 'add',
  //   title: 'video 3',
  //   Uploader: "CDE",
  //   description: 'description of video 3'

  // },
  // {
  //   _id: 4,
  //   video_src: vid,
  //   chanel: 'add',
  //   title: 'video 3',
  //   Uploader: "DEF",
  //   description: 'description of video 3'

  // },
  // ];
  return (
    <div className='container_pages_app'>
      <LeftSidebar />
      <div className="container2_pages_app">
        <div className='container_libraryPage'>

          <h1 className='title_container_libraryPage'>
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className='container_videolist_LibraryPage'>
            <WHLVideoList
              page={'History'}
              CurrentUser={CurrentUser.result._id}
              videoList={historyList}
            />
          </div>
        </div>

        <div className='container_libraryPage'>

          <h1 className='title_container_libraryPage'>
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className='container_videolist_LibraryPage'>
            <WHLVideoList
              page={'Watch Later'}
              CurrentUser={CurrentUser.result._id}
              videoList={watchLaterList}
            />
          </div>
        </div>

        <div className='container_libraryPage'>

          <h1 className='title_container_libraryPage'>
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className='container_videolist_LibraryPage'>
            <WHLVideoList
              page={'Liked Videos'}
              CurrentUser={CurrentUser.result._id}
              videoList={likedVideoList}
            />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Library;
