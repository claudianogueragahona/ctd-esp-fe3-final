
import { useProductStates } from "../utils/Context/ProductContext"



const Mode = () => {
    const { state } = useProductStates()

return(
<div className={state.darkMode ? "container-dark" : "container-light"}>

    </div>

)
}
export default Mode