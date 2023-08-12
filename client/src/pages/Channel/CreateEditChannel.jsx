import React, { useState } from 'react'
import './CreateEditChannel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChannelDate } from '../../actions/channelUser';

function CreateEditChannel({ setEditCreateChannelBtn }) {
  // const CurrentUser = {
  //     result: {
  //         email: 'xyz@gmail.com',
  //         joinedOn: '2222-07-IST09:57:23.4892',
  //     },
  // };
  const CurrentUser = useSelector(state => state.currentUserReducer);

  const [name, setName] = useState(CurrentUser.result.name);
  const [desc, setDesc] = useState(CurrentUser.result.desc);
  const dispatch = useDispatch();
  const handleSubmit =()=>{
    if (!name) {
      alert("Plz enter name !");
    } else if (!desc) {

      alert("Plz enter description !");
    }
    else {
      dispatch(updateChannelDate(CurrentUser.result._id, {
        name: name,
        desc: desc,
      }));
      setEditCreateChannelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser.result.email }));
      }, 5000);

    }

  }
  return (
    <div className='container_CreateEditChannel'>
      <input type="submit" name='text' value={"X"} className='ibtn_x' onClick={()=>setEditCreateChannelBtn(false)} />
      <div className='container2_CreateEditChannel'>
        <h1>
          {CurrentUser.result.name ? <>Edit</> : <>Create</>}
          Your Channel
        </h1>
        <input type="text" name='text' placeholder='Enter Your/Channel name' className='ibox' value={name} onChange={(e)=>setName(e.target.value)} />
        <textarea type='text' rows={15} placeholder={"Enter channel description"} className={'ibox'} value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <input type="submit" value={"submit"} className='ibtn' onClick={handleSubmit} />

      </div>

    </div>
  )
}

export default CreateEditChannel
