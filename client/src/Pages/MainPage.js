import React from 'react'
import Navbar from '../Components/Navbar'
import BirthdayCard from '../Components/BirthdayCard'

function MainPage() {
    return (
        <div>
            <Navbar/>
            <div className="main-page">
                <BirthdayCard/>
                <BirthdayCard/>
                <BirthdayCard/>
                <BirthdayCard/>
                <BirthdayCard/>
                <BirthdayCard/>
                <BirthdayCard/>
                <BirthdayCard/>
            </div>
            

            
            
        </div>
    )
}

export default MainPage
