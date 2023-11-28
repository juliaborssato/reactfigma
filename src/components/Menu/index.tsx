import * as S from "./styles";
import { Link} from "react-router-dom";

const Menu = () => {
    return (
        <S.Cabecalho>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">Cadastrar</Link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho >
    );
};
export default Menu;