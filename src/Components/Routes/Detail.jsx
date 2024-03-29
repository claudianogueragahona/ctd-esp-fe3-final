import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistById } from "../api/dentists"
import { useProductStates } from "../utils/Context/ProductContext";
import Card from "../common/Card";


const Detail = () => {
  const { id } = useParams();
  const [dentistSelected, setDentistSelected] = useState({});
  const {state} = useProductStates()
  
  useEffect(() => {

      const getData = async()=>{
      let dentistData = await getDentistById(id);
      setDentistSelected(dentistData);
    }
    getData()

  }, [id]);


  return (
    
    <div className={state.darkMode ? "container-dark" : "container-light"}>
      <div key={dentistSelected.id}>
        <Card name={dentistSelected.name} username = {dentistSelected.username} id={dentistSelected.id} />; 
        <br />
        <h3>Nombre del profesional: {dentistSelected.name}</h3>
        <h3>email: {dentistSelected.email}</h3>
        <h3>Teléfono: {dentistSelected.phone}</h3>
        <h3>Sitio Web: {dentistSelected.website}</h3>
    </div>
  </div>
  )
  }



export default Detail