import React from 'react';
import {CombustionCarContainer, H1StyledCar, ListContainer, LiStyled, UlStyled} from "./Porównaj.styles";
import {H1Styled} from "../Porównaj/Porównaj.styles";
import {Button} from "../../components/MainBodyUnderHeader/Main.styles";
import {Link} from "react-router-dom";

const CompareCombustionCar = () => {
    const CombustionAllCostInfo = JSON.parse(localStorage.getItem('combustionInfo'))
    console.log(CombustionAllCostInfo)
    if (CombustionAllCostInfo === null){
        return (<h1>
            Dodaj auto spalinowe do porównania
        </h1>)
    }
    return (<>
            <div style={{}}>
            <H1Styled>Samochody Spalinowe</H1Styled>
            <Link to="/Oblicz"><Button>Dodaj</Button></Link>
            </div>
            {
            CombustionAllCostInfo.map(({
                                        NAME ,
                                        YEARKM ,
                                        TIRESWAP ,
                                        SERVICECOST ,
                                        FUELCOST ,
                                        YEARCOST ,
                                        ONEKMCOST = 0
                                    }) => {
                return (<>
                        <CombustionCarContainer>

                            <H1StyledCar>{NAME}</H1StyledCar>
                            <UlStyled>
                                <LiStyled>Roczna ilość kilometrów {YEARKM} km</LiStyled>
                                <LiStyled>Wymiana opon rocznie kosztuje {TIRESWAP} zł</LiStyled>
                                <LiStyled>Serwisowanie rocznie kosztuje {SERVICECOST} zł</LiStyled>
                                <LiStyled>Paliwo rocznie kosztuje {FUELCOST} zł</LiStyled>
                                <LiStyled>Razem roczny koszt wynosi {YEARCOST} zł</LiStyled>
                                <LiStyled>Jeden kilometr kosztuje cię {ONEKMCOST.toFixed(2)} zł</LiStyled>
                            </UlStyled>
                        </CombustionCarContainer>

                    </>
                )
            })
        }</>
    );
}

export default CompareCombustionCar;