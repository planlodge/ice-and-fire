import React from 'react';
import { Button } from 'react-bootstrap';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="home">
            <div>
                <Button onClick={props.goBack}>Back</Button>
            </div>
            <div className="details">
                <p>{props.name}</p>
                <p>{props.coatOfArms || "No Description"}</p>
                <p>Region: {props.region || "Unknown"}</p>
                <p>Founded: {props.founded || "Unknown"}</p>
            </div>
        </div>
    );
}