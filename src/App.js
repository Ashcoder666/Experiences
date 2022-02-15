import React,{useEffect, useState} from 'react'
import Axios from "axios"
import './app.css'

const App = () => {
    const [review,setReview] = useState([])
    const [loading,setLoading] = useState(true);
    const [val,setval] = useState(0)
    const fetchReview = async() =>{
        await Axios.get('http://localhost:3001/tour-api').then(response=>{
         setReview(response.data)
        })
        setLoading(false)
    }
    useEffect(()=>{
       
        fetchReview();
       
    },[])



    if(loading){
        return(
            <div>

            <h1>Loading....</h1>
            </div>
        )
    }
    const {name,id,description,travelExpense,image} = review[val]
  return (
    <div className='main-body'>
     <div className='button' >
        {review.map((item,index)=>{
            return <div> <button onClick={()=>{setval(index)}} >{item.name}</button></div>
            
        })}
     </div>
     <div className='details' >
         {name}
         {description}
         {travelExpense}
         <img src={image} alt={name} />

     </div>
    </div>
  )
}

export default App
