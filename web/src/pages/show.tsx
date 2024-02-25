import { useEffect, useState, useRef } from "react"
import axios  from 'axios'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import {format} from 'date-fns/format'
import Card from "../components/card";




export const Show = () => {
    const [text, setText] = useState([])
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [showDatebox , setShowDatebox] = useState(false)

    
    if(startDate && endDate){
        useEffect(() => {
        
            const fetchData = async () => {
            
                try {
                    const res : any = await axios.get(`http://localhost:3001/show/filter?from=${startDate}&to=${endDate}`, {
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
    }, [startDate , endDate]);

    } else {
        //default view
        useEffect(() => {
        
            const fetchData = async () => {
                
                try {
                    const res : any = await axios.get('http://localhost:3001/show/', {
                        headers: {
                            secret: localStorage.getItem('token')
                        }
                    });
                    setText(Object.values(res.data || {}) || []); //help taken

            
        } catch (err) {
            alert('error came i');
            console.log(err);
        }
            }
        fetchData();
            }, []);
        }
    
    const handleDateChange = async (newDates) => {
        console.log(newDates)
        const newStartDate = newDates.selection.startDate;
        const newEndDate = newDates.selection.endDate;
        
        const formattedStartDate = format(newStartDate , 'yyyy-MM-dd');
        const formattedEndDate = format(newEndDate , 'yyyy-MM-dd');

        setStartDate(formattedStartDate);
        setEndDate(formattedEndDate);
        
      };
      
      const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
    return(
        <>
            <button onClick={() => setShowDatebox(!showDatebox)}> pick date </button>

            {showDatebox &&<DateRangePicker 
                ranges={[selectionRange]}
                onChange = {handleDateChange}
            />}

            {text.map((item, index) => (
                <div key={index}>
                  <Card text = {item.text} dateTime = {item.time} />
                </div>
              ))}  
        
        </>
    )
}