import * as S from './styles'
import The1 from "../../assets/musica1.png"
import Cardigan from "../../assets/musica2.png"
import August from "../../assets/musica3.png"
import { ComponentFooter } from '../../components'

export function List() {
  return (
    <>
    <S.Section>
      <div>
        <a href="https://open.spotify.com/intl-pt/track/0Jlcvv8IykzHaSmj49uNW8" target="_blank">
          <img src={The1} alt="The 1" />
        </a>
      </div>

      <div>
        <a href="https://open.spotify.com/intl-pt/track/4R2kfaDFhslZEMJqAFNpdd" target="_blank">
          <img src={Cardigan} alt="Cardigan" />
        </a>
      </div>

      <div>
      <a href="https://open.spotify.com/intl-pt/track/3hUxzQpSfdDqwM3ZTFQY0K" target="_blank">
        <img src={August} alt="August" />
      </a>
      </div>
    </S.Section>
    <ComponentFooter/>
    
    </>
  )

}
