import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState, useEffect,useRef} from 'react';

function CONTENT(props){
    //CODE FOR GETTING THE REQUIRED INFORMATION FOR USING IT---- 
    //--IN ADDING TO THE CART AND TO MAKE APROPRIATE CHANGES--
    //--ACCORDING TO THE FILTER. 
    const w = useRef();
    

    // CODE FOR ADDING THE NUMBER OF START(RATING)
    let a=props.rate;
    let r=a-1;
    function icon(){
        let j=[];
        for(let i=0;i<5;i++){
            const iconn = <AiFillStar/>
            if(i<=r){
                j.push(iconn)
            }        
       }
        return j;
    }
    function dj(){
        let k=[];
        for(let i=0;i<5;i++){
            const m = <AiOutlineStar/>
            if(i>r){
                 k.push(m);
            }     
       }
          return k;
    }
       
    return( 
        <div>
            <div>
                <div ref={w} id={props.value} value={props.value} className='check flex flex-col leading-7 border-2 border-black rounded-md p-2'>
                    <h1 className='five  font-bold text-lg'>{props.item}</h1>
                    <p>{props.price}</p>
                    <p>{props.time}</p>
                    <div  className='flex flex-row justify-center mt-2 mb-2'>
                        <p className='flex flex-row'>{icon()}</p>
                        <p className='flex flex-row'>{dj()}</p>
                    </div>
                    <button id="firstbutton" onClick={()=>{
                        props.setFilteredItem(w.current);
                        // console.log(w.current)
                        // props.setFilteredItem(heading.item);
                        }} className=' bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition duration-100'>Add to Cart</button>
                </div>
                
            </div> 
        </div>
    )
}
export default CONTENT;