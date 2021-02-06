import React, { useState, useEffect } from 'react';

const CardBody = (props) => {
  return (
    <React.Fragment>
      <div className="card draggable shadow-sm" id={props.id}>
        <div className="card-body p-2">
          <div className="card-title">
            <img src="//placehold.it/30" className="rounded-circle float-right" />
            <a className="lead font-weight-light">{props.cardNumber}</a>
          </div>
          <p>
            {props.cardDescription}
          </p>
          <button className="btn btn-primary btn-sm">View</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardBody;
