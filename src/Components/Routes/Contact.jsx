import { useProductStates } from '../utils/Context/ProductContext';
import Form from '../common/Form'



const Contact = () => {

  const {state} = useProductStates()
  return (
    <div className={state.darkMode ? "container-dark" : "container-light"}>
      <div >
      <h1>Quieres saber más?</h1>
      <h3>Completa tus datos y te contactaremos</h3>
      <br />
      <Form/>
      </div>
    </div>
  )
}

export default Contact