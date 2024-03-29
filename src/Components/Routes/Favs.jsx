import { useProductStates } from '../utils/Context/ProductContext'
import Card from "../../Components/common/Card";


const Favs = () => {
  const { state, dispatch } = useProductStates();

    return (
      <div className={state.darkMode ? "container-dark" : "container-light"}>
      <div>
        <h2>Tus doctores favoritos son:</h2>
        <br />

        {state.favs.map((favorite) => {
          return (
            
            
              <div key={favorite.id}>
              <Card name={favorite.name} username = {favorite.username} id={favorite.id} />;             
                
              <button
                onClick={() =>
                dispatch({ type: "REMOVE_BY_ID", payload: favorite.id })
                }
              >
              Quitar de favoritos
              </button>
              </div>
            
          );
        })}
        <br />
        <button onClick={() => dispatch({ type: "REMOVE_ALL" })}>
          Limpiar todos los favoritos
        </button>
      </div>
      </div>
  );
};

export default Favs;
