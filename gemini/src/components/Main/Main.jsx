


import React, { useContext } from 'react';
import "./Main.css";
import { assets } from "../../assets/asset";
import { Context } from '../../context/Context';

const Main = () => {
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className="main">
      <div className="nav">
        <a href="/">
        <p>Ehsaan's AI</p>
        </a>
        <img src={assets.User_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult? 
        <>
        <div className="greet">
          <p><span>Hello, there!</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            {/* <p>Need suggestion beautiful places to visit? ask me!</p> */}
            <p>Trouble deciding which saree or lehenga to wear for the function? Let me assist you in making a choice! 🤭</p>
            <img src={assets.Compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Go ahead and quiz me on whatever catches your interest! I'm your quiz buddy.</p>
            <img src={assets.Bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Let's have a chit-chat to get to know each other! Tell me about yourself.</p>
            <img src={assets.Message_icon} alt="" />
          </div>
          <div className="card">
            <p>Need assistance tackling a complex problem? I'm here to help!</p>
            <img src={assets.Code_icon} alt="" />
          </div>
        </div>
        </>
        :
        <div className='result'>
          <div className="result-title">
            <img src={assets.User_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.Logo} alt="" />
            {loading?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }
        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompt here" />
            <div>
              {/* <img src={assets.Pictures_icon} alt="" /> */}
              {/* <img id="mic-icon" src={assets.Mic_icon} alt="" /> */}
              <img onClick={onSent} src={assets.Send_icon} alt="" style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <p className="bottom-info">
            This may response in a funny way, please don't get offended.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
