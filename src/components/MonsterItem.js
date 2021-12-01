import React from "react";
import { Link } from "react-router-dom";

const MonsterItem = (props) => {   
    return(
        <div className="col mb-5">
        <div className="card h-100">                            
            <img className="card-img-top" src="https://static.invenglobal.com/upload/image/2018/03/05/i1520237239913079.jpeg" alt={props.monster.name} />                        
            <div className="card-body p-4">
                <div className="text-center">                                    
                    <h5 className="fw-bolder">{props.monster.name}</h5>                                    
                    {props.monster.type}
                </div>
            </div>                            
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/details/${props.monster.id}`}>View Detail</Link></div>
            </div>
        </div>
    </div>
    );
}

export default MonsterItem;