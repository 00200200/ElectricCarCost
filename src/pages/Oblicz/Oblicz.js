import React, {useEffect, useState} from 'react';
import Map from "../../components/Map/Map";
import PageNav from "../../components/Header/PageNav";
import {
    CalculateInputSubmit,
    CalculateSelectTypeContainer,
    H1Alert, H1Calculate,
    ObliczContainer, SelectTypeContainer, SelectTypeP
} from "./Oblicz.styles.js";
import {FormStyle, CalculateLabel, LabelContainer, InputNumber, ImgStyles} from "./Oblicz.styles.js";
import photo from "../assets/images/Background.png"
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/footer";
import {AiFillCar, AiOutlineCar} from "react-icons/all";

const Oblicz = () => {
    const [name, setName] = useState("")
    const [kmMonth, setKmMonth] = useState("")
    const [yearCost, setYearCost] = useState("")
    const [variableServiceYearCost, setVariableServiceYearCost] = useState("")
    const [variableTireYearCost, setVariableTireYearCost] = useState("")
    const [batteryChange, setBatteryChange] = useState("")
    const [energyCost, setEnergyCost] = useState("")
    const [energyConsumption, setEnergyConsumption] = useState("")
    const [chargePower, setChargePower] = useState("")
    const [chargerCapacity, setChargerCapacity] = useState("")
    const [electricalOutlet, setElectricalOutlet] = useState("")
    const [informations, setInformations] = useState([])
    const [disable, setDisable] = useState(true)
    const [error, setError] = useState("")
    // AUTO ELEKTRYCZNE
    const [isHidden,setIsHidden] = useState(true)
    const [combustionIsHideen,setCombustionIsHidden] = useState(false)
// AUTO SPALINOWE
    const [combustionCarName,setCombustionCarName] = useState("")
    const [combustionKmMonth,setCombustionKmMonth] = useState("")
    const [combustionYearCost,setCombustionYearCost] = useState("")
    const [combustionVariableServiceYearCost,setCombustionVariableServiceYearCost] = useState("")
    const [combustionVariableTireYearCost,setCombustionVariableTireYearCost] = useState("")
    const [combustionConsumption,setCombustionConsumption] = useState("")
    const [fuelCost,setFuelCost] = useState("")
    const [combustionInfo,setCombustionInfo] = useState([])


    const YearKm = kmMonth * 12
    const TiresSwap = ((variableTireYearCost / 50000) * YearKm)
    const serviceCost = ((variableServiceYearCost / 30000) * YearKm)
    const batteryYearCost = ((batteryChange / 250000) * YearKm)
    const EnergyYearCost = (((energyConsumption * YearKm) / 100) * energyCost)
    const YearCost = TiresSwap + serviceCost + batteryYearCost + EnergyYearCost
    const OneKmCost = YearCost / YearKm
    useEffect(() => {
        if (name != "" && kmMonth != "" && yearCost != "" && variableServiceYearCost != "" && variableTireYearCost != "" && batteryChange != "" && energyCost != "" && energyConsumption != "")
        {  setDisable(false)
 setError("")
        }
        else {setError("Wypełnij wszystkie pola")}
    })

    const CombustionYearKm = combustionKmMonth * 12;
    const CombustionTiresSwap = ((combustionVariableTireYearCost/50000)*CombustionYearKm)
    const CombustionServiceCost = ((variableServiceYearCost / 30000) *CombustionYearKm)
    const FuelCost = (((combustionConsumption*CombustionYearKm)/100) * fuelCost)
    const CombustionYearCost = CombustionTiresSwap + CombustionServiceCost + FuelCost + combustionYearCost
    const CombustionOneKmCost = CombustionYearCost / CombustionYearKm;
    const CombustionOnSubmit = (e) => {
        e.preventDefault()
        setCombustionInfo([...combustionInfo,{
            NAME:combustionCarName,
            YEARKM:CombustionYearKm,
            TIRESWAP:CombustionTiresSwap,
            SERVICECOST:CombustionServiceCost,
            FUELCOST:FuelCost,
            YEARCOST:CombustionYearCost,
            ONEKMCOST:CombustionOneKmCost,
        }])
        setCombustionCarName("")
        setCombustionKmMonth("")
        setCombustionYearCost("")
        setCombustionVariableTireYearCost("")
        setCombustionVariableServiceYearCost("")
        setCombustionConsumption("")
        setFuelCost("")

    }

    const onSubmitClick = (e) => {
        e.preventDefault()
        setInformations([...informations,{
            NAME: name,
            YEARKM: YearKm,
            TIRESWAP: TiresSwap,
            SERVICECOST: serviceCost,
            BATTERYYEARCOST: batteryYearCost,
            ENERGYYEARCOST: EnergyYearCost,
            YEARCOST: YearCost,
            ONEKMCOST: OneKmCost
        }])
        setName("")
        setKmMonth("")
        setYearCost("")
        setVariableTireYearCost("")
        setVariableServiceYearCost("")
        setBatteryChange("")
        setEnergyCost("")
        setEnergyConsumption("")
        setChargerCapacity("")
        setChargePower("")
        setChargerCapacity("")
        setElectricalOutlet("")
        localStorage.setItem('costInfo', JSON.stringify(informations))
        // JSON.parse(localStorage.getItem('costInfo'))
    }

    const setHiddenElectric = () => {
        setIsHidden(false)
        setCombustionIsHidden(true)
    }
    const setHiddenConsumbtion = () =>{
        setIsHidden(true)
        setCombustionIsHidden(false)
    }


    return (
<>
        <PageNav/>
        <ObliczContainer>

            <CalculateSelectTypeContainer>
                <SelectTypeContainer>  <AiFillCar onClick={setHiddenElectric} style={{fontSize:"5rem" , color:"#BADA55", cursor:"pointer"}}>
                </AiFillCar>
                    <SelectTypeP>AUTO <br></br>ELEKTRYCZNE</SelectTypeP>
                </SelectTypeContainer>

             <SelectTypeContainer>
                 <AiOutlineCar onClick={setHiddenConsumbtion} style={{fontSize:"5rem" , color:"", cursor:"pointer"}}>

             </AiOutlineCar>
                 <SelectTypeP>AUTO<br></br> SPALINOWE</SelectTypeP>
             </SelectTypeContainer>

            </CalculateSelectTypeContainer>

            <FormStyle style={isHidden?{display:"none"}:{display: "flex"}}>
                <H1Calculate style={{color: "white"}}>Oblicz koszt utrzymania oraz czas ładowania elektrycznego samochodu</H1Calculate>
                <span style={{color: "white"}}>Od ceny nie jest odliczany podatek</span>
                <LabelContainer>
                    <CalculateLabel> Nazwa pojazdu </CalculateLabel><InputNumber
                    value={name} onChange={e => setName(e.target.value)} className="inputNumber" type="text"
                    placeholder="np:Audi Q4 e-tron"></InputNumber></LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Ile km pokonujesz miesiecznie <span>[km]</span></CalculateLabel><InputNumber
                    value={kmMonth} onChange={e => setKmMonth(e.target.value)} className="inputNumber" type="number"
                    placeholder="np:3000"></InputNumber></LabelContainer>

                <LabelContainer>
                    <CalculateLabel> Koszty stałe roczne (ubezpieczenie,przegląd obowiązkowy) <span>[zł]</span>
                    </CalculateLabel>
                    <InputNumber
                        value={yearCost} onChange={e => setYearCost(e.target.value)} className="inputNumber"
                        placeholder="2500" type="number"></InputNumber></LabelContainer>
                <p style={{color: "white"}}>Koszty zmienne</p>
                <LabelContainer>
                    <CalculateLabel> serwisowanie co 30 tysięcy km<span>[zł]</span> </CalculateLabel>
                    <InputNumber
                        value={variableServiceYearCost} onChange={e => setVariableServiceYearCost(e.target.value)}
                        className="inputNumber"
                        placeholder="2500" type="number"></InputNumber></LabelContainer>
                <LabelContainer>
                    <CalculateLabel> wymiana opon co 50 tysięcy km<span>[zł]</span> </CalculateLabel>
                    <InputNumber
                        value={variableTireYearCost} onChange={e => setVariableTireYearCost(e.target.value)}
                        className="inputNumber"
                        placeholder="2500" type="number"></InputNumber></LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Koszt wymiany akumulatora co 250tysięcy kilometrów<span>[zł]</span>
                    </CalculateLabel><InputNumber
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

                <span style={{color: "white"}}>Oblicz czas ładowania</span>
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

              <CalculateInputSubmit onClick={onSubmitClick} disabled={disable} type="submit"></CalculateInputSubmit>
                <H1Alert>{error}</H1Alert>
            </FormStyle>
            <FormStyle style={combustionIsHideen?{display:"none"}:{display: "flex"}}>
<H1Calculate>Oblicz koszt utrzymania samochodu spalinowego</H1Calculate>
                <LabelContainer>
                    <CalculateLabel>Nazwa pojazdu <span>[km]</span></CalculateLabel> <InputNumber
                    value={combustionCarName} onChange={e => setCombustionCarName(e.target.value)} className="inputNumber"
                    placeholder="Volkswagen Scirocco" type="text"></InputNumber>
                </LabelContainer>
                <LabelContainer>
                    <CalculateLabel>Ile kilometrów robisz miesięcznie <span>[km]</span></CalculateLabel> <InputNumber
                    value={combustionKmMonth} onChange={e => setCombustionKmMonth(e.target.value)} className="inputNumber"
                    placeholder="2500" type="number"></InputNumber>
                </LabelContainer>
                <LabelContainer>
                    <CalculateLabel> Koszty stałe roczne (ubezpieczenie,przegląd obowiązkowy) <span>[zł]</span></CalculateLabel> <InputNumber
                    value={combustionYearCost} onChange={e => setCombustionYearCost(e.target.value)} className="inputNumber"
                    placeholder="4000" type="number"></InputNumber>
                </LabelContainer>
                <LabelContainer>
                    <CalculateLabel>serwisowanie co 30 tysięcy km <span>[zł]</span></CalculateLabel> <InputNumber
                    value={combustionVariableServiceYearCost} onChange={e => setCombustionVariableServiceYearCost(e.target.value)} className="inputNumber"
                    placeholder="2500" type="number"></InputNumber>
                </LabelContainer>   <LabelContainer>
                    <CalculateLabel>wymiana opon co 50 tysięcy km <span>[zł]</span></CalculateLabel> <InputNumber
                    value={combustionVariableTireYearCost} onChange={e => setCombustionVariableTireYearCost(e.target.value)} className="inputNumber"
                    placeholder="2000" type="number"></InputNumber>
                </LabelContainer>   <LabelContainer>
                    <CalculateLabel>Spalanie na 100 km <span>[litr]</span></CalculateLabel> <InputNumber
                    value={combustionConsumption} onChange={e => setCombustionConsumption(e.target.value)} className="inputNumber"
                    placeholder="8" type="text"></InputNumber>
                </LabelContainer> <LabelContainer>
                    <CalculateLabel>Cena paliwa  za litr<span>[litr]</span></CalculateLabel> <InputNumber
                    value={fuelCost} onChange={e => setFuelCost(e.target.value)} className="inputNumber"
                    placeholder="5,55" type="number"></InputNumber>
                </LabelContainer>
                <CalculateInputSubmit onClick={CombustionOnSubmit} disabled={disable} type="submit"></CalculateInputSubmit>

            </FormStyle>
        </ObliczContainer>
        <Footer></Footer>

</>
    );
};

export default Oblicz;