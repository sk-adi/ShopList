import React, { useState } from 'react'
import List from './List'

export default function Form() {
const listarr=[]
const [text,setText]=useState('')
const [addeditem,newaditem]=useState('')

const handleChange=(event)=>{
    setText(event.target.value)
}



const addit=()=>{
    const newitem=text.trim()
    listarr.push(newitem)
    setText('')
    console.log(listarr)
    newaditem(newitem)

    
}


const handleclear=()=>{
    newaditem('')
}

    return (
        <>
        <div className="container my-4">
            <h1 className="mt-5">My Shopping List</h1>
            <div className="mt-3">
                <textarea className="form-control" onChange={handleChange} value={text} id="shoplist" rows="3"></textarea>
            </div>
            <div className="text-end">
                <button type="button" onClick={addit} class="btn btn-primary my-3">Add to the list</button>
            </div>
            <div className="text-end">
                <button type="button" onClick={handleclear} class="btn btn-primary my1">Clear List</button>
            </div>

        </div>
        <List newitem={addeditem}/>
        </> 
    )
}
