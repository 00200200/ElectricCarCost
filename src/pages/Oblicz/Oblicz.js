import React, {useEffect, useState} from 'react';
import Map from "../../components/Map/Map";
import PageNav from "../../components/Header/PageNav";
import {ObliczContainer} from "./Oblicz.styles.js";
import {FormStyle, CalculateLabel, LabelContainer, InputNumber} from "./Oblicz.styles.js";
import "./obliczstyle.scss"

const Oblicz = () => {
    const [kmMonth, setKmMonth] = useState()
    const [yearCost, setYearCost] = useState()
    const [variableServiceYearCost, setVariableServiceYearCost] = useState()
    const [variableTireYearCost, setVariableTireYearCost] = useState()
    const [batteryChange, setBatteryChange] = useState()
    const [energyCost, setEnergyCost] = useState()
    const [energyConsumption, setEnergyConsumption] = useState()
    const [chargePower, setChargePower] = useState()
    const [chargerCapacity, setChargerCapacity] = useState()
    const [electricalOutlet, setElectricalOutlet] = useState()


    const YearKm = kmMonth * 12
const TiresSwap = ((variableTireYearCost / 50000) * YearKm)
    const serviceCost = ((variableServiceYearCost/30000)*YearKm)
    const batteryYearCost = ((batteryChange/250000)*YearKm)
    const EnergyYearCost = (((energyConsumption *YearKm) /100 )*energyCost)
    const YearCost = TiresSwap +serviceCost + batteryYearCost +EnergyYearCost
    const OneKmCost = YearCost / YearKm
    return (
        <ObliczContainer>
            <PageNav/>
            <FormStyle>
                <h1>Oblicz koszt utrzymania oraz czas ładowania elektrycznego samochodu</h1>
                <span>Od ceny nie jest odliczany podatek</span>
                <LabelContainer>
                    <CalculateLabel> Ile km pokonujesz miesiecznie <span>[km]</span></CalculateLabel><InputNumber
                    value={kmMonth} onChange={e => setKmMonth(e.target.value)} className="inputNumber" type="number"
                    placeholder="np:3000"></InputNumber></LabelContainer>

                <LabelContainer>
                    <CalculateLabel> Koszty stałe roczne (ubezpieczenie,przegląd obowiązkowy) <span>[zł]</span> </CalculateLabel>
                    <InputNumber
                        value={yearCost} onChange={e => setYearCost(e.target.value)} className="inputNumber"

                        placeholder="2500" type="number"></InputNumber></LabelContainer>
                <p>Koszty zmienne</p>

                <LabelContainer>
                    <CalculateLabel> serwisowanie co 30 tysięcy  km<span>[zł]</span> </CalculateLabel>
                    <InputNumber
                        value={variableServiceYearCost} onChange={e => setVariableServiceYearCost(e.target.value)} className="inputNumber"
                        placeholder="2500" type="number"></InputNumber></LabelContainer>
                <LabelContainer>
                    <CalculateLabel> wymiana opon co 50 tysięcy  km<span>[zł]</span> </CalculateLabel>
                    <InputNumber
                        value={variableTireYearCost} onChange={e => setVariableTireYearCost(e.target.value)} className="inputNumber"
                        placeholder="2500" type="number"></InputNumber></LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Koszt wymiany akumulatora co 250tysięcy kilometrów<span>[zł]</span> </CalculateLabel><InputNumber
                    value={batteryChange} onChange={e => setBatteryChange(e.target.value)} className="inputNumber"
                    placeholder="45000zł" type="number"></InputNumber></LabelContainer>


                <LabelContainer>
                    <CalculateLabel> Zużycie pradu na 100km <span>[kWh]</span></CalculateLabel><InputNumber
                    value={energyConsumption} onChange={e => setEnergyConsumption(e.target.value)}
                    className="inputNumber" placeholder="1000" type="number"></InputNumber>
                </LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Cena pradu za 1kWh <span>[zł]</span></CalculateLabel> <InputNumber
                    value={energyCost} onChange={e => setEnergyCost(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></InputNumber></LabelContainer>

                <span>Oblicz czas ładowania</span>
                <LabelContainer>
                    <CalculateLabel> Moc ładowarki <span>[kW]</span></CalculateLabel> <InputNumber
                    value={chargePower} onChange={e => setChargePower(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></InputNumber>
                </LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Pojemność akumulatora <span>[kWh]</span></CalculateLabel> <InputNumber
                    value={chargerCapacity} onChange={e => setChargerCapacity(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></InputNumber></LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Moc gniazda elektrycznego przez które będziemy
                        ładować <span>[kWh]</span></CalculateLabel> <InputNumber
                    value={electricalOutlet} onChange={e => setElectricalOutlet(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></InputNumber></LabelContainer>

                <input onClick={e => {
                    e.preventDefault()
                }} type="submit"></input>
                <span>robisz rocznie {YearKm} Kilometry</span>
                <span>serwisowanie co 30 tysięcy wynosi = {serviceCost}zł</span>
                <span>Wymiana opon rocznie = {TiresSwap}</span>
                <span>Wymiana akumulatora rocznie bedzie kosztowac {batteryYearCost}</span>
                <span>Koszt prądu wynosi {EnergyYearCost}</span>
                <span>Roczny koszt wyniesie {YearCost} zł</span>
                <span>Koszt jednego kilometra to {OneKmCost.toFixed(2)}zł</span>
                <span>czas ładowania to </span>
                <span>koszt jednego ładowania to </span>

            </FormStyle>
        </ObliczContainer>

    );
};

export default Oblicz;