import React from 'react';
import CART from '../GoToCart/cart';
import {HashLink} from 'react-router-hash-link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import { useEffect, useState,useRef } from 'react';
import { ImBin } from "react-icons/im";
function NAVBAR(props){
   const [a,b] = useState([])
   const [count,setCount]=useState(100)
   const w = useRef()
   const buttonref = React.createRef();

    useEffect(()=>{
        const drop = document.querySelector("#drop");
        const down = document.querySelector("#down");
        drop.addEventListener("click",()=>{
            down.classList.toggle("h-fit")
            down.classList.toggle("bg-white")
        })
    },[])   
    useEffect(()=>{
        if(props.name){
        b([...a,{item:props.name,price:props.price,value:(count)}])
       
       console.log(props.name)
        setCount(count+1)
        }
        
    },[props.name])
  

   
    function remove(e){
        let z = a.filter((c)=>{
            return e!==c.value
        })
        console.log(z)
        b(z)
    }
    useEffect(()=>{
        props.setSending(a)
    },[a])
    return(
        <div className=' fixed w-full'>
            <div  className=' border-2 border-black bg-purple-500 grid grid-cols-3 p-4'>
                <HashLink to="/">
                    <div className=' text-white text-3xl font-serif'>
                        <p>React Shop</p>
                    </div>
                </HashLink>
                <div>

                </div>
               
                <div className='flex justify-center mr-20 sm:mr-0'>
                    <button id="drop" className='relative bg-green-500 p-1 rounded-md hover:bg-green-600 transition duration-100'>
                        <div  className=' flex flex-row gap-2'>
                            <div className=' text-4xl text-white'>
                                <AiOutlineShoppingCart/>
                            </div>
                            <div className=' text-2xl text-white flex items-center'>
                                <AiFillCaretDown/>
                            </div>
                        </div>
                    </button> 
                    <div id="down" className='absolute h-0 duration-75 overflow-hidden mt-11 w-52 rounded-md p-2'>
                        <div className=' text-left leading-10'>
                            {a.map((e)=>{
                                // console.log(count)
                                // console.log(e.item)
                                // console.log(e.value)
                                return(
                                <div ref={w} id={e.value}  className='border-2 black mt-2 p-1'>
                                    <h1 className='font-bold text-lg'>{e.item}</h1>
                                    <div>
                                        <p>{e.price}</p>
                                        <button ref={buttonref} id={e.value} className='check' onClick={()=>remove(e.value)}>
                                                <ImBin/>
                                        </button>
                                    </div>    
                                </div>
                            )

                            })}
                            <HashLink to="/Cart">
                            <button className='mt-2 bg-blue-600 w-full rounded-lg p-1 text-white hover:bg-blue-500'>Go To Cart</button>
                            </HashLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NAVBAR;