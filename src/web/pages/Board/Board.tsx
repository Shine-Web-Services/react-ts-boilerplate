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
  const [maxId, setMaxID]                       = useState<string>('151');
  const [toToBoard, setToToBoard]               = useState<any>([{id: "task-151", cardNumber: "TK-151", cardDescription:"Create a test TO DO app", type: "todo"}]);
  const [inProgressBoard, setInProgressBoard]   = useState<any>([]);
  const [completeBoard, setCompleteBoard]       = useState<any>([]);

  //let toToBoard = [{id: "task-151", cardNumber: "TK-151", cardDescription:"Create a test TO DO app", type: "todo"}]

  //let inProgressBoard = [{id: "task-3", cardNumber: "TK-153", cardDescription:"Create a Kanban Board", type: "inprogress"}]

  //let completeBoard = [{id: "task-4", cardNumber: "TK-154", cardDescription:"Add Forgot Password", type: "complete"}, {id: "task-5", cardNumber: "TK-155", cardDescription:"Add Reset Password", type: "complete"}]

  let ticketBtnClickHandler = (data) => {
    let eventType = data.type

    if (eventType === "todo") {
      let toDoState       = toToBoard
      let inProgressState = inProgressBoard

      console.log(toDoState)
      let listToDelete = data.id

      for (var i = 0; i < toDoState.length; i++) {
          var obj = toDoState[i];
          console.log(obj)
          if (listToDelete.indexOf(obj.id) !== -1) {
            obj.type = 'inprogress';
            inProgressState.push(obj)
            
            console.log(inProgressState)
            setInProgressBoard(inProgressState)
            toDoState.splice(i, 1)
          }
      }

      setToToBoard(toDoState)
    } else {

    }
  }

  return (
    <React.Fragment>
      <div className="container-fluid pt-3">
        <h3 className="font-weight-light text-white">Kanban Board</h3>

        <div className="row flex-row flex-sm-nowrap py-3">
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="To-Do" clickHandler={(data) => ticketBtnClickHandler(data)} data={toToBoard}/>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="In-Progress" clickHandler={(data) => ticketBtnClickHandler(data)} data={inProgressBoard}/>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4">
            <Card type="Complete" data={completeBoard}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
