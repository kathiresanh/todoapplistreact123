import react from "react";

export default function List(prop) {
    return <div>
        <ul>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{prop.indexes+1} {prop.datas}</div>
                  
                </div>
                <button onClick={()=>{prop.delEvent(prop.indexes)}} className="badge bg-danger rounded-pill">X</button>
            </li>


        </ul>
    </div>
}