import './ActionRecord.css'
// import './ActionRecord-outline-temp.css'

export default function ActionRecord( {actionItem, setStatusActionRecord, actionNameValue} ) {

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
                        
            <input type = "checkbox" className = "Action-checkbox" checked = {actionItem.status === 'Done'} 
                  onChange = {changeStatusTo}></input>
                        
            <span className = "Action-title"
                  style = {{textDecoration : (actionItem.status === 'Done') ? 'line-through' : 'none' } }
                  value = {actionNameValue}
                  >
                    {actionItem.name}
            </span>
        </li>
    );
}