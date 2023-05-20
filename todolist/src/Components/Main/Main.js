import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Main.css'
import './Main-outline-temp.css'
import ActionRecord from "../ActionRecord/ActionRecord"


export default function Main() {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);

    const [isModalVisibleForToDoList, setIsModalVisibleForToDoList] = useState(false);

    const [isModalVisibleForTrashList, setIsModalVisibleForTrashList] = useState(false);

    const INIT_ACTIONS_LIST = [
        {id : uuidv4(), name : "Go to the grocery store",       status : "Done"},
        {id : uuidv4(), name : "Сook food",                     status : "To Do"},
        {id : uuidv4(), name : "Path the exam",                 status : "To Do"},
        {id : uuidv4(), name : "Wash the dishes",               status : "To Do"},
        {id : uuidv4(), name : "Go to karaoke",                 status : "Trash"},
        {id : uuidv4(), name : "Read a lecture",                status : "To Do"},
        {id : uuidv4(), name : "Сheck homework assignments",    status : "Done"}
    ];
    
    const [actionsList, setActionsList] = useState(INIT_ACTIONS_LIST);
    const [statusValue, setStatusValue] = useState('All');

    const [actionName, setActionName] = useState('');
    const [itemToTrash, setItemToTrash] = useState(null);
    const [itemToToDo, setItemToToDo] = useState(null);
    
    const handleTypeStatus = (type) => {
        setStatusValue(type)
    }

    const filterActions = (status) => {
        if (status === "All") {
            return actionsList;
        }
        return actionsList.filter( (item) => item.status === status ) ;
    }

    const setStatusActionRecord = (id, statusValue) => {
        const itemToSet = actionsList.find( (item) => item.id === id );
        itemToSet.status = statusValue;
        const newActionsListWithoutCurrent = actionsList.filter( (item) => item.id !== id );
        console.log(1, newActionsListWithoutCurrent)
        setActionsList([...newActionsListWithoutCurrent, itemToSet]);
    }

    const onChangeActionName = (e) => {
        console.log(e.target.value);
        setActionName(e.target.value);
    }

    const addAction = () => {
        const newAction = {
                            id : uuidv4(), 
                            name : actionName,       
                            status : "To Do"
                        };
        setActionsList([...actionsList, newAction]);  
        setActionName('');          
    }

    const handleClickOnActionButton = (item) => {
        console.log(item);        
        if (statusValue === "To Do") {
            setItemToTrash(item);
            setIsModalVisibleForToDoList(true);
        }
    }

    // const moveToTrash = (item) => {
    //     console.log(item);
    //     item.status = "Trash";
    //     const newActionsListWithoutCurrent = actionsList.filter( (i) => i.id !== item.id );
    //     setActionsList([...newActionsListWithoutCurrent, item]);
    //     setIsModalVisibleForToDoList(false);
    // }

    //const moveToToDo
    
    const moveToStatus = (item, newStatusValue) => {
        console.log(item);
        const oldStatusValue = item.status;
        item.status = newStatusValue;
        const newActionsListWithoutCurrent = actionsList.filter( (i) => i.id !== item.id );
        setActionsList([...newActionsListWithoutCurrent, item]);
        if (oldStatusValue === "To Do") {
            setIsModalVisibleForToDoList(false);
        }
        else if  (oldStatus === "Trash") {
            setIsModalVisibleForTrashList(false);
        }           
    }

    return (    
        <div className = "Main">    

            <div className = "Action-buttons-container">
                <ul className = "Buttons-list">
                    <li className = "Buttons-list-item">
                        <button className = "Set-display-mode Mode-selected" onClick = {() => handleTypeStatus('All')}>
                            All
                        </button>
                    </li>
                    <li className = "buttons-list-item">
                        <button className = "Set-display-mode" onClick = {() => handleTypeStatus('To Do')}>
                             ToDo
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

                <button className = "Button-add-action" onClick={ () => setIsAddModalVisible(!isAddModalVisible) }></button> 

            </div>
        
            <p className = "Display-status">{statusValue}</p>
           
            <hr color="gray" size="2" style = {{ marginBottom: '24px' }} />

            <ul className = "Actions-list">
                {
                    filterActions(statusValue).map(
                        (item) => {
                            return <ActionRecord    
                                        key = {item.id}                                                                   
                                        actionItem = {item}
                                        setStatusActionRecord = {setStatusActionRecord}
                                        actionNameValue = {actionName}  
                                        handleClick = {handleClickOnActionButton}                                     
                                    />
                        }
                    )
                }
            </ul>    

            {
                isAddModalVisible && (
                    <div className = "Modal-window-add-action">
                        <p className = "Modal-window-add-action-ception">Add new action</p>
                        <textarea className = "New-action-text" onChange = {onChangeActionName} value = {actionName}></textarea>
                        <button className = "Add-new-action-to-list" onClick = {addAction}>Add</button>
                    </div>
                )
            }
            
            {
                isModalVisibleForToDoList && (
                    <div className = "Modal-window-for-todo-list">
                        <div className = "Move-to-trash-button-container">
                            <button className = "Move-to-trash-button" onClick = { () => moveToTrash(itemToTrash) }>
                                {/* <image src = {MOVE_TO_TRASH_ICON}></image> */}
                            </button>
                            <span className = "Move-to-trash-text">Move to Trash</span>
                        </div>

                    </div>
                )
            }

            {
                isModalVisibleForTrashList && (
                    <div className = "Modal-window-for-trash-list">
                        <div className = "Move-to-todo-button-container">
                            <button className = "Move-to-todo-button" onClick = { () => moveToToDo(itemToToDo) }>
                            </button>
                            <span className = "Move-to-todo-text"></span>
                        </div>

                    </div>
                )
            }

        </div>
    );
}