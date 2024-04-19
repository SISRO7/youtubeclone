import React from 'react'
import ShwoVideoList from '../ShowVideoList/ShwoVideoList'

function WHLVideoList({ page, CurrentUser,videoList }) {
  return (
    <>
    {
        videoList.map(m=>{
            return(
              <>
              <ShwoVideoList videoId={m._id} key={m._id}/>

              </>  
            )
        }) 
    }
    </>
  )
}

export default WHLVideoList