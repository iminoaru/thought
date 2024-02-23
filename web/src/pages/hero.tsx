import { useState } from "react"

import axios  from 'axios'

export const Hero = () => {
    const [secret , setSecret]  = useState('')

    const handleSubmit = async () => {
        try{
            await axios.post('http://localhost:3001/key' , 
            {
                secret : secret
            })
            localStorage.setItem('token' , secret)
            alert('validated')
        } catch(err) {
            alert('nah')
        }
        
    }

    return(
        <>
            <input
                value={secret}
                type="text"
                onChange={(e) => setSecret(e.target.value)}
            />
            <button
                onClick={handleSubmit}
            >validate</button>

        </>
    )
}