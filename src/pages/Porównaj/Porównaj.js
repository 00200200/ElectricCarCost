import React from 'react';
import PageNav from "../../components/Header/PageNav";
import Footer from "../../components/Footer/footer";
import {ListContainer} from "./Porównaj.styles";

const Porównaj = () => {
    const AllCostInfo = JSON.parse(localStorage.getItem('costInfo'))
    console.log(AllCostInfo)

    if (AllCostInfo === null) {
        return (<>
                <PageNav/>
                <ListContainer>
                    <h1 style={{color:"white"}}>Dodaj produkty</h1>
                </ListContainer>

                <Footer></Footer>
            </>
        )
    }
    return (
       <><PageNav/>
           <ListContainer>
               <h1>Samochody Elektryczne</h1>
           {
           AllCostInfo.map(({NAME,YEARKM,TIRESWAP,SERVICECOST,BATTERYYEARCOST,ENERGYYEARCOST,YEARCOST,ONEKMCOST =0}) => {
               return (<>
                       <ul>
                           <li>Nazwa: {NAME}</li>
                           <li>Roczna ilość kilometrów {YEARKM} km</li>
                           <li>Wymiana opon rocznie kosztuje {TIRESWAP} zł</li>
                           <li>Serwisowanie rocznie kosztuje {SERVICECOST.toFixed(2)} zł</li>
                           <li>Wymiana baterii rocznie kosztuje {BATTERYYEARCOST.toFixed(2)} zł</li>
                           <li>Energia rocznie kosztuje {ENERGYYEARCOST.toFixed(2)} zł</li>
                           <li>Razem roczny koszt wynosi {YEARCOST.toFixed(2)} zł</li>
                           <li>Jeden kilometr kosztuje cię {ONEKMCOST.toFixed(2)} zł</li>
                       </ul>
                   </>
               )
           })
           }</ListContainer>
           <table>
               <thead>
               <tr>
                   <td>Nazwa</td>
                   <td>ROCZNA ILOSC KILOMETROW</td>
                   <td>WYMIANA OPON ROCZNIE KOSZTUJE </td>
                   <td>SERWISOWANIE ROCZNIE  </td>
                   <td>WYMIANA BATERII ROCZNIE  </td>
                   <td>ENERGIA ROCZNIE  </td>
                   <td>RAZEM ROCZNY KOSZT  </td>
                   <td>1km KOSZTUJE  </td>
               </tr>
               <tbody>
               AllCostInfo.map(({NAME,YEARKM,TIRESWAP,SERVICECOST,BATTERYYEARCOST,ENERGYYEARCOST,YEARCOST,ONEKMCOST =0}) => {
                   <tr>
                       <td>{NAME}</td>
                       <td>{YEAR}</td>
                       <td>{TIRESWAP}</td>
                       <td>{TIRESWAP}</td>
                       <td>{SERVICECOST}</td>
                       <td>{BATTERYYEARCOST}</td>
                       <td>{ENERGYYEARCOST}</td>
                       <td>{YEARCOST}</td>
                       <td>{ONEKMCOST}</td>
                   </tr>
               }
               </tbody>
               </thead>
           </table>
           <Footer></Footer></>
    )

};

export default Porównaj;