import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    //const [name, setName] = useState('');

           
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
            
            dispatch({
                type: 'CHG_CURRENCY',
                payload: newCurrency
            });
        }            
          
         

    return (
        <div>
            <div className= 'alert alert-secondary'>
                  <select 
                    className="btn btn-success dropdown-toggle" 
                    data-toggle="dropdown"
                    id="dropdown-basic" onChange={handleCurrencyChange}
                    >
                <option defaultValue>Choose...</option>
                <option value="Dollar" name="dollar">$ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                  </select>
                
            </div>
        </div>
    );
};

export default Currency;
