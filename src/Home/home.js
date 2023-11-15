import Filter from "./Pfilter.js";
import Content from "./content.js";
import { useEffect, useState } from 'react';
function HOME(props){
  const [filteredItem, setFilteredItem] = useState("empty");
  const [share, setShare] = useState({
    item:"",price:"",time:"",value:""
  });
  const details=
  [
  {item:"Unbranded Fresh Bike",price:"Rs 433", time:"4 days delivery", rate:"4",value:"7"},
  {item:"Refined Wooden Soap", price:"Rs 233", time:"Fast Delivery", rate:"2", value:"6"},
  {item:"Licensed Soft Chips", price:"RS 1000", time:"Fast Delivery", rate:"4", value:"5"},
  {item:"Ergonomic Rubber Chair", price:"RS 675", time:"4 days delivery", rate:"5", value:"1"},
  {item:"Handcrafted Plastic Pizza", price:"RS 680", time:"Fast Delivery", rate:"1", value:"2"},
  {item:"Handmade Frozen Keyboard", price:"RS 830", time:"4 days delivery", rate:"3", value:"3"},
  {item:"Unbranded Soft Salad", price:"RS 847", time:"Will be in stock soon", rate:"2", value:"8"},
  {item:"Handmade Rubber Keyboard", price:"RS 953", time:"4 days Delivery", rate:"5", value:"4"},
  {item:"Zebra Bag", price:"RS 953", time:"Out of stocks", rate:"4", value:"9"},
  ]
  const [detail, setDetail] = useState([
    {item:"",price:"", time:"", rate:"",value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    {item:"", price:"", time:"", rate:"", value:""},
    ])
    let content = document.querySelectorAll(".content")
  useEffect(()=>{
    const value = filteredItem.id;
    if(filteredItem=="empty"){
      return;
    }
    else{
    // console.log(filteredItem.children[2].textContent)
    setShare({
      item:filteredItem.children[0].textContent,
      price:filteredItem.children[1].textContent,
      time:filteredItem.children[2].textContent,
      id:value
    })
    // console.log(filteredItem)
  }},[filteredItem]) 
  useEffect(()=>{
    props.setHeading(share);
  },[share])

 



const receivingprops=(data)=>{
  console.log(data)
  if(data.UD==="null" && data.stock==="null" 
     && data.delivery==="null" && data.rating==="0")
  {
      // setDetail([
      //   {item:"Unbranded Fresh Bike",price:"Rs 433", time:"4 days delivery", rate:"4",value:"7"},
      //   {item:"Refined Wooden Soap", price:"Rs 233", time:"Fast Delivery", rate:"2", value:"6"},
      //   {item:"Licensed Soft Chips", price:"RS 1000", time:"Fast Delivery", rate:"4", value:"5"},
      //   {item:"Ergonomic Rubber Chair", price:"RS 675", time:"4 days delivery", rate:"5", value:"1"},
      //   {item:"Handcrafted Plastic Pizza", price:"RS 680", time:"Faast Delivery", rate:"1", value:"2"},
      //   {item:"Handmade Frozen Keyboard", price:"RS 830", time:"4 days delivery", rate:"3", value:"3"},
      //   {item:"Unbranded Soft Salad", price:"RS 847", time:"Will be in stock soon", rate:"2", value:"8"},
      //   {item:"Handmade Rubber Keyboard", price:"RS 953", time:"4 days Delivery", rate:"5", value:"4"},
      //   {item:"Zebra Bag", price:"RS 953", time:"Out of stocks", rate:"4", value:"9"},
    
      // ])
      content.forEach((e)=>{
        e.classList.remove("hidden")
      })
      setDetail(details)
  }
  else{
      if(data.UD==="a"){
        let z=[];
        for(let i=1;i<=9;i++){
          // console.log(i)
          detail.map((e)=>{
            if(`${i}`===e.value){
              z.push(e)
            }

          })
        }
        setDetail(z)
        content.forEach((e)=>{
          if(data.stock==="null" && data.delivery==="null" && data.rating=="0"){
            e.classList.remove("hidden")
          }
          else{
            content.forEach((e)=>{
              if(data.stock==="null"){
                // e.classList.remove("hidden")
                if(data.delivery!=="null"){
                  if(e.getAttribute("time")==="Fast Delivery"){
                    if(data.rating=="0"){
                      e.classList.remove("hidden")
                    }
                    else{
                      if(data.rating===e.getAttribute("rate")){
                        e.classList.remove("hidden")
                      }
                      else{
                        e.classList.add("hidden")
                      }
                    }
                   
                  }
                  else{
                    e.classList.add("hidden")
                  }
                }
                else{
                  if(data.rating===e.getAttribute("rate")){
                    e.classList.remove("hidden")
                  }
                  else{
                    e.classList.add("hidden")
                  }

                }
              }
              else{
                if(e.getAttribute("time")==="Out of stocks"){
                  if(data.delivery=="null" && data.rating=="0"){
                    e.classList.remove("hidden")
                  }
                  else{
                    if(data.delivery!=="null" ){
                      if(e.getAttribute("time")==="Fast Delivery"){
                        if(data.rating=="0"){
                          e.classList.remove("hidden")
                        }
                        else{
                          if(data.rating===e.getAttribute("rate")){
                            e.classList.remove("hidden")
                          }
                          else{
                            e.classList.add("hidden")
                          }
                        }
                       
                      }
                      else{
                        e.classList.add("hidden")
                      }
                    }
                    else{
                      if(data.rating==e.getAttribute("rate")){
                        e.classList.remove("hidden")
                      }
                      else{
                        e.classList.add("hidden")
                      }

                    }
                  }
                }
                else{
                  e.classList.add("hidden")
                }
                
              }
            })
          }
        })
      }
      else if(data.UD==="d"){
        let z=[];
        for(let i=9;i>=1;i--) {
          detail.map((e)=>{
            if(`${i}`===e.value){
              z.push(e)
            }
          })
        }
        setDetail(z)
        content.forEach((e)=>{
          if(data.stock==="null" && data.delivery==="null" && data.rating=="0"){
            e.classList.remove("hidden")
          }
          else{

            content.forEach((e)=>{
              if(data.stock==="null"){
                // e.classList.remove("hidden")
                if(data.delivery!=="null"){
                  if(e.getAttribute("time")==="Fast Delivery"){
                    if(data.rating=="0"){
                      e.classList.remove("hidden")
                    }
                    else{
                      if(data.rating===e.getAttribute("rate")){
                        e.classList.remove("hidden")
                      }
                      else{
                        e.classList.add("hidden")
                      }
                    }
                   
                  }
                  else{
                    e.classList.add("hidden")
                  }
                }
                else{
                  if(data.rating===e.getAttribute("rate")){
                    e.classList.remove("hidden")
                  }
                  else{
                    e.classList.add("hidden")
                  }

                }
              }
              else{
                if(e.getAttribute("time")==="Out of stocks"){
                  if(data.delivery=="null" && data.rating=="0"){
                    e.classList.remove("hidden")
                  }
                  else{
                    if(data.delivery!=="null" ){
                      if(e.getAttribute("time")==="Fast Delivery"){
                        if(data.rating=="0"){
                          e.classList.remove("hidden")
                        }
                        else{
                          if(data.rating===e.getAttribute("rate")){
                            e.classList.remove("hidden")
                          }
                          else{
                            e.classList.add("hidden")
                          }
                        }
                       
                      }
                      else{
                        e.classList.add("hidden")
                      }
                    }
                    else{
                      if(data.rating==e.getAttribute("rate")){
                        e.classList.remove("hidden")
                      }
                      else{
                        e.classList.add("hidden")
                      }

                    }
                  }
                }
                else{
                  e.classList.add("hidden")
                }
                
              }
            })
          //   content.forEach((e)=>{
          //     if(data.stock==="null"){
          //       // e.classList.remove("hidden")
          //       if(e.getAttribute("time")==="Fast Delivery"){
          //         e.classList.remove("hidden")
          //       }
          //       else{
          //         e.classList.add("hidden")
          //       }
          //     }
          //     else{
          //       if(e.getAttribute("time")==="Out of stocks"){
          //         e.classList.remove("hidden")
          //       }
          //       else{
          //         e.classList.add("hidden")
          //       }
                
          //     }
          //   })
           }
        })
      }
      else{
        content.forEach((e)=>{
          // console.log(e)
          if(data.stock==="null" && data.delivery==="null" && data.rating==="0"){
            // e.classList.remove("hidden")      
                  e.classList.remove("hidden")
          }
          // else if(data.stock==="Out of stocks" && data.delivery==="null" && data.rating==="0"){
          //   if(e.getAttribute("time")==="Out of stocks"){
          //     e.classList.remove("hidden")
          //   }  
            // else{
            //   e.classList.add("hidden")
            // }
          // }
          else if(data.stock==="null" && data.delivery==="c2" && data.rating==="0"){
            if(e.getAttribute("time")==="Fast Delivery"){
              e.classList.remove("hidden")
            }
            else{
              e.classList.add("hidden")
            }
          }
          else if(data.stock==="null" && data.delivery==="null" && data.rating===e.getAttribute("rate")){
            e.classList.remove("hidden")
          }
          else{
             if(e.getAttribute("time")==="Out of stocks" && data.delivery==="null" && data.rating==="0"){
                e.classList.remove("hidden")
             }
             else if(e.getAttribute("time")==="Out of stocks" && data.delivery==="c2" && data.rating==="0" ){
                if(e.getAttribute("time")==="Out of stocks" && data.delivery==="Fast Delivery"){
                  e.classList.remove("hidden")
                }
                else{
                  e.classList.add("hidden")
                }
                  
             }
             else if(data.stock==="Out of stocks" && data.delivery==="c2" && data.rating===e.getAttribute("rate")){
                 if(data.stock==="Out of stocks" && e.getAttribute("time")==="Fast Delivery" && data.deliver==="c2" && data.rating===e.getAttribute("rate")){
                  e.classList.remove("hidden")
                 }
                 else{
                  e.classList.add("hidden")
                 }
               
                
             }
             else if(e.getAttribute("time")==="Out of stocks" && data.delivery==="null" && data.rating===e.getAttribute("rate")){
                e.classList.remove("hidden")
                
            }
            else if(e.getAttribute("time")==="Fast Delivery" && data.delivery==="c2" && data.rating===e.getAttribute("rate")){
              if(e.getAttribute("time")==="Fast Delivery" && data.delivery==="c2" && data.rating===e.getAttribute("rate")) 
              e.classList.remove("hidden")
               
              }
              
              else{
                   e.classList.add("hidden")
                   
              }
            
          }
        })

      }


   
      


  }
}
 

    return(
        <div className=" flex flex-row p-3 pt-28 pb-7 ">
            <div className="bg-red-500 p-3  h-full pb-10 sticky top-28 sm:top-20">
               <Filter sendingprops={receivingprops}/>
            </div>
            <div className=" sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 bg-yellow-300 grid gap-3 p-12 ">    
                <div className="content" time={detail[0].time} rate={detail[0].rate}>           
                  <Content  item={detail[0].item} price={detail[0].price} time={detail[0].time} rate={detail[0].rate} value={detail[0].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[1].time} rate={detail[1].rate}>    
                   <Content item={detail[1].item} price={detail[1].price} time={detail[1].time} rate={detail[1].rate} value={detail[1].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[2].time} rate={detail[2].rate}>
                   <Content item={detail[2].item} price={detail[2].price} time={detail[2].time} rate={detail[2].rate} value={detail[2].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[3].time} rate={detail[3].rate}>
                  <Content item={detail[3].item} price={detail[3].price} time={detail[3].time} rate={detail[3].rate} value={detail[3].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[4].time} rate={detail[4].rate}>
                  <Content item={detail[4].item} price={detail[4].price} time={detail[4].time} rate={detail[4].rate} value={detail[4].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[5].time} rate={detail[5].rate}>
                  <Content item={detail[5].item} price={detail[5].price} time={detail[5].time} rate={detail[5].rate} value={detail[5].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[6].time} rate={detail[6].rate}>
                  <Content item={detail[6].item} price={detail[6].price} time={detail[6].time} rate={detail[6].rate} value={detail[6].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[7].time} rate={detail[7].rate}>
                  <Content item={detail[7].item} price={detail[7].price} time={detail[7].time} rate={detail[7].rate} value={detail[7].value} setFilteredItem={setFilteredItem} />
                </div>
                <div className="content" time={detail[8].time} rate={detail[8].rate}>
                  <Content item={detail[8].item} price={detail[8].price} time={detail[8].time} rate={detail[8].rate} value={detail[8].value} setFilteredItem={setFilteredItem} />
                </div>
                
                {/* <Content item="Refined Wooden Soap" price="Rs 233" time="Fast Delivery" rate="2" value="7" setFilteredItem={setFilteredItem}/>
                <Content item="Awesome Metal Chips" price="Rs 77" time="4 days delivery" rate="3" value="1" setFilteredItem={setFilteredItem}/>
                <Content item="Licensed Soft Chips" price="RS 1000" time="Fast Delivery" rate="4" value="6" setFilteredItem={setFilteredItem}/>
                <Content item="Ergonomic Rubber Chair" price="RS 675" time="4 days delivery" rate="5" value="2" setFilteredItem={setFilteredItem}/>
                <Content item="Handcrafted Plastic Pizza" price="RS 680" time="Faast Delivery" rate="1" value="3" setFilteredItem={setFilteredItem}/>
                <Content item="Handmade Frozen Keyboard" price="RS 830" time="4 days delivery" rate="3" value="4" setFilteredItem={setFilteredItem}/>
                <Content item="Unbranded Soft Salad" price="RS 847" time="Will be in stock soon" rate="2" value="9" setFilteredItem={setFilteredItem}/> 
                <Content item="Handmade Rubber Keyboard" price="RS 953" time="4 days Delivery" rate="5" value="5" setFilteredItem={setFilteredItem}/>  */}
            </div>
        </div>
    )
}
export default HOME;