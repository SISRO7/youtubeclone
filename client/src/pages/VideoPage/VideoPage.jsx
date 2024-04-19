import React from 'react'
import Comments from "../../components/Comments/Comments";
import vid from "../../components/Video/vid.mp4";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import "./VideoPage.css";
import AccessControl from '../../components/AccessControl/AccessControl'

function VideoPage() {
  return (
    <>     
    <AccessControl />
    <div className="container_videoPage"  style={{display:'none'}}  id='video_page'>
      <div className="container2_videoPage">
      <div className="video_display_screen_videoPage">
      <video src={vid}
       className={"video_ShowVideo_videoPage"}
       controls
       //autoPlay
      ></video>
       <div className="video_details_videoPage">
       <div className="video_btns_title_VideoPage_cont">
       <p className="video_title_VideoPage"> videoTitle</p>
       <div className="views_date_btns_VideoPage">
       <div className="views_videoPage">
        8views<div className="dot"></div>video updated 1 year ago
       </div>
       </div>
       </div>
        <LikeWatchLaterSaveBtns/>
       <div  className="chanel_details_videoPage">
       <b className="chanel_logo_videoPage">
        <p>T</p>
       </b>
       <p className="chanel_name_videoPage">channel name</p>
       </div>
       <div className="comments_VideoPage">
       <h2>
                  <u>Coments</u>
                </h2>
                <Comments />   
       </div>
       </div>
         </div>
         <div className="moreVideoBar">More video</div>
      </div>   
    </div>
     </>
  )
}

export default VideoPage