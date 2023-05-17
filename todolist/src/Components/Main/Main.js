import './Main.css'
import './Main-outline-temp.css'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function Main() {
    const INIT_ACTIONS_LIST = [
        {id : uuidv4(), name : "Go to the grocery store",       status : "Done"},
        {id : uuidv4(), name : "Сook food",                     status : "ToDo"},
        {id : uuidv4(), name : "Path the exam",                 status : "ToDo"},
        {id : uuidv4(), name : "Wash the dishes",               status : "ToDo"},
        {id : uuidv4(), name : "Go to karaoke",                 status : "Trash"},
        {id : uuidv4(), name : "Read a lecture",                status : "ToDo"},
        {id : uuidv4(), name : "Сheck homework assignments",    status : "Done"}
    ];
    
    const [actionsList, setActionsList] = useState(INIT_ACTIONS_LIST);
    const [statusValue, setStatusValue] = useState('All');
    
    const handleTypeStatus = (type) => {
        setStatusValue(type)
    }

    const filterActions = (status) => {
        if (status === "All") {
            return actionsList;
        }
        return actionsList.filter( (item) => item.status === status ) ;
    }

    return (    
        <div class>    

            <ul className = "Buttons-list">
                <li className = "Buttons-list-item">
                    <button className = "Set-display-mode Mode-selected" onClick = {() => handleTypeStatus('All')}>
                        All
                    </button>
                </li>
                 <li className = "buttons-list-item">
                    <button className = "Set-display-mode" onClick = {() => handleTypeStatus('ToDo')}>
                        To Do
                    </button>
                </li>
                <li className = "buttons-list-item">
                    <button className = "Set-display-mode" onClick = {() => handleTypeStatus('Done')}>
                        Done
                     </button>
                </li>
                <li className = "buttons-list-item">
                    <button className = "Set-display-mode" onClick = {() => handleTypeStatus('Trash')}>
                        Trash
                    </button>
                </li>
            </ul>    
        
            <p class = "Display-status">statusValue</p>
           
            <hr color="gray" size="2" style = {{ marginBottom: '24px' }} />

            {
                filterActions(statusValue).map(
                    (item) => {
                        return <p>{item.name}</p>
                    }
                )
            }

        </div>
    );
}