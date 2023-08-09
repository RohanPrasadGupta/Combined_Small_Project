import React, { useState } from 'react'
import ListIcon from './ListIcon'
import MainTodoLists from './MainTodoLists';

const MainHeadTodo = () => {

    const[text,setText] =  useState('');
    const [list, setList] = useState([]);

    const textChange=(event)=>{
        setText(event.target.value)
    }

    const onAddBtn=()=>{
        if(text===''){
            alert('Enter Text to add..')
        }
        else{
            setList((allItem)=>{
                return [...allItem,text]
            })
        }
        setText('')
    }

    const deleteItem=(id)=>{
        setList((oldItems)=>{
            return oldItems.filter((arrEle,index)=>{
                return index !== id
            })
        })

    }


  return (
    <>
    <div className=" w-[70%] m-auto mt-14 bg-black/50 p-3 rounded-lg">

    <div className='flex mb-6 justify-center'>
        <h1 className='font-bold text-[22px] underline underline-offset-2'>
        Todo APP... 
        </h1>
        <ListIcon className='w-8 h-8 ml-4'/>
    </div>
    <div className='flex justify-center mb-4'>
        <input type='text' value={text} onChange={textChange} className='border-0 p-3 rounded-2xl flex-1  ' placeholder='Enter task to add on list...'>
        </input>
        <button className='ml-2 bg-orange-500 p-3 rounded-2xl font-bold text-[15px] text-white hover:bg-green-500 cursor-pointer ' onClick={onAddBtn}> Add</button>
    </div>

    <div className='flex text-left ml-6'>
        <ul>
            {
            list.map((itemval,index)=>{
                return(
                    <MainTodoLists 
                    text = {itemval}
                    id ={index}
                    key = {index}
                    onSelect={deleteItem}  />
               
                )
            })
            }
        </ul>
    </div>
    </div>
    
    
    </>
  )
}

export default MainHeadTodo