import * as S from "./styles"
import Twitter from "../../assets/twitter 1.png"
import Insta from "../../assets/instagram 1.png"
import Spotify from "../../assets/spotify 1.png"
import Avancar from "../../assets/avancar.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://twitter.com/taylorswift13" target="_blank">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/taylorswift/" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="https://open.spotify.com/intl-pt/artist/06HL4z0CvFAxyc27GXpf02" target="_blank">
      <img src={Spotify} alt="Spotify" />
      </a>
      <a href="" target="_blank">
      <img src={Avancar} alt="Próxima pág" />
      </a>
    </S.Footer>
  )
}