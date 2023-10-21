import './nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__title">Tu APP de Notas</div>
            <ul className="nav__ul">
                <li className="nav__li"><Link to="/" className="nav__a">Notas</Link></li>
                <li className="nav__li"><Link to="/createNote" className="nav__a">Crear Nota</Link></li>
                <li className="nav__li"><Link to="/createUser" className="nav__a">Crear Usuario</Link></li>
            </ul>
        </div>
    )
}
