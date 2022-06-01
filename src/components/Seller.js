import React,{useState} from 'react'
import '../styles/Seller.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import axios from 'axios'

const Seller = () => {
    const [code, setCode] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [items, setItems] = useState('')
    const [message, setMessage] = useState('')

    const phones = (e) => {
        setPhone(e.target.value)
    }
    const emails = (e) => {
        setEmail(e.target.value)
    }

    const text = (e) => {
        setItems(e.target.value)
    }


   //To send the inputs (phone and email) as JSON to the back end
    const submit = async (e) => {
        e.preventDefault()

        const body = JSON.stringify({
            phone : phone,
            email : email,
            items : items,
            code: code
        })
        //the key value of phone,email,items is used on the backend.
        //Sending to the backend from this front end and backend port number 5000
    const response = await axios.post('http://localhost:5000/api/seller', body, {
        
        headers: {'Content-Type':'application/json'}
    })
      //response comes as json from the backend to confirm the data sent was done successfully      
            console.log(response.data)
            setMessage(response.data.confirmation)
           //const data = await response.json()

        
    }




    const generate = () =>{

        

        let choices = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',2,3,4,5,6,7,8,9]

        let a = choices[Math.floor(Math.random()*32)]
        let b = choices[Math.floor(Math.random()*32)]
        let c = choices[Math.floor(Math.random()*32)]
        let d = choices[Math.floor(Math.random()*32)]
        let e = choices[Math.floor(Math.random()*32)]
        let f = choices[Math.floor(Math.random()*32)]
        let g = choices[Math.floor(Math.random()*32)]
        let h = choices[Math.floor(Math.random()*32)]


        let gen = a + b + c + d + e + f + g + h
        
            setCode(gen)
            


    }
    return (
        <div className='seller'>
            {message ? <p> Code Created and Details Registered.</p> : null }
            <form className="sells" onSubmit={submit}> 
            <div className='selling'>               
                <p className='gen'>Generate Your Transaction Code</p>
                <p className='code'>{code}</p>
               
                <CopyToClipboard text={code}>
                 <button>Copy Code</button>
                </CopyToClipboard> <br />
                {
                isLoading ?
                <div> Loading... </div> :
                <button onClick={generate} type='button'>Generate</button>
                 } <br /> <br />

                <div className="reach" >
                    <label htmlFor="phone">Send Code as Text Message to Buyer</label> <br /> <br />
                    <input type="phone" name='phone' placeholder="Buyer's Phone Number" onChange={phones} /> <br /> <br />
                    <label htmlFor="phone">Send Code as Email to Buyer</label> <br /> <br />
                    <input type="email" name='email' placeholder = "Buyer's Email" onChange={emails} /> <br /> <br />
                    
                           
            </div></div>

            <div className="sell">
                <h2>List of Items I intend to sell(Optional):</h2>
                <textarea name="items" id="items" cols="40" rows="5" placeholder='1. CAR' onChange={text}></textarea> <br /> 
                <div className="butt">
                    </div>
                
            </div>

            <div className="butt">
            <input type="submit" value= 'Submit Details'/>
            </div>   

            </form>
        </div>
    )
}

export default Seller
