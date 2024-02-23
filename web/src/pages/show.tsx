import { useEffect, useState } from "react"
import axios  from 'axios'
export const Show = () => {
    const [text, setText] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // http://localhost:3001/show/filter?from=2024-02-22&to=2024-02-24
                const res : any = await axios.get('http://localhost:3001/show/', {
                    headers: {
                        secret: localStorage.getItem('token')
                    }
                });
                setText(Object.values(res.data || {}) || []); //help taken

                
                alert('showing');
            } catch (err) {
                alert('error came');
                console.log(err);
            }
        };
        fetchData();
    }, []);
    console.log(text)
    return(
        <>
        
            {text.map((item, index) => (
                <div key={index}>
                  <p>{item.text} :  {item.time}</p>
                  <br/>
                </div>
              ))}
        
        </>
    )
}