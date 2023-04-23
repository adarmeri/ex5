import './Spinner.css'
import {useEffect, useState} from 'react';

export default function Spinner()
{
    const [num , setNum] = useState(1+Math.floor(Math.random() * 3));
    useEffect(() => {
        setTimeout(() => {
            setNum(4);
        }, 3000);
      }, []);
    
    return(
        <>
            {num==1 && <div class="loader"></div>}
            {num==2 && <div class="loader1"></div>}
            {num==3 &&<div class="loader2"></div>}
        </>
    );
}