import React, { Component, useEffect, useState } from 'react';



const DropDown = () => {
    const [options, setOptions] = useState()
    useEffect( () => {
        fetch('http://127.0.0.1:8000/api/dropDown')
        .then(res => res.json())
        .then(data =>console.log(data))
    })
            
           
    return (
        
       
        <div class="container p-5">
            
                <select class="custom-slect">
                {/* {options.map(option =>
                <option value={option}>{option.products}</option>
)} */}
                </select>

        
                
           
                
            
       
      </div>

     
    );
}
        


export default DropDown;