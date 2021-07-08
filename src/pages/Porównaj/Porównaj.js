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
                    <h1>Dodaj produkty</h1>
                </ListContainer>

                <Footer></Footer>
            </>
        )
    }
    return (
       <><PageNav/>
           <ListContainer>
           {
           AllCostInfo.map((item) => {
               return (<>

                       <ul>
                           <li>Nazwa: {item.NAME}</li>
                           <li>Roczna ilość kilometrów {item.YEARKM} km</li>
                           <li>Wymiana opon rocznie kosztuje {item.TIRESWAP} zł</li>
                           <li>Serwisowanie rocznie kosztuje {item.SERVICECOST} zł</li>
                           <li>Wymiana baterii rocznie kosztuje {item.BATTERYYEARCOST} zł</li>
                           <li>Energia rocznie kosztuje {item.ENERGYYEARCOST} zł</li>
                           <li>Razem roczny koszt wynosi {item.YEARCOST} zł</li>
                           <li>Jeden kilometr kosztuje cię {item.ONEKMCOST} zł</li>
                       </ul>

                   </>
               )
           })
           }</ListContainer> <Footer></Footer></>
    )
};

export default Porównaj;