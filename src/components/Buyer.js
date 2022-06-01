import axios from 'axios'
import React from 'react'
import  { useEffect,useState } from 'react'
import '../styles/buyer.css'

const Buyer = () => {

   const [sellers, setSellers] = useState({})
   const [code, setCode] = useState('')

    const changeCode = (e) => {
        setCode(e.target.value)
    }

    //const getSeller = async () => {
        //const res = await axios.get('http://localhost:5000/api/buyer')

        //console.log('good')

        //setSellers(res.data.sellers)
    //}

    //useEffect(()=>{
       // getSellers()
    //}, []) 

    const submit = async (e) => {
        e.preventDefault()

        const body = JSON.stringify({
            code: code
        })
        //the key value of phone,email,items is used on the backend.
        //Sending to the backend from this front end and backend port number 5000
    const response = await axios.post('http://localhost:5000/api/buyer', body, {
        
        headers: {'Content-Type':'application/json'}
    })
      //response comes as json from the backend to confirm the data sent was done successfully      
            console.log(response.data.sellers)
            //setMessage(response.data.confirmation)
           //const data = await response.json()
                setSellers(response.data.sellers)
        //getSeller()
    }






    return (
    <div className='buyers'>
        <div className='purchase'>
        <div className="buy"  >
            <form className="buyer" onSubmit={submit}>
            
        
                <p>Enter Transaction Code:</p>
                <input type="text" name="code" id="code" value={code} placeholder='Enter Code' onChange={changeCode} /> <br /> <br />
                <button type='submit' >Submit Code</button>
            </form> <br />
            <div className='details'>
                
                <p>Transaction Details:</p>
                <p>Seller: {sellers.buyerEmail} </p>
                <p>Agreed Price:</p>
                <p>Items: {sellers.buyerItems} </p>

                <div className='buys'>
                <div className='yes'>
                <p>Are you satisfied with your items?</p>
                <input type="radio" name="pick" id="pick1" />
                <label htmlFor="pick1">YES</label> <br /><br />
                <input type="radio" name="pick" id="pick2" />
                <label htmlFor="pick2">NO</label>
            
            </div>
            
                
        </div> <br />
    

                <div className='money'>
                <button>Send Money to Middleman</button>
 
                </div>
                           
            </div>
            
        </div>
        

        </div>
        </div>
    )
}

export default Buyer
