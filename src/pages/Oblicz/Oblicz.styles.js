import styled from 'styled-components'

export const ObliczContainer = styled.div`
    width:90vw;
  margin:0 auto;
`
export const FormStyle = styled.form`
    display:flex;
    justify-content:center;
  align-items:center;
  flex-direction:column;
    `

export const LabelContainer = styled.div`
  width:80%;
  text-align:left;
  display: flex;
  justify-content:center;
  align-items:center;
  margin:5px;
  border:1px solid black;
  border-radius:15px;
  padding:0.2rem;
`
export const CalculateLabel = styled.label`
  width:40%;
display: flex;
  justify-content:space-between
`
export const InputNumber = styled.input` 
  border:none;
  border-bottom: 1px solid black;
  width:15%;
  text-align:right;
`