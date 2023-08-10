import React from 'react'
import CrossIcon from './CrossIcon'

const MainTodoLists = (props) => {
  return (
    <>
    <div className='flex items-center'>

        <button className='border-2 border-solid border-black p-3 mb-2  w-6 h-6  rounded-full text-center bg-green-400 hover:bg-red-500 hover:text-white hover:border-white items-center flex justify-center' 
        onClick={()=>{
                    props.onSelect(props.id);
                    console.log(props.id)
                }}>
        <CrossIcon  />
        </button> 
        
        <p className='text-center text-white mb-2 ml-2 text-[18px] font-bold '>{props.id + 1}&nbsp;:</p> 
         <li className='ml-2 text-[18px] text-white capitalize mb-2 font-semibold hover:underline'>{props.text}</li>
    </div>
    </>
  )
}

export default MainTodoLists