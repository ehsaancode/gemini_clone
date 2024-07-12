import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/asset"
import { Context } from '../../context/Context'

const Sidebar = () => {

const [extended, setExtended] = useState(false)
const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context)

const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
}
    
  return (
    <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' id="icon" src={assets.Menu_icon} alt="" />
            
            <div onClick={newChat} className="new-chat">
                <img id='icon' src={assets.Plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ? <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item, index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img id='icon' src={assets.Message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                </div>
                    )
                })}
                
            </div>
            :null
            }


        </div>


        <div className="bottom">
            <div className="bottom-item">
                <img id='icon' src={assets.Question_icon} alt="" />
                {extended?<p>Help</p>:null} 
            </div>
            <div className="bottom-item">
                <img id='icon' src={assets.History_icon} alt="" />
                {extended?<p>Activity</p>:null} 
                
            </div>
            <div className="bottom-item">
                <img id='icon' src={assets.Setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
