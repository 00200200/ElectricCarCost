import styled from 'styled-components'

export const ObliczContainer = styled.div`
  width:100%;
  margin:0 auto;
background-color:#606060;
  height:100%;
`
export const SelectTypeP = styled.div`
font-size:2rem;
  font-weight:bold;
  color:black;
`
export const CalculateSelectTypeContainer = styled.div`
display:flex;
  margin:0 auto;
  text-align:center;
  justify-content:center;
  width:90vw;
  @media screen and (max-width:420px){
    display:block;
    margin:0 auto;
  padding-top:1rem;
  }
`
export const SelectTypeContainer = styled.div`
    margin:2rem;
`
export const FormStyle = styled.form`
    display:flex;
    justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:0 auto;

    `

export const LabelContainer = styled.div`
  width:55%;
  text-align:left;
  display: flex;
  justify-content:center;
  align-items:center;
  margin:5px;
  border:1px solid black;
  border-radius:15px;
 color:white;
  @media screen and (max-width:420px) {
    width:90vw;
  }
  
`
export const CalculateLabel = styled.label`
  width:60%;
  padding:0.2rem;
  font-weight:bold;
display: flex;
  justify-content:space-between;
 
`
export const InputNumber = styled.input` 
  border:none;
  background:none;
  border-bottom: 1px solid black;
  width:40%;
  padding:0.5rem;
  text-align:right;
  font-weight:bold;
  ::placeholder{
    color:white;
  }
`

export const ImgStyles = styled.img `
position:absolute;
  z-index:-10;
  height:110vh;
  width:100%;
`
export const H1Alert = styled.h1`
    font-size:2rem;
  color:red;
  text-decoration:underline;
  text-decoration-color:red;
    `

export const CalculateInputSubmit = styled.input`

  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: black;
    background: #BADA55;
  }

`
export const H1Calculate = styled.h1 `
font-size:2rem;
  color:white;
  font-weight:bold;
 text-align:center;
`