import React from 'react'
const MainTodoLists = (props) => {
  return (
    <>
    <div className='flex items-center'>

        <button className='border-2 border-solid border-black mb-2  w-5 h-5  rounded-full text-center text-[12px] font-bold bg-green-400 hover:bg-red-500 hover:text-white hover:border-white' 
        onClick={()=>{
                    props.onSelect(props.id);
                    console.log(props.id)
                }}>
        X</button> 
        <p className='text-center mb-2 ml-2 text-[16px] font-bold '>{props.id + 1}&nbsp;:</p> 
         <li className='ml-2 text-[16px] capitalize mb-2 font-semibold hover:underline'>{props.text}</li>
    </div>
    </>
  )
}

export default MainTodoLists