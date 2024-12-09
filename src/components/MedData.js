import React, { useState } from "react";

export default function MedData({ med }) {
    let { salt, available_forms, salt_forms_json } = med;
    const strengthes = salt_forms_json[available_forms[0]]
    console.log(strengthes);
    const [selectForm, setSelectForm] = useState(null);
    const [selectStrength, setSelectStrength] = useState({ stgh: strengthes, idx: null });

    const [selectPackage, setSelectPackage] = useState({ pkg: strengthes[0], idx: null })

    const [more, setMore]=useState([
        { moreless: 3, bool: true },
        { moreless: 3, bool: true },
        { moreless: 3, bool: true },
    ])


    // console.log("tablets forms and strength", salt_forms_json);
    console.log(typeof salt_forms_json);



    const handleShow = (val) => {
        console.log("this is for the test", more[val]);
        const temp=more;
        if (more[val].bool) {
            temp[val]={moreless: available_forms.length, bool: !more[val].bool}
            setMore(temp);
            // setMore(available_forms.length);
        } else {
            temp[val]={moreless: 3, bool: !more[val].bool}
            setMore(temp)
        }
        
    }

    const handleSelect = (index, form) => {
        setSelectForm(index);
        setSelectStrength({ ...selectStrength, stgh: salt_forms_json[form] });
        console.log("selectStrength:", selectStrength);

    }

    const handleSelectStrength = (idx, strength) => {
        setSelectStrength({ ...selectStrength, idx })
        setSelectPackage({ pkg: selectStrength.stgh[strength] })
    }


    return (
        // <div className="app-body">
        <div className='med-item'>
            <div className="med-info med-div">
                <div className="med-types-data">
                    {/* salts form : */}
                    <div className="med-type">
                        Form:
                    </div>
                    <div className="med-rows-style">
                        {available_forms.slice(0, more[0].moreless).map((form, index) => {
                            return (
                                <button
                                    key={index}
                                    className={selectForm === index ? "med-selected-btn" : "med-not-selected-btn"}
                                    onClick={() => handleSelect(index, form)}>
                                    {form}
                                </button>
                            )
                        })}

                        {
                            available_forms.length > 3 ?
                                <button className="hide-btn" onClick={()=>handleShow(0)}>{more[0].bool ? "more" : "less"}</button>
                                : null
                        }

                    </div>
                </div>
                {/* salts Strength : */}
                <div className="med-types-data">
                    <div className="med-type">
                        Strength :
                    </div>
                    <div className="med-rows-style">
                        {/* i'll make salt strength based on 
                        wehn i click the form then strengths=salt_forms_json[form] */}
                        {Object.keys(selectStrength.stgh).slice(0, more[1].moreless).map((strength, index) => {
                            return (
                                <button
                                    key={index}
                                    className={selectStrength.idx === index ? "med-selected-btn" : "med-not-selected-btn"}
                                    onClick={() => handleSelectStrength(index, strength)}>
                                    {strength}
                                </button>
                            )
                        })}
                        {
                            Object.keys(selectStrength.stgh).length > 3 ?
                                <button className="hide-btn" onClick={()=>handleShow(1)}>{more[1].bool ? "more" : "less"}</button>
                                : null
                        }
                    </div>
                </div>

                {/* salts Packaging : */}

                <div className="med-types-data">
                    <div className="med-type">
                        Packaging:
                        {/* when click on perticular strength
                    packeges=strengthes["clicked ctrength"] */}
                    </div>
                    <div className="medicine-data med-rows-style">
                        <button className="med-data-btn med-not-selected-btn"> 10 Strips </button>
                    </div>
                </div>
            </div>


            {/* salt name and contain */}
            <div className="med-div2 med-div">
                <div className="med-salts">
                    {salt}
                </div>
                <div className="">
                    contain
                </div>
            </div>

            {/* price will shows here */}
            <div className="med-div2 med-div">
                <div className="med-price">
                    price
                </div>

            </div>
        </div>
        // </div>
    )
}