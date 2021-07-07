import React from 'react';
import PageNav from "../../components/Header/PageNav";

const Porównaj = () => {
    const AllCostInfo = JSON.parse(localStorage.getItem('costInfo'))
    console.log(AllCostInfo)
    if (AllCostInfo === null) {
        return (<>
                <PageNav/>
                <h1>Dodaj produkty</h1>
            </>
        )
    }
    {
        AllCostInfo.map((item) => {
            return (<>
                    <PageNav/>
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
    }
}

export default Porównaj;