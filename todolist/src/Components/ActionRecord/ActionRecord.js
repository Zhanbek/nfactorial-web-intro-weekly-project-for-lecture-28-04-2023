import './ActionRecord.css'
import './ActionRecord-outline-temp.css'

export default function ActionRecord({actionItem}) {
    return (
        <li className = "Actions-list-item">
            
            <button className = "Call-modal-window">
                <img className = "Call-modal-window-img" src = "./CallModalWindow.svg"></img>
            </button>
            
            <span className = "Action-checkbox-container">
                <input type = "checkbox" class = "Action-checkbox"></input>""
            </span>
            
            <span className = "Action-title">{actionItem.name}</span>
        </li>
    );
}