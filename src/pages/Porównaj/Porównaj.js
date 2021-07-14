import React from 'react';
import PageNav from "../../components/Header/PageNav";
import Footer from "../../components/Footer/footer";
import {ECarContainer, H1StyledCar, H1Styled, ListContainer, UlStyled, LiStyled} from "./Porównaj.styles";
import CompareCombustionCar from "./CompareCombustionCar";
import {Button} from "../../components/MainBodyUnderHeader/Main.styles";
import {Link} from "react-router-dom";
import ChargingTime from "./ChargingTime";
const Porównaj = () => {
    const AllCostInfo = JSON.parse(localStorage.getItem('costInfo'))

    if (AllCostInfo === null) {
        return (<>
                <PageNav/>
                <ListContainer>
                    <H1Styled style={{color: "white"}}>Dodaj produkty</H1Styled>
                    <Link style={{textDecoration:"none"}} to="/Oblicz"><Button style={{margin:"0 auto" ,textDecoration:"none"}}>Oblicz</Button></Link>
                </ListContainer>
                <CompareCombustionCar/>
                <ChargingTime/>
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
                <ChargingTime/>

            </ListContainer>
            <Footer></Footer></>
    )

};

export default Porównaj;