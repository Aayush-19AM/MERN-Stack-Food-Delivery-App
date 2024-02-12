import React,{useState,useRef,useEffect} from "react";
import {useDispatchCart,useCart} from './ContextReducer'

function Card(props) {
 
  const priceref=useRef()
  let data=useCart()
  let dispatch=useDispatchCart();
  let options=props.options;
  let priceOptions=Object.keys(options)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('')
  // let foodItem=props.foodItems;  no need of this bcoz we r using props.foodItem directly


  const handleAddtoCart=async()=>{

    let food=[]
    for(const item of data){
      if (item.id===props.foodItem._id) {
        food=item
        break;
      }
    }
    if (food!==[]) {
      if (food.size===size) {
        await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
        return
      }else if (food.size !==size) {
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:parseInt(qty),size:size})
        // console.log(data)
return
      }
return
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:parseInt(qty),size:size})

  }

  let finalPrice=qty*parseInt(options[size]);

  useEffect(() => {
    setSize(priceref.current.value)

  }, [])
  

  return (
    <div>
      <div className="card mt-3" style={{ "width": "16rem","maxHeight": "460px" }}>
        <img
        src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{height:"150px",objectFit:"fill"}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          {/* <p className="card-text">{props.description}</p>  //add this later on */}
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceref} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data)=>{
                return <option value={data} key={data} >{data}</option>
              })}
            </select>
            {/* make it inline flex */}
              <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div> 
              <hr />
              <div className="btn bg-success text-white" onClick={handleAddtoCart} style={{"transition":" 0.3s"}}>Add to Cart</div>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
