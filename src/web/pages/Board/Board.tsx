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
  let toToBoard = [{id: "task-1", cardNumber: "TK-151", cardDescription:"Create a test TO DO app", type: "todo"}]

  let inProgressBoard = []
  let completeBoard   = []

  //let inProgressBoard = [{id: "task-3", cardNumber: "TK-153", cardDescription:"Create a Kanban Board", type: "inprogress"}]

  //let completeBoard = [{id: "task-4", cardNumber: "TK-154", cardDescription:"Add Forgot Password", type: "complete"}, {id: "task-5", cardNumber: "TK-155", cardDescription:"Add Reset Password", type: "complete"}]

  const ticketBtnClickHandler = () => {
    console.log('1')
  }

  return (
    <React.Fragment>
      <div className="container-fluid pt-3">
        <h3 className="font-weight-light text-white">Kanban Board</h3>

        <div className="row flex-row flex-sm-nowrap py-3">
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="To-Do" clickHandler={() => ticketBtnClickHandler()} data={toToBoard}/>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="In-Progress" clickHandler={() => ticketBtnClickHandler()} data={inProgressBoard}/>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="Complete" clickHandler={() => ticketBtnClickHandler()} data={completeBoard}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
