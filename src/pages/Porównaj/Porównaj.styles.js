import styled from 'styled-components'



export const ListContainer = styled.div`
    background-color:gray;
  height:100%;
  width:100%;
  padding:2rem;
  @media screen and (max-width:500px) {
padding:0;
}

`
export const ECarContainer = styled.div`
    width:50vw;
  margin:2rem auto;
  text-align:center;
  text-decoration:none;
  list-style:none;
   background-color:#004242;
border-radius: 3rem;
  padding:2rem;
  @media screen and (max-width:500px) {
    width: 100%;
    text-align:justify-all;
    margin:0;
    padding:0
  }  
    `

export const H1Styled = styled.h1`
font-size:3rem;
  text-align:center;
  padding:2rem;
  color:white;
  
`
export const H1StyledCar = styled.h1`
    font-size:2rem;
  font-weight:bold;
  color:white;
  @media screen and (max-width:500px) {
    text-align:justify-all;
    margin:0;
    padding:0
  }
  `

export const UlStyled = styled.ul `
list-style:none;
  
`

export const LiStyled = styled.li`
    font-size:1.2rem;
  margin:0.5rem;
  color:white;
  display:flex;
  justify-content:space-between;
  
    `

export const CombustionCarContainer = styled.div`
  width:50vw;
  margin:2rem auto;
  text-align:center;
  text-decoration:none;
  list-style:none;
  background-color:#1C1C21;
  border-radius: 3rem;
  padding:2rem;
  margin-bottom:1rem;
  :last-of-type{
    margin-bottom: 1rem;
  }
  @media screen and (max-width:500px) {
  width: 100%;
  text-align:justify-all;
  margin:0;
  padding:0
}


`
export const ChargeTimeContainer = styled.div`
  width:50vw;
  margin:2rem auto;
  text-align:center;
  text-decoration:none;
  list-style:none;
  background-color:#096cf7;
  border-radius: 3rem;
  padding:2rem;
  @media screen and (max-width:500px) {
    width: 100%;
    text-align:justify-all;
    margin:0;
    padding:0
`