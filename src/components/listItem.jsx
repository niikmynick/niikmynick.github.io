import React from "react";

export const ListItem = ({ idx, name, description, info, image }) => {
    return (
        <div key={idx} className="item-card">
            <img src={process.env.PUBLIC_URL + image} alt={name} className="item-image"/>
            <div className="item-info">
                <h3 className="item-name">{name}</h3>
                <p className="item-description">{description}</p>
                <p className="item-add">{info}</p>
            </div>

        </div>
    );
};