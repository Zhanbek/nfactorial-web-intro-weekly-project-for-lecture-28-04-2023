import './ActionRecord.css'
// import './ActionRecord-outline-temp.css'

export default function ActionRecord({actionItem, setStatusActionRecord}) {

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
                        
            <span className = "Action-title">{actionItem.name}</span>
        </li>
    );
}