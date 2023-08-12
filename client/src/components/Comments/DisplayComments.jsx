import React from 'react'
import './Comments.css'
import { useState } from 'react';
function DisplayComments({cId, commentBody, userCommented}) {
    const[Edit, setEdit]=useState(false);
    const [cmntBdy, setCmntBdy] = useState("");
    const handleEdit=(ctId, ctBdy)=>{
        setEdit(true);
        setCmntBdy(ctBdy);

    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        setEdit(false);
    }
  return (
    <>
    {
        Edit ? (<>
        <form className='comments_sub_form_comments'
         onSubmit={handleOnSubmit}
        >
                <input type="text" onChange={e => setCmntBdy(e.target.value)} placeholder='Edit comment...' value={cmntBdy} className='comment_ibox' />
                <input type="submit" value="Change" className='comment_add_btn_comments' />

        </form>
        </>):(
            <p className='comment_body'>{commentBody}</p>

        )

    }
    
    <p className='usercommented'> - {userCommented} commented</p>
    <p className='EditDel_DisplayComment'>
        <i onClick={()=>handleEdit(cId, commentBody)}>Edit</i>
        <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments;
