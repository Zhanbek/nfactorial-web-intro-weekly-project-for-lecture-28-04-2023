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
    
    const [displayMode, setDisplayMode] = useState('DisplayAll');
    const [actionsList, setActionsList] = useState(INIT_ACTIONS_LIST);

    let statusValue = '';
    
    switch (displayMode) {
        case 'DisplayActionsWithToDoStatus': 
            statusValue = 'ToDo';
            break;
        case 'DisplayActionsWithDoneStatus': 
            statusValue = 'Done';
            break;
        case 'DisplayActionsWithTrashStatus': 
            statusValue = 'Done';
            break;
        case 'DisplayAll': 
            statusValue = null;
            break;
        default:
            statusValue = null;
            break;
    }
    
    const actionsToDisplay = actionsList.filter((item) => item.status === ( (statusValue === null) ? item.status : statusValue ) );

    return (        
        <ul className = "Buttons-list">
            <li className = "Buttons-list-item">
                <button className = "Set-display-mode Mode-selected">
                    All
                </button>
            </li>
            <li className = "buttons-list-item">
                <button className = "Set-display-mode">
                    To Do
                </button>
            </li>
            <li className = "buttons-list-item">
                <button className = "Set-display-mode">
                    Done
                </button>
            </li>
            <li className = "buttons-list-item">
                <button className = "Set-display-mode">
                    Trash
                </button>
            </li>

            {
               actionsToDisplay.map((item, index) => <div>{item.name}</div>)                     
            }
        </ul>        
    );
}