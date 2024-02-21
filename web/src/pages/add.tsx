import { useState } from "react"
import axios  from 'axios'
export const Add = () => {
    const [input, setInput] = useState<string>('')

    const handleSubmit = async () => {
        try{
            const res : object = await axios.post('https://localhost:3001/add' , 
            {
                text : input    
            }, {
                headers : {
                    secret : localStorage.getItem('token')
                }
            })
            alert('added task')
        } catch(err) {
            alert('error came')
        }
        
    }
    return(
        <>
    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
    <button onClick={handleSubmit}>add</button>
        </>
    )
}