import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {useState, useEffect} from 'react';

function FILTER(props){
    const classname=document.querySelectorAll(".stars")
    const [color,setcolor] = useState("0")
    const [check,setCheck] = useState("null");
    const [firstbox,setfirstbox] = useState("null");
    const [secondbox,setsecondbox] = useState("null");
    const c = document.getElementById("c1");
    const d = document.getElementById("c2");
    const firstcheckbox = document.getElementById("c1");
    const secondcheckbox = document.getElementById("c2");
    useEffect(()=>{
        classname.forEach((e)=>{
            if(e.id<=color){
                e.classList.add("text-white")
            }
            else{
                e.classList.remove("text-white")
            }
        })
    },[color])
    const rem=()=>{
        if (c===null && d===null && firstcheckbox===null && secondbox===null){
            return;
        }
        else{
            setcolor("0");
            setCheck("null");
            setfirstbox("null")
            setsecondbox("null")
            c.checked=false
            d.checked=false
        }
    }
    function firstchecked(){
        const firstcheckbox = document.getElementById("c1")
        if(firstcheckbox.checked){
            setfirstbox("Out of stocks")
        }
        else{
            setfirstbox("null")
        }
        
    }
    function secondchecked(){
        const secondcheckbox = document.getElementById("c2")
        if(secondcheckbox.checked){
            setsecondbox(secondcheckbox.id)
        }
        else{
            setsecondbox("null")
        }
        
    }

    useEffect(()=>{
        let sendingprops = {
            UD:check,
            stock:firstbox,
            delivery:secondbox,
            rating:color
        }
        props.sendingprops(sendingprops);

    },[check, firstbox,secondbox,color])
    return(
         <div>
            <div className=" text-left text-white text-2xl mb-5">
                <h1>Filter Products</h1>
            </div>
            <div className="flex flex-col text-left leading-10 text-white">
               
                    <div>
                            <input checked={check =="a"} onChange={(e)=>{ setCheck(e.target.id) }} id="a" type="radio" name="filter"></input>
                            <label htmlFor="a" className="ml-2">Ascending</label>
                        </div>
                    <div>
                            <input checked={check=="d"}  onChange={(e)=>setCheck(e.target.id)} id="d" type="radio" name="filter"></input>
                            <label htmlFor="d"  className="ml-2">Descending</label>
                    </div>
               
               <div  className=' text-sm sm:text-base flex flex-row mt-2'>
                    <input id="c1"  onChange={(e)=>{
                        firstchecked()
                        
                    }} type="checkbox"></input>
                    <div className=' text-start whitespace-nowrap'>
                    <label htmlFor="c1"  className="ml-2">Include Out of Stock</label>
                    </div>
                    
               </div>
               <div className=' text-sm sm:text-base mt-4'>
                    <input id="c2"  onChange={(e)=>{
                        secondchecked()
                        }} type="checkbox"></input>
                    <label htmlFor="c2"  className="ml-2">Fast Delivery Only</label>
               </div>
               <div className='flex flex-row'>
                    <p>Rating: </p>
                    <div className='flex felx-row items-center ml-2 text-black mt-1'>
                        <p id="1" className='stars' onClick={()=>setcolor("1")} ><AiFillStar/></p>
                        <p id="2" className='stars'onClick={()=>setcolor("2")} ><AiFillStar/></p>
                        <p id="3" className='stars'onClick={()=>setcolor("3")}><AiFillStar/></p>
                        <p id="4" className='stars'onClick={()=>setcolor("4")}><AiFillStar/></p>
                        <p id="5" className='stars'onClick={()=>setcolor("5")}><AiFillStar/></p>
                        
                    </div>         
               </div>
            </div>
            <div>
                <button onClick={rem} className='bg-white w-full rounded-sm mt-5 p-2 text-xl hover:bg-slate-200'>Clear Filters</button>
            </div>
         </div>
    )
}
export default FILTER;