import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import './App.css';
import axios from 'axios';
import API_Page from './API_Page';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weight, setWeight] = useState();
  const [name, setName] = useState("");
  const [moves, setMoves] = useState();
  const [abilities, setAbilities] = useState();
  const [height, setHeight] = useState();
  const [species, setSpecies] = useState();
  const [base, setBase] = useState();
  const [pname, setPname] = useState("");
  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setMoves(res.data.moves.length);
      setWeight(res.data.weight);
      setAbilities(res.data.abilities.length);
      setHeight(res.data.height);
      setSpecies(res.data.species.name);
      setBase(res.data.base_experience);
    }
    getData();
  }, [name]);

  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/apipage" element={<API_Page 
            name={name}
            moves={moves}
            weight={weight}
            abilities={abilities}
            height={height}
            species={species}
            experience={base}
          />} />
        </Routes>


            { showContent ? <div>
        <div className='title'>
            <h1>FindPoke</h1>
        </div>
        <div className="content">

            <h3>Search Pokemon by name</h3>
            <input type="text" value={pname} onChange={(e) => {
                setPname(e.target.value);
            }} />
            <br />
            <NavLink to="/apipage">
                <button className='btn btn-primary' onClick={() => {
                    setName(pname.toLowerCase());
                    setShowContent(false);
                }}>Submit </button></NavLink>
            </div>
        </div> : null
            }

      </Router>
    </>
  )
}

export default App;
