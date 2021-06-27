import React, { Component, useEffect, useState } from 'react';



const DropDown = () => {
    const [options, setOptions] = useState([])
    useEffect( () => {
        fetch('http://127.0.0.1:8000/api/dropDown')
        .then(res => res.json())
        .then(data =>setOptions(data))
    },[])
            
           
    return (
        
       
        <div class="container p-5">
            
                <select class="custom-slect">
                    <option selected disable>Select A T-Shirt</option>
                {options.map(option =>
                <option value={option.id}>{option.products}</option>
)}
                </select>


        
                
           
                
            
       
      </div>

     
    );
}
        


export default DropDown;