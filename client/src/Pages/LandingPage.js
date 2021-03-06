import React from 'react'

import { useHistory } from 'react-router-dom'

function LandingPage() {

    const history = useHistory();


    const handleClick = () =>
    {
        history.push('/birthdays');
    }
  


    return (
        <div>
            <div className="image-bg">
        <div className="blur">

        <div className="main-content d-flex  justify-content-center ">
          <div className="main-card d-flex align-items-center flex-column justify-content-center">
            <h2 className="fw-bold display-1">React Birthday Reminder</h2>
            <button onClick={handleClick} style={{width:"120px"}} className="justify-content-center btn btn-outline-danger btn-lg fw-bold mx-5"> Launch</button>
          </div>
          
        </div>
        </div>
        
      </div>
        </div>
    )
}

export default LandingPage
