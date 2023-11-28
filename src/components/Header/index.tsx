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
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
          <li>
            <a href="cadastrar">Cadastro</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}