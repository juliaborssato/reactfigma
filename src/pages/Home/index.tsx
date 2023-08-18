import * as S from './styles'
import tayloresquerda from "../../assets/tayloresquerda.png"
import taylordireita from "../../assets/taylordireita.png"
import { ComponentFooter } from '../../components'
import avancar from "../../assets/avancar.png"

export function Home() {
  return (
    <>
    <S.Section>
      <img src={tayloresquerda} alt="Taylor na esquerda" />
      <img src={taylordireita} alt="Taylor na direita" />
    </S.Section>
    <ComponentFooter>
    <a href='/list'> <img src={avancar} alt="" /></a>
      </ComponentFooter>
    </>
  )
}
