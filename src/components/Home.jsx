import React from 'react'
import './Home.css'
import background from '../assets/background-image.jpg'

const Home = () => {
    return (
        <div className="home">
           <div className="home__container">
                <img className="home__image" src={background} alt="background-image" />
                <div className="home__row">
                    
                </div>
           </div>
        </div>
    )
}

export default Home
