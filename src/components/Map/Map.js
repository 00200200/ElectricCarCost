import React from 'react';
import "../styles/components-styles/map.scss"
import {MapStyled,H1Styled} from './Map.styles';
const Map = () => {
    return (
        <MapStyled >
            <H1Styled>Mapa ładowarek elektrycznych</H1Styled>
            <iframe  className="chargeMap"src='https://www.plugshare.com/widget2.html?latitude=52.215933&longitude=19.134422&spanLat=3.61418&spanLng=3.61418&plugs=1,2,3,4,5,6,42,13,7,8,9,10,11,12,14,15,16,17' width='800' height='600'></iframe>
        </MapStyled>
    );
};

export default Map;