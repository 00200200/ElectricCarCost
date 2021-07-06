import React, {useState} from 'react';
import Map from "../../components/Map/Map";
import PageNav from "../../components/Header/PageNav";
import {ObliczContainer} from "./Oblicz.styles.js";
import {FormStyle} from "./Oblicz.styles.js";
import "./obliczstyle.scss"

const Oblicz = () => {
    const [kmMonth, setkmMonth] = useState()
    const [yearCost, setYearCost] = useState()
    const [batteryChange, setBatteryChange] = useState()
    const [batteryMonthChange, setBatteryMonthChange] = useState()
    const [energyCost, setEnergyCost] = useState()
    const [energyConsumption, setEnergyConsumption] = useState()
    const [chargePower, setChargePower] = useState()
    const [chargerCapacity,setChargerCapacity] = useState()
    const [electricalOutlet,setElectricalOutlet] = useState()
    return (
        <ObliczContainer>
            <PageNav/>
            <FormStyle>
                <h1>Oblicz koszt utrzymania oraz czas ładowania elektrycznego samochodu</h1>
                <span>Od ceny nie jest odliczany podatek</span>
                <div className="labelContainer">
                    <label className="calculate_label">Ile km pokonujesz miesiecznie <span>[KM]</span></label><input
                    value={kmMonth} onChange={e => setkmMonth(e.target.value)} className="inputNumber" type="number"
                    placeholder="np:3000"></input></div>

                <div className="labelContainer">
                    <label className="calculate_label">Koszty
                        coroczne <span>np(oleje,wymiana opon,płyn do spryskiwaczy)</span> [zł]</label> <input
                    value={yearCost} onChange={e => setYearCost(e.target.value)} className="inputNumber"
                    placeholder="2500" type="number"></input></div>
                <div className="labelContainer">
                    <label className="calculate_label">Koszt wymiany akumulatorów<span>[zł]</span> </label><input
                    value={batteryChange} onChange={e => setBatteryChange(e.target.value)} className="inputNumber"
                    placeholder="45000zł" type="number"></input></div>

                <div className="labelContainer">
                    <label className="calculate_label">Co ile miesiecy sa wymieniane akumulatory<span>[miesiące]</span>
                    </label> <input value={batteryMonthChange} onChange={e => setBatteryMonthChange(e.target.value)}
                                    className="inputNumber" placeholder="1000" type="number"></input></div>
                <div className="labelContainer">
                    <label className="calculate_label">Cena pradu za 1kWh <span>[zł]</span></label> <input
                    value={energyCost} onChange={e => setEnergyCost(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></input></div>
                <div className="labelContainer">
                    <label className="calculate_label">Zużycie pradu na 100km <span>[kWh]</span></label><input
                    value={energyConsumption} onChange={e => setEnergyConsumption(e.target.value)}
                    className="inputNumber" placeholder="1000" type="number"></input></div>

                <div className="labelContainer">
                    <label className="calculate_label">Moc ładowarki <span>[kW]</span></label> <input
                    value={chargePower} onChange={e => setChargePower(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></input></div>
                <div className="labelContainer">
                    <label className="calculate_label">Pojemność ładowarki <span>[kWh]</span></label> <input
                    value={chargerCapacity} onChange={e => setChargerCapacity(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></input></div>
                <div className="labelContainer">
                    <label className="calculate_label">Moc gniazda elektrycznego przez które będziemy ładować <span>[kWh]</span></label> <input
                    value={electricalOutlet} onChange={e => setElectricalOutlet(e.target.value)} className="inputNumber"
                    placeholder="1000" type="number"></input></div>


                <input type="submit"></input>


            </FormStyle>
        </ObliczContainer>

    );
};

export default Oblicz;