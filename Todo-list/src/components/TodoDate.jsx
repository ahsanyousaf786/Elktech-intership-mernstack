import { useEffect, useState } from "react";

const TodoDate = () => {

 const [dateAndTime, setDateAndTime] = useState();

useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateAndTime(`${formattedDate} - ${formattedTime}`);
        }, 100)

        return () => clearInterval(interval);
    }, [])


    return (
               <h2 className='date-time' > {dateAndTime}</h2>
    )
}

export default TodoDate;