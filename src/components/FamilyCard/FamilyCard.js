import React from "react";
import "./FamilyCard.css";


const FamilyCard = props => (
    
        <div onClick={() => props.onClick(props.id)} className="img-container click-item img-thumbnail grow">
            <img alt={props.name} src={props.image} />
        </div>

);





// const arr = [ 'a', 'b', 'c'];










export default FamilyCard;
