import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from "tt-frontend-components/Input/Input.tsx";
import Button from "tt-frontend-components/Button/Button.tsx";
import Card from "tt-frontend-components/Card/Card.tsx";
import { useStoreActions } from 'easy-peasy';

interface RouteProps {
  history: any;
}

const Board: React.FC<RouteProps> = ({ history }): JSX.Element => {

  return (
    <React.Fragment>
      <div className="container-fluid pt-3">
        <h3 className="font-weight-light text-white">Kanban Board</h3>

        <div className="row flex-row flex-sm-nowrap py-3">
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="To Do" id="task-1" cardNumber="TK-151" cardDescription="Create a test TO DO app." cardSection="todo"/>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="In-Progress" id="task-2" cardNumber="TK-152" cardDescription="Add validations to login." cardSection="inprogress"/>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="Complete" id="task-3" cardNumber="TK-153" cardDescription="Complete Stripe Integration" cardSection="complete"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
