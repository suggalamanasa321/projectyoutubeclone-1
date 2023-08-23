import React from 'react'
import './Comments.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
function DisplayComments({cId, commentBody, userId, commentOn, userCommented}) {
    const[cmtId, setcmtId]=useState(" ");
    const[Edit, setEdit]=useState(false);
    const [cmntBdy, setCmntBdy] = useState("");
    
    const CurrentUser=useSelector((state)=>state.CurrentUserReducer);


    const handleEdit=(ctId, ctBdy)=>{
        setEdit(true);
        setcmtId(ctId);
        setCmntBdy(ctBdy);

    };
    const dispatch=useDispatch();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(!cmntBdy){
            alert('type your comment');
        }else{
            dispatch(editComment({
                id:cmtId,
                commentBody:cmntBdy,
            })
            );
            setCmntBdy("");
        }
        setEdit(false);
    };
    const handleDel=(id)=>{
        dispatch(deleteComment(id))
    }
  return (
    <>
    { 
        Edit? (<>
        <form className='comments_sub_form_comments'
         onSubmit={handleOnSubmit}
        >
                <input type="text" onChange={(e) => setCmntBdy(e.target.value)} placeholder='Edit comment...' value={cmntBdy} className='comment_ibox' />
                <input type="submit" value="Change" className='comment_add_btn_comments' />

        </form>
        </>):(
            <p className='comment_body'>{commentBody}</p>

        )

    }
    
    <p className='usercommented'>{" "} - {userCommented} commented {moment(commentOn).fromNow()}</p>
    {
        CurrentUser.result._id === userId && (
            <p className="EditDel_DisplayCommendt">
              <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
              <i onClick={()=> handleDel(cId)} >Delete</i>
            </p>
          )
    }
    </>
  );
}

export default DisplayComments;
