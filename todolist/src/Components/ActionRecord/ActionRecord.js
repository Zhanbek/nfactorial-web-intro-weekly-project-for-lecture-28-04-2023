import './ActionRecord.css'

export default function ActionRecord({actionItem}) {
    return (
        <li class = "Actions-list-item">
            <button class = "callModalWindow"></button>
            <input type = "checkbox"></input>
            <span>{actionItem.name}</span>
        </li>
    );
}