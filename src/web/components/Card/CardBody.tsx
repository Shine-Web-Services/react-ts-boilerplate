import React, { useState, useEffect } from 'react';

const CardBody = (props) => {
  console.log(props.data)
  return (
    <React.Fragment>
      {
        props && props.data.map((obj, idx) => {
          return (
            <div className="card draggable shadow-sm" id={obj.id} key={idx}>
              <div className="card-body p-2">
                <div className="card-title">
                  <img src="//placehold.it/30" className="rounded-circle float-right" />
                  <a className="lead font-weight-light">{obj.cardNumber}</a>
                </div>
                <p>
                  {obj.cardDescription}
                </p>
                {(obj.type !== 'complete') && <button className="btn btn-primary btn-sm">{(obj.type === 'todo') ? 'Start' : (obj.type === 'inprogress') ? 'Resolve' : ''}</button>}
              </div>
            </div>
          )
        })
      }

    </React.Fragment>
  );
};
export default CardBody;
