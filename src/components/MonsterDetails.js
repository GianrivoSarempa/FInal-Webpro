import React from "react";
import { Link } from "react-router-dom";

const MonsterDetails = (props) => {   
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src="https://static.invenglobal.com/upload/image/2018/03/05/i1520237239913079.jpeg" alt={props.monster.name} />
                    </div>
                    <div className="col-md-6">
                    <h1 className="display-5 fw-bolder">Name: {props.monster.name}</h1>                        
                        <div className="fs-5 mb-5">
                            <span>Type: {props.monster.type}</span>
                            <br /> 
                            <span>Species: {props.monster.species}</span>                                                                                   
                            <br />
                            <span>Description: {props.monster.description}</span>
                            <br />                                          
                        </div>                    
                        <div className="d-flex">                        
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MonsterDetails;