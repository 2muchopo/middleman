import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import Picture from '../assets/middleman.jpg'

import '../styles/home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='left'>
                <h1>Middleman</h1>
                <h3>To aid better and faster transactions.</h3>
                <h3>MiddleMan guarantees quality in product</h3>
                <h3>Help customers trust you.</h3> <br />

                
                    <button> <Link to = '/buyer'>Enter as Buyer</Link> </button> <br />
                    <button> <Link to = '/seller'>Enter as Seller</Link> </button>
                

            </div>
            <div className="right">
                <img src={Picture} alt="Middleman Picture" />

            </div>
            
            
        </div>
    )
}

export default Home;
