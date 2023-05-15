import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const INIT_ACTIONS_LIST = [
    {id : uuidv4(), name : "Go to the grocery store",       status : "Done"},
    {id : uuidv4(), name : "Сook food",                     status : "ToDo"},
    {id : uuidv4(), name : "Path the exam",                 status : "ToDo"},
    {id : uuidv4(), name : "Wash the dishes",               status : "ToDo"},
    {id : uuidv4(), name : "Go to karaoke",                 status : "TrashToDelete"},
    {id : uuidv4(), name : "Read a lecture",                status : "ToDo"},
    {id : uuidv4(), name : "Сheck homework assignments",    status : "Doту"},
]

export default Main() {
    const [displayMode, setDisplayMode] = useState("displayWithToDoStatus");
    const [actionsList, setActionsList] = useState(
    );
    return (
        <div className="Main-container">
            <h2 className="Current-status"></h2>
        </div>
    )
}