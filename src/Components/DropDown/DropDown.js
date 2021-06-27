import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';



const DropDown = () => {
    // const [options, setOptions] = useState()
    // useEffect( () => {
    //     fetch('http://127.0.0.1:8000/api/dropDown')
    //     .then(res => res.json())
    //     .then(data =>setOptions(data))
    // })

    this.state = [
       
        {products: "T-Shirt", id: 1},
        {products: "Shirt", id: 2},

    ];
            
           
    return (
        
       
        <div class="container p-5">
            {this.state.map((option) =>{
                return(
               <h1>{option.products}</h1>
                );

            }
                )}
           
                
            
       
      </div>

     
    );
}
        


export default DropDown;