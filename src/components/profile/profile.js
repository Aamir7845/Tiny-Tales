import React from 'react'
import './profile.css'
export default function Profile() {
  return (
    <div className='container'>
        <div className='background_photo'>
        
        </div>

        <div className='profile'>
            <div className='profile_image'>
                <img src='./images/inst_profile.png'/>
            </div>

            <div className='profile_details'>
                <h1>Md Aamir Sohail</h1>
                <div className='follow'>
                    <div className='followers'>
                        <div className='count'>123</div>
                        <h2>Followers</h2>
                    </div>
                    <div className='followers'>
                        <div className='count'>123</div>
                        <h2>Followings</h2>
                    </div>
                </div>
                <div className='tag'>
                    
                </div>

            </div>
            
        </div>
        
        <div className='bios'>
            <h3>Co-founder & CEO at TTT</h3><br></br>
            <h3>https://www.instagram.com/jahnavi_pamuru/</h3><br></br>
        </div>

    </div>
  )
}
