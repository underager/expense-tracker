import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [itemText, setItemText] = useState('');
    const [itemAmount, setItemAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const updateItemName = (e) =>{
        setItemText(e.target.value);
    };

    const updateItemAmount = e =>{
       setItemAmount(e.target.value);
    };

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(!itemText){
            alert('Name is required!!!');
            return;
        }

        if(Number.isNaN(Number(itemAmount))){
            alert('Amount is required!!!');
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random()*1000),
            itemText,
            itemAmount : Number(itemAmount)
        };

        addTransaction(newTransaction);
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label> Item :</label><br/>
                <input type="text" value={itemText} onChange={updateItemName} /><br/>
                <label>Amount (negative - for expense): </label><br/>
                <input type='number' value={itemAmount} onChange={updateItemAmount} /><br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default AddTransaction
