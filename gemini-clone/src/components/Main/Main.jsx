import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className='main-container'>
        <div className='greet'>
            <p><span>Hello, Dev</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className='cards'>
            <div className='card'>
                <p>Suggest beautiful places to see for a road trip</p>
                <img src={assets.compass_icon} alt='' />
            </div>
            <div className='card'>
                <p>What is the difference between git and github?</p>
                <img src={assets.bulb_icon} alt='' />
            </div>
            <div className='card'>
                <p>Python web developer roadmap with youtube channels</p>
                <img src={assets.code_icon} alt='' />
            </div>
            <div className='card'>
                <p>How to make goat meat jollof rice</p>
                <img src={assets.message_icon} alt='' />
            </div>
        </div>

        <div className='main-bottom'>
           <div className='search-box'>
                <input type='text' placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt='' />
                    <img src={assets.mic_icon} alt='' />
                    <img src={assets.send_icon} alt='' />
                </div>
           </div>
           <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
           </p>
        </div>
      </div>
    </div>
  )
}

export default Main
