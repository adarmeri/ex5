import { useRef, useState } from 'react'

export default function Img()
{
    const [over , setOver] = useState(false);
    const imgRef = useRef("./src/Image/viewImg.jpg");

    const onOver = () => {
        imgRef.current = "./src/Image/mViewImg.jpg";
        setOver(true);
      }

      
    const out = () => {
        imgRef.current = "./src/Image/viewImg.jpg";
        setOver(false);
      }
    

    return (
       <>
        <img src={imgRef.current}  width="500" height="600" onMouseOver={onOver} onMouseOut={out}/>
       </>
     
    )
}