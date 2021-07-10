import React from 'react';
import PageNav from "../../components/Header/PageNav";
import Footer from "../../components/Footer/footer";
import {ECarContainer, H1StyledCar, H1Styled, ListContainer, UlStyled, LiStyled} from "./Porównaj.styles";
import CompareCombustionCar from "./CompareCombustionCar";

const Porównaj = () => {
    const AllCostInfo = JSON.parse(localStorage.getItem('costInfo'))

    if (AllCostInfo === null) {
        return (<>
                <PageNav/>
                <ListContainer>
                    <h1 style={{color: "white"}}>Dodaj produkty</h1>
                </ListContainer>

                <Footer></Footer>
            </>
        )
    }
    return (
        <><PageNav/>
            <ListContainer>
                <H1Styled>Samochody Elektryczne{console.log(AllCostInfo)}</H1Styled>
                {
                    AllCostInfo.map(({
                                         NAME,
                                         YEARKM,
                                         TIRESWAP,
                                         SERVICECOST,
                                         BATTERYYEARCOST,
                                         ENERGYYEARCOST,
                                         YEARCOST,
                                         ONEKMCOST = 0
                                     }) => {
                        return (<>
                                <ECarContainer>
                                    <H1StyledCar>{NAME}</H1StyledCar>
                                    <UlStyled>
                                        <LiStyled>Roczna ilość kilometrów {YEARKM} km </LiStyled>
                                        <LiStyled>Wymiana opon rocznie kosztuje {TIRESWAP} zł</LiStyled>
                                        <LiStyled>Serwisowanie rocznie kosztuje {SERVICECOST} zł</LiStyled>
                                        <LiStyled>Wymiana baterii rocznie kosztuje {BATTERYYEARCOST} zł</LiStyled>
                                        <LiStyled>Energia rocznie kosztuje {ENERGYYEARCOST} zł</LiStyled>
                                        <LiStyled>Razem roczny koszt wynosi {YEARCOST} zł</LiStyled>
                                        <LiStyled>Jeden kilometr kosztuje cię {ONEKMCOST} zł</LiStyled>
                                    </UlStyled>
                                </ECarContainer>
                            </>
                        )
                    })
                }

                <CompareCombustionCar/>
            </ListContainer>
            <Footer></Footer></>
    )

};

export default Porównaj;