import React, { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const API_Page = (props) => {

  console.log(props.name);

  return (
    <div className="content-1">

      {props.name !== "" ?
        <div className="cards">
          <div className="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h2 class="card-title">{props.name}</h2>
              <div className="list">
                <ul type='none'>
                  <li>Moves: {props.moves}</li>
                  <li>Weight: {props.weight}</li>
                  <li>Abilities: {props.abilities}</li>
                </ul>
                <ul type='none'>
                  <li>Height: {props.height}</li>
                  <li>Species: {props.species}</li>
                  <li>Base Experience: {props.experience}</li>
                </ul>
              </div>
            </div>
          </div>
        </div> : null
}
       
      </div>
    );
};

export default API_Page;
