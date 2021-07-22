import React from 'react'

import DP from '../Images/bdayappJinx.jpg'

function BirthdayCard() {
    return (
        <div>
            
            <div className="birthday-card">
                <img className="birthday-image" src={DP} width="200px" height="200px" alt="" />
                <p style={{marginTop:"20px"}}>Jinx45</p>
                <p className="fs-4" style={{marginTop:"-15px"}}>20-11-2000</p>
            </div>
        </div>
    )
}

export default BirthdayCard
