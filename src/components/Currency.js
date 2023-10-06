import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

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
            <div className= 'alert alert-success'>
            <span className="dropdown-select">Currency </span>
                <select 
                    className="custom-dropdown mb-1" 
                    onChange={handleCurrencyChange}
                    >
                <option className="dropdown-option" value="Dollar" name="dollar">$ Dollar</option>
                <option className="dropdown-option" value="Pound" name="pound">£ Pound</option>
                <option className="dropdown-option" value="Euro" name="euro">€ Euro</option>
                <option className="dropdown-option" value="Ruppee" name="ruppee">₹ Ruppee</option>
                  </select>
                    
                
            </div>
        </div>
    );
};

export default Currency;
