import './ActionRecord.css'
import { useState } from 'react';
// import './ActionRecord-outline-temp.css'

export default function ActionRecord({actionItem, setStatusActionRecord, whenChangeActionText}) {

    const [actionText, setActionText] = useState(""); 

    const changeActionText = (e) => {        
        setActionText(e.target.value);
        console.log(actionText);
    }

    const changeStatusTo = () => {
        if (actionItem.status !== "Trash") {
            if (actionItem.status === "Done") {
                setStatusActionRecord(actionItem.id, "To Do");
            } else {
                setStatusActionRecord(actionItem.id, "Done");
            }
        }
    };
    
    return (
        <li className = "Actions-list-item">
            
            <button className = "Call-modal-window">               
            </button>
                        
            <input type = "checkbox" class = "Action-checkbox" checked = {actionItem.status === 'Done'} 
                  onChange = {changeStatusTo}></input>
                        
            <span className = "Action-title" onChange = {changeActionText}
                  style = {{textDecoration : (actionItem.status === 'Done') ? 'line-through' : 'none' } }>
                    {actionItem.name}
            </span>
        </li>
    );
}