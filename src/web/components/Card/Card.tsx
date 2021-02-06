import React, { useState, useEffect } from 'react';
import CardBody from "tt-frontend-components/Card/CardBody.tsx";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="card bg-light">
        <div className="card-body">
          <h6 className="card-title text-uppercase text-truncate py-2">{props.type}</h6>
          <div className="items border border-light">
            <CardBody {...props}/>
            <div className="dropzone rounded"> &nbsp; </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
