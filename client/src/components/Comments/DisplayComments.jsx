import React from 'react';
import { useState } from "react";
import "./comments.css";
function DisplayComments({
  cId,
  commentBody,
  userId,
  commentOn,
  userCommented,
}) {
  const [Edit, setEdit] = useState(true);
  const [cmtBdy,  setcmtBdy] = useState("");
 
  const handleEdit = (ctId, ctBdy)=>{
    setEdit(true);
   setcmtBdy(ctBdy);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  }
  return (
    <>
    {
       Edit ? (<>
        <form className="comments_sub_form_comments"
         onSubmit={handleOnSubmit}
    >
    <inpu type="text"
      onChange={e =>  setcmtBdy(e.target.value)}
        placeholder="Edit comment..."
        value={commentBody}
       className="comment_ibox"
      />
      <input type="submit" value="Change" className="comment_add_btn_comments" />
    </form>
    </>
    ):(
      <p className="comment_body">{commentBody}</p>
    ) }
      <p className="usercommented"> {userCommented} commented </p>
    <p className="EditDel_DisplayCommendt">
           <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
          <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments;