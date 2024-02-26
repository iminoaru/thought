import { useState } from "react"
import axios  from 'axios'
import Alert from "../components/alert"
import { Link } from "react-router-dom"
export const Add = () => {
    const [input, setInput] = useState<string>('')
    const [showAlert , setShowAlert] = useState(false)

    const handleSubmit = async () => {
        if(input !== ''){
            try{
            await axios.post('http://localhost:3001/add' , 
            {
                text : input    
            }, {
                headers : {
                    secret : localStorage.getItem('token')
                }
            })
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false);
              }, 1500);
        } catch(err) {
            alert('error came')
            console.log(err)
        }
        }
    }
    return(
        <>
            <Link to="/show">
                <button> 👀 </button>
            </Link>
            <br/>
    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
    <button onClick={handleSubmit}>add</button>
    {showAlert && <Alert message="✅  Text added" />}

        </>
    )
}