import React from 'react';
import { useEffect, useState } from "react";
import Card from '../common/Card';
import { getDentists } from '../api/dentists';
import { useProductStates } from '../utils/Context/ProductContext';
import "./Home.css"



const Home = () => {
  const {state} = useProductStates()

  const [dentists, setDentists] = useState([]);


  useEffect(() => {

    const getData = async ()=>{
      let dentistsData =  await getDentists()
      setDentists(dentistsData)
    }
    getData()
  

  }, []);

  return (
    <div className={state.darkMode ? "container-dark" : "container-light"}>
    <div className='container'>
      <div className="containerTitle">
        <h3 className="centered">Home</h3>
      </div>
      
        <div className='card-grid'>
        {dentists.map((dentist) => {
          return <Card name={dentist.name} username = {dentist.username} id={dentist.id} key={dentist.id} />;
        })}     
        </div>
      </div>
    </div>
  )
}

export default Home