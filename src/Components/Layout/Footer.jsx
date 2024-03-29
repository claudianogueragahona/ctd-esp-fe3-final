import "./Footer.css"
import { useProductStates } from '../utils/Context/ProductContext';

const Footer = () => {
  const {state} = useProductStates()

  return (
    <div className={state.darkMode ? "container-dark" : "container-light"}>
    
      <footer>      
        <img className="logoDH" src="/images/DH.png" alt="Logo-DH"/>
        <ul className="listaLogos">
          <li><img src="/images/ico-facebook.png" alt="Logo-facebook"/></li>
          <li><img src="/images/ico-instagram.png" alt="Logo-insta"/></li>
          <li><img src="/images/ico-whatsapp.png" alt="Logo-wsp"/></li>
          <li><img src="/images/ico-tiktok.png" alt="Logo-tiktok"/></li>
        </ul>
      
      </footer>
      
    </div>
  )
}

export default Footer
