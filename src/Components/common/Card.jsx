import React from "react";
import { useEffect, useState } from "react";
import  {Link} from "react-router-dom";
import { useProductStates } from "../utils/Context/ProductContext";
import { getDentistById } from "../api/dentists";

const Card = ({username, id }) => {
  const [dentistSelected, setDentistSelected] = useState({});
  const {dispatch} = useProductStates()


  useEffect(() => {

    const getData = async()=>{
      let dentistData = await getDentistById(id);
      setDentistSelected(dentistData);
    }
    getData()

  }, [id]);
  const handleShowDetail = async () => {
    
    let dentistData = await getDentistById(id);

    
    dispatch({ type: "SHOW_DETAIL", payload: dentistData });
  };

  return (
    <div className="card">
    
        <h4>{`${username},id: ${id}`}</h4>
        <Link to={`/dentist/${id}`}><img 
          src="/images/doctor.jpg"
          alt="foto-doc"
          style={
            {width: "100%",
            height: 150
            }
          }
        /></Link>

        <button onClick={()=> dispatch( {type:"ADD_FAVORITES", payload: dentistSelected })} className="favButton">
          ⭐
        </button>
        <button onClick={handleShowDetail} className="favButton">
        
      </button>
    </div>
  );
};

export default Card;
