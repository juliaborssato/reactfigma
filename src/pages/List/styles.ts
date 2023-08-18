import styled from 'styled-components'

export const Section = styled.section`
  min-height: calc(100vh - 9rem);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
img{width:200px;}
}
`

