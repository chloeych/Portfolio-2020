import React from 'react';

// images 
import profilepic1 from '../images/profilepic1.jpeg'
import profilepic2 from '../images/profilepic2.jpeg'

function Dashboard(){

   

    return(
        <div className="dashboardContainer">
            <div className="profilePictures">
             <p><img className="pp1" src={profilepic1} alt='profilepicture1'></img></p>
             <p><img className="pp2" src={profilepic2} alt='profilepicture2'></img></p>
            </div>
            
            <div className="bodytext">
             <p className="nameTitle">chloe chan</p>
                <div className="bioDescription">
                 <p><b>student</b>, travel enthusiast,</p>
                 <p>self proclaimed foodie</p>
                 <p> {"&"} sometimes I code.</p>
                </div>
            </div>
            

        </div>
        
    )
}

export default Dashboard; 