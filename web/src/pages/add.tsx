import { useState } from "react"
import axios  from 'axios'
export const Add = () => {
    const [input, setInput] = useState<string>('')

    const handleSubmit = async () => {
        try{
            await axios.post('http://localhost:3001/add' , 
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
            console.log(err)
        }
        
    }
    return(
        <>
    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
    <button onClick={handleSubmit}>add</button>
        </>
    )
}