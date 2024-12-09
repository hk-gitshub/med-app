import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function AppHeader({ setMedicine }) {
    const [query, setQuery] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        let medData = await fetch(`https://backend.cappsule.co.in/api/v1/new_search?q=${query}&pharmacyIds=1,2,3`)
            .then(res => res.json())
            .then(data => data)

        medData = medData.data.saltSuggestions;
        setMedicine(medData);
        // console.log(medicine);
        // console.log(medData);

    }

    return (
        <>
            <div className="app-header">
                <div className="header">Please search your medicine</div>
                {/* <div className="search-box"> */}
                <form className="inp-box" onSubmit={handleSubmit}>
                    <div className="search-icon">
                        <FontAwesomeIcon icon="fa-regular faCoffee" />
                    </div>
                    <input className="search-feild" type="search"
                        placeholder="Type your madicine here"
                        onChange={(e) => (setQuery(e.target.value))} />
                    <div className="search-btn">
                        <button className='submit-btn' type='submit'>
                            Search
                        </button>
                    </div>
                    {/* </div> */}

                </form>
                <hr className="hr-line" />
            </div>
        </>
    )
}