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
import {AiFillCar, AiOutlineCar, RiBattery2ChargeLine} from "react-icons/all";

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

    const [chargeName, setChargeName] = useState("")
    const [chargerCapacity, setChargerCapacity] = useState("")
    const [electricalOutlet, setElectricalOutlet] = useState("")
    const [chargerIsHidden, setChargerIsHidden] = useState(true)
    const [informations, setInformations] = useState(null) // tablica
    const [displayBtn, setDisplayBtn] = useState(true)
    const [displayCombustionBtn, setDisplayCombustionBtn] = useState(true)
    const [error, setError] = useState("")
    const [errorCombustion, setErrorCombustion] = useState("")
    const [errorCharger, setErrorCharger] = useState("")
    const [isHidden, setIsHidden] = useState(false)
    const [combustionIsHideen, setCombustionIsHidden] = useState(true)
    const [chargerBtnDisplay, setChargerBtnDisplay] = useState(true)
    const [chargeInfo, setChargeInfo] = useState(null)
    const [chargeTime,setChargeTime] = useState(null)
// AUTO SPALINOWE
    const [combustionCarName, setCombustionCarName] = useState("")
    const [combustionKmMonth, setCombustionKmMonth] = useState("")
    const [combustionYearCost, setCombustionYearCost] = useState("")
    const [combustionVariableServiceYearCost, setCombustionVariableServiceYearCost] = useState("")
    const [combustionVariableTireYearCost, setCombustionVariableTireYearCost] = useState("")
    const [combustionConsumption, setCombustionConsumption] = useState("")
    const [fuelCost, setFuelCost] = useState("")
    const [combustionInfo, setCombustionInfo] = useState(null)

    const YearKm = kmMonth * 12
    const TiresSwap = ((variableTireYearCost / 50000) * YearKm)
    const serviceCost = ((variableServiceYearCost / 30000) * YearKm)
    const batteryYearCost = ((batteryChange / 250000) * YearKm)
    const EnergyYearCost = (((energyConsumption * YearKm) / 100) * energyCost)
    const YearCost = TiresSwap + serviceCost + batteryYearCost + EnergyYearCost + parseInt(yearCost)
    const OneKmCost = YearCost / YearKm

    // ERRORS AND DISPLAY BUTTONS
    useEffect(() => {
        if (name != "" && kmMonth != "" && yearCost != "" && variableServiceYearCost != "" && variableTireYearCost != "" && batteryChange != "" && energyCost != "" && energyConsumption != '') {
            setDisplayBtn(false)
            setError("")
        } else {
            setDisplayBtn(true)
            setError("Wype??nij wszystkie pola, aby przej???? dalej")
        }
    })
    useEffect(() => {
        if (combustionCarName != "" && combustionKmMonth != "" && combustionYearCost != "" && combustionVariableServiceYearCost != "" && combustionVariableTireYearCost != "" && combustionConsumption != "" && FuelCost != "") {
            setDisplayCombustionBtn(false)
            setErrorCombustion("")
        } else {
            setDisplayCombustionBtn(true)
            setErrorCombustion("Wype??nij wszystkie pola, aby przej???? dalej")
        }
    })
    useEffect(() => {
        if (chargePower != "" && chargerCapacity != "" && electricalOutlet != "" && chargeName != "") {
            setErrorCharger("")
            setChargerBtnDisplay(false)
        } else {
            setChargerBtnDisplay(true)
            setErrorCharger("Aby obliczy?? czas ??adowania wype??nij wszystkie pola.")
        }
    })
    // ChargePower == Moc ladowarki
    //  ElectricalOutlet moc gniazdka
    // CALCULATE COMBUSTIONCARS
    // useEffect = () => {
    //     if (chargePower != "" && electricalOutlet != "" && chargerCapacity != ""){
    //         return
    //     }
    //     if (chargePower  < electricalOutlet){
    //            setChargeTime(parseInt(chargerCapacity) / parseInt(chargePower))
    //
    //     }else {
    //          setChargeTime(parseInt(chargerCapacity) / parseInt(electricalOutlet))
    //     }
    // }
//
//     if(chargeTIme1 < chargeTIme2){
//         setChargeTime(chargeTIme1)
//     }
//     else{setChargeTime(chargeTIme2)}
    useEffect(()=>{
        const chargeTIme1 = parseInt(chargerCapacity) / parseInt(chargePower)
        const chargeTIme2 = parseInt(chargerCapacity) / parseInt(electricalOutlet)
        if(chargeTIme1 < chargeTIme2){
            setChargeTime(chargeTIme1)
        }else{setChargeTime(chargeTIme2)}
        console.log(chargeTIme1,chargeTIme2)

    })
    const ChargerOnSubmit = (e) => {
        e.preventDefault()
        setChargeInfo([{
            NAME: chargeName,
            CHARGETIME:chargeTime
        }])
        setChargeName("")
        setChargerCapacity("")
        setChargePower("")
        setElectricalOutlet("")
    }



    const CombustionYearKm = combustionKmMonth * 12;
    const CombustionTiresSwap = ((combustionVariableTireYearCost / 50000) * CombustionYearKm)
    const CombustionServiceCost = ((combustionVariableServiceYearCost / 30000) * CombustionYearKm)
    const FuelCost = (((combustionConsumption * CombustionYearKm) / 100) * fuelCost)
    const CombustionYearCost = CombustionTiresSwap + CombustionServiceCost + FuelCost + parseInt(combustionYearCost)
    const CombustionOneKmCost = CombustionYearCost / CombustionYearKm;
    const CombustionOnSubmit = (e) => {
        e.preventDefault()
        setCombustionInfo([{
            NAME: combustionCarName,
            YEARKM: CombustionYearKm,
            TIRESWAP: CombustionTiresSwap,
            SERVICECOST: CombustionServiceCost,
            FUELCOST: FuelCost,
            YEARCOST: CombustionYearCost,
            ONEKMCOST: CombustionOneKmCost || 0,
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
        setInformations([{
            NAME: name,
            YEARKM: YearKm,
            TIRESWAP: TiresSwap,
            SERVICECOST: serviceCost,
            BATTERYYEARCOST: batteryYearCost,
            ENERGYYEARCOST: EnergyYearCost,
            YEARCOST: YearCost,
            ONEKMCOST: OneKmCost || 0
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
        // JSON.parse(localStorage.getItem('costInfo'))
    }

    useEffect(() => {
            let AllCostInfo = JSON.parse(localStorage.getItem('costInfo'))

            if (informations === null) {
                return
            }
            if (AllCostInfo === null) {
                AllCostInfo = [...informations]
                return localStorage.setItem('costInfo', JSON.stringify(AllCostInfo))
            }
            if (AllCostInfo.length > 0) {
                AllCostInfo = [...AllCostInfo, ...informations]
                return localStorage.setItem('costInfo', JSON.stringify(AllCostInfo))
            }
            localStorage.setItem('costInfo', JSON.stringify(informations))
        }, [informations]
    )

    useEffect(() => {
        let AllCombustionInfo = JSON.parse(localStorage.getItem('combustionInfo'))

        if (combustionInfo === null) {
            return
        }
        if (AllCombustionInfo === null) {
            AllCombustionInfo = [...combustionInfo]
            return localStorage.setItem('combustionInfo', JSON.stringify(AllCombustionInfo))
        }
        if (AllCombustionInfo.length > 0) {
            AllCombustionInfo = [...AllCombustionInfo, ...combustionInfo]
            return localStorage.setItem('combustionInfo', JSON.stringify(AllCombustionInfo))
        }
        localStorage.setItem('combustionInfo', JSON.stringify(combustionInfo))
    },[combustionInfo]
    )
   useEffect( ()=> {
       let ChargingTimeInfo = JSON.parse(localStorage.getItem('chargingInfo'))
       if (chargeInfo === null){
           return
       }
       if(ChargingTimeInfo === null){
           ChargingTimeInfo = [...chargeInfo]
           return localStorage.setItem('chargingInfo',JSON.stringify(ChargingTimeInfo))
       }
       if(ChargingTimeInfo.length >0){
           ChargingTimeInfo = [...ChargingTimeInfo,...chargeInfo]
           return localStorage.setItem('chargingInfo',JSON.stringify(ChargingTimeInfo))
       }
       localStorage.setItem('chargingInfo', JSON.stringify(chargeInfo))
   },[chargeInfo])

    const setHiddenElectric = () => {
        setIsHidden(false)
        setCombustionIsHidden(true)
        setChargerIsHidden(true)
    }
    const setHiddenConsumbtion = () => {
        setIsHidden(true)
        setCombustionIsHidden(false)
        setChargerIsHidden(true)
    }
    const setHiddenCharger = () => {
        setChargerIsHidden(false)
        setCombustionIsHidden(true)
        setIsHidden(true)
    }

    return (
        <>
            <PageNav/>
            <ObliczContainer>

                <CalculateSelectTypeContainer>
                    <SelectTypeContainer> <AiFillCar onClick={setHiddenElectric}
                                                     style={{fontSize: "5rem", color: "#BADA55", cursor: "pointer"}}>
                    </AiFillCar>
                        <SelectTypeP>AUTO <br></br>ELEKTRYCZNE</SelectTypeP>
                    </SelectTypeContainer>


                    <SelectTypeContainer>
                        <AiOutlineCar onClick={setHiddenConsumbtion}
                                      style={{fontSize: "5rem", color: "", cursor: "pointer"}}>

                        </AiOutlineCar>
                        <SelectTypeP>AUTO<br></br> SPALINOWE</SelectTypeP>
                    </SelectTypeContainer>
                    <SelectTypeContainer> <RiBattery2ChargeLine onClick={setHiddenCharger}
                                                                style={{
                                                                    fontSize: "5rem",
                                                                    color: "096cf7",
                                                                    cursor: "pointer"
                                                                }}>
                    </RiBattery2ChargeLine>
                        <SelectTypeP>CZAS <br></br>LADOWANIA</SelectTypeP>
                    </SelectTypeContainer>

                </CalculateSelectTypeContainer>

                <FormStyle style={isHidden ? {display: "none"} : {display: "flex"}}>
                    <H1Calculate style={{color: "white"}}>Oblicz koszt utrzymania oraz czas ??adowania elektrycznego
                        samochodu</H1Calculate>
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
                        <CalculateLabel> Koszty sta??e roczne (ubezpieczenie,przegl??d obowi??zkowy) <span>[z??]</span>
                        </CalculateLabel>
                        <InputNumber
                            value={yearCost} onChange={e => setYearCost(e.target.value)} className="inputNumber"
                            placeholder="2500" type="number"></InputNumber></LabelContainer>
                    <p style={{color: "white"}}>Koszty zmienne</p>
                    <LabelContainer>
                        <CalculateLabel> serwisowanie co 30 tysi??cy km<span>[z??]</span> </CalculateLabel>
                        <InputNumber
                            value={variableServiceYearCost} onChange={e => setVariableServiceYearCost(e.target.value)}
                            className="inputNumber"
                            placeholder="2500" type="number"></InputNumber></LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> wymiana opon co 50 tysi??cy km<span>[z??]</span> </CalculateLabel>
                        <InputNumber
                            value={variableTireYearCost} onChange={e => setVariableTireYearCost(e.target.value)}
                            className="inputNumber"
                            placeholder="2500" type="number"></InputNumber></LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> Koszt wymiany akumulatora co 250tysi??cy kilometr??w<span>[z??]</span>
                        </CalculateLabel><InputNumber
                        value={batteryChange} onChange={e => setBatteryChange(e.target.value)} className="inputNumber"
                        placeholder="45000z??" type="number"></InputNumber></LabelContainer>


                    <LabelContainer>
                        <CalculateLabel> Zu??ycie pradu na 100km <span>[kWh]</span></CalculateLabel><InputNumber
                        value={energyConsumption} onChange={e => setEnergyConsumption(e.target.value)}
                        className="inputNumber" placeholder="25" type="number"></InputNumber>
                    </LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> Cena pradu za 1kWh <span>[z??]</span></CalculateLabel> <InputNumber
                        value={energyCost} onChange={e => setEnergyCost(e.target.value)} className="inputNumber"
                        placeholder="0.65" type="number"></InputNumber></LabelContainer>


                    <CalculateInputSubmit onClick={onSubmitClick}
                                          style={displayBtn ? {display: "none"} : {display: "flex"}}
                                          type="submit"></CalculateInputSubmit>
                    <H1Alert>{error}</H1Alert>
                </FormStyle>
                <FormStyle style={combustionIsHideen ? {display: "none"} : {display: "flex"}}>
                    <H1Calculate>Oblicz koszt utrzymania samochodu spalinowego</H1Calculate>
                    <span style={{color: "white"}}>Od ceny nie jest odliczany podatek</span>

                    <LabelContainer>
                        <CalculateLabel>Nazwa pojazdu <span>[km]</span></CalculateLabel> <InputNumber
                        value={combustionCarName} onChange={e => setCombustionCarName(e.target.value)}
                        className="inputNumber"
                        placeholder="Volkswagen Scirocco" type="text"></InputNumber>
                    </LabelContainer>
                    <LabelContainer>
                        <CalculateLabel>Ile kilometr??w robisz miesi??cznie <span>[km]</span></CalculateLabel>
                        <InputNumber
                            value={combustionKmMonth} onChange={e => setCombustionKmMonth(e.target.value)}
                            className="inputNumber"
                            placeholder="2500" type="number"></InputNumber>
                    </LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> Koszty sta??e roczne (ubezpieczenie,przegl??d
                            obowi??zkowy) <span>[z??]</span></CalculateLabel> <InputNumber
                        value={combustionYearCost} onChange={e => setCombustionYearCost(e.target.value)}
                        className="inputNumber"
                        placeholder="4000" type="number"></InputNumber>
                    </LabelContainer>
                    <LabelContainer>
                        <CalculateLabel>serwisowanie co 30 tysi??cy km <span>[z??]</span></CalculateLabel> <InputNumber
                        value={combustionVariableServiceYearCost}
                        onChange={e => setCombustionVariableServiceYearCost(e.target.value)} className="inputNumber"
                        placeholder="2500" type="number"></InputNumber>
                    </LabelContainer> <LabelContainer>
                    <CalculateLabel>wymiana opon co 50 tysi??cy km <span>[z??]</span></CalculateLabel> <InputNumber
                    value={combustionVariableTireYearCost}
                    onChange={e => setCombustionVariableTireYearCost(e.target.value)} className="inputNumber"
                    placeholder="2000" type="number"></InputNumber>
                </LabelContainer> <LabelContainer>
                    <CalculateLabel>Spalanie na 100 km <span>[litr]</span></CalculateLabel> <InputNumber
                    value={combustionConsumption} onChange={e => setCombustionConsumption(e.target.value)}
                    className="inputNumber"
                    placeholder="8" type="text"></InputNumber>
                </LabelContainer> <LabelContainer>
                    <CalculateLabel>Cena paliwa za litr<span>[litr]</span></CalculateLabel> <InputNumber
                    value={fuelCost} onChange={e => setFuelCost(e.target.value)} className="inputNumber"
                    placeholder="5,55" type="number"></InputNumber>
                </LabelContainer>
                    <CalculateInputSubmit style={displayCombustionBtn ? {display: "none"} : {display: "flex"}}
                                          onClick={CombustionOnSubmit}
                                          type="submit"></CalculateInputSubmit>
                    <H1Alert>{errorCombustion}</H1Alert>
                </FormStyle>
                <FormStyle  style={chargerIsHidden ? {display: "none"} : {display: "flex"}}>
                    <H1Calculate>Oblicz czas ??adowania</H1Calculate>
                    <LabelContainer>
                        <CalculateLabel> Nazwa <span>[kW]</span></CalculateLabel> <InputNumber
                        value={chargeName} onChange={e => setChargeName(e.target.value)} className="inputNumber"
                        placeholder="Ladowarka X" type="text"></InputNumber>
                    </LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> Moc ??adowarki <span>[kW]</span></CalculateLabel> <InputNumber
                        value={chargePower} onChange={e => setChargePower(e.target.value)} className="inputNumber"
                        placeholder="7" type="number"></InputNumber>
                    </LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> Pojemno???? akumulatora <span>[kWh]</span></CalculateLabel> <InputNumber
                        value={chargerCapacity} onChange={e => setChargerCapacity(e.target.value)}
                        className="inputNumber"
                        placeholder="80" type="number"></InputNumber></LabelContainer>
                    <LabelContainer>
                        <CalculateLabel> Moc gniazda elektrycznego przez kt??re b??dziemy
                            ??adowa?? <span>[kWh]</span></CalculateLabel> <InputNumber
                        value={electricalOutlet} onChange={e => setElectricalOutlet(e.target.value)}
                        className="inputNumber"
                        placeholder="5" type="number"></InputNumber></LabelContainer>
                    <CalculateInputSubmit onClick={ChargerOnSubmit}
                                          style={chargerBtnDisplay ? {display: "none"} : {display: "flex"}}
                                          type="submit"></CalculateInputSubmit>
                    <H1Alert>{errorCharger}</H1Alert>
                </FormStyle>
            </ObliczContainer>
            <Footer></Footer>

        </>
    );
}

export default Oblicz;