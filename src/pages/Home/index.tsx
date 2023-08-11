import * as S from './styles'
import tayloresquerda from "../../assets/tayloresquerda.png"
import taylordireita from "../../assets/taylordireita.png"

export function Home() {
  return (
    <S.Section>
      <img src={tayloresquerda} alt="Taylor na esquerda" />
      <img src={taylordireita} alt="Taylor na direita" />
    </S.Section>
  )
}
