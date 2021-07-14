import React from 'react';
import {
    ChargeTimeContainer,
    CombustionCarContainer,
    H1StyledCar,
    ListContainer,
    LiStyled,
    UlStyled
} from "./Porównaj.styles";
import {H1Styled} from "../Porównaj/Porównaj.styles";

const ChargingTime = () => {
    const ChargeTimeInfo = JSON.parse(localStorage.getItem('chargingInfo'));
    console.log(ChargeTimeInfo)
    if(ChargeTimeInfo === null){
        return (<h1>Dodaj czas ładowania do porównania</h1>
        )
    }
    return (<>
    <div>
        <H1Styled>Czasy ładowania</H1Styled>
    </div>
        {
            ChargeTimeInfo.map(({
                NAME,CHARGETIME
            })=>{
                return (<>
                <ChargeTimeContainer>
                    <H1StyledCar>{NAME}</H1StyledCar>
                    <UlStyled>
                        <LiStyled>Czas ładowania wynosi {CHARGETIME.toFixed(2) * 60} minut.</LiStyled>
                    </UlStyled>
                </ChargeTimeContainer>
                </>)
            })
        }
    </>)
}
export default ChargingTime;