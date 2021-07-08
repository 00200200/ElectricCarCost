import styled from 'styled-components'

export const ObliczContainer = styled.div`
    width:100%;
  margin:0 auto;
background-color:#606060;
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
  padding:0.2rem;
 color:white;
`
export const CalculateLabel = styled.label`
  width:60%;
  padding:0.2rem;
display: flex;
  justify-content:space-between
`
export const InputNumber = styled.input` 
  border:none;
  border-bottom: 1px solid black;
  width:40%;
  text-align:right;
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
    border-radius:50px;
  background:${({primary}) => (primary ? '#01BG71' : '#010606')
};
  white-space:nowrap;
  padding:${({big}) => (big ? '14 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline:none;
  border:none;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition:all 0.2s ease-in-out;
    color:black;
    background:${({primary}) => (primary ? '#fff' : '#BADA55')}
  }
    `