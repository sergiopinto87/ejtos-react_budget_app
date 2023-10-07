import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget , dispatch, expenses, currencySymbol} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);


    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        
        if( event.target.value >= totalExpenses) {

            setNewBudget(event.target.value);
            
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }            
            
        else {
            alert("You cannot reduce the budget value lower than the spending");
            return
            }

    }
    
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currencySymbol}</span>

<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>

</div>
    );
};
export default Budget;