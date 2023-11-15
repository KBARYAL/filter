import { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
function CART(props){
    const [info,setinfo] = useState([])
    useEffect(()=>{
        console.log(info)
        setinfo(props.Sending)
    },[props.Sending])
    return(
        <div className=" bg-white pt-24 pb-14">
            <h1 className=" text-4xl font-serif text-red-400 m-4">CART</h1>
            <div className=" ">
            {info.map((e)=>{
                return(
                    <div className=" leading-6 border-2 border-black m-3 text-left p-6 flex flex-row items-center">
                        <div  className="flex-1">
                        <h3>Item: {info.indexOf(e)+1}</h3>
                        <h1 className=" text-2xl">{e.item}</h1>
                        <p className=" text-xl">{e.price}</p>
                        </div>
                        <div className=" flex flex-col">
                            <button className="text-xl font-serif b-2 bg-yellow-300 p-1 rounded-md text-green-700">Procede To buy</button>
                            <button>coming soon</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        
    )
}
export default CART; 