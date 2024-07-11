import React from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/asset"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img className='menu' id="icon" src={assets.Menu_icon} alt="" />
            
            <div className="new-chat">
                <img id='icon' src={assets.Plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img id='icon' src={assets.Message_icon} alt="" />
                    <p>What is react ...</p>
                </div>
            </div>
        </div>


        <div className="bottom">
            <div className="bottom-item">
                <img id='icon' src={assets.Question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item">
                <img id='icon' src={assets.History_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item">
                <img id='icon' src={assets.Setting_icon} alt="" />
                <p>Setting</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
