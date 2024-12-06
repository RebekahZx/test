import React from 'react'
import './Navbar.css'

function Navbar() {

    const navdata = ["List your practice",
                     "For Employers",
                     "Courses",
                     "Books",
                     "Speakers",
                     "Doctors" 
    ];

  return (
    <div className='main'>
        <div className='logo'>
            <img src="./icons/MainLogo.svg" alt="alt" />
            <h2>ProVital</h2>
        </div>
        <div className='navContent'>
            {navdata.map((data,idx)=>(
                <div key={idx} style={{borderRight : "1px solid #E7E7E7" , padding : "15px" , height : "10px", display:"flex" , alignItems : "center"}}>{data}  </div>
            ))}
            <div style={{paddingLeft : "15px"}}>Login/SignUp</div>
        </div>
    </div>
  )
}

export default Navbar