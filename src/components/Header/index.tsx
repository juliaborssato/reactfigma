import * as S from "./styles"
import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="#">Entrar</a>
          </li>
          <li>
            <a href="#">Cadastre-se</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}