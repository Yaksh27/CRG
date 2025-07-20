import { e } from "mathjs";
import { use, useEffect, useState } from "react";

function CountrySearch(){

    const [input, setInput] = useState("");
    const [country, setCountry] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [error, setError] = useState();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if(value.trim()===''){
            setFiltered([]);
            return;
        }
        const matches = country.filter(country => country.toLowerCase().startsWith(value.toLowerCase()))
        setFiltered(matches);
    }

    useEffect(()=> {
        fetch('https://countriesnow.space/api/v0.1/countries/positions ')
        .then(res=> 
            res.json())
        .then(data =>{
            const CountryList = data.data.map(item => item.name);
            setCountry(CountryList);
            console.log(CountryList);
           
        })
        .catch(err=>
            console.error('Failed to fetch countries : ', err)) 
    }, []);

    const handleCountryClick = (country) => {
    setInput(country);
    setFiltered([]);
  };
    

    return ( 
        <div>
            <input type="text"
            placeholder="Enter a country name..." 
            value={input}
            className="border border-gray-800 px-8 mt-10 py-3 rounded-lg bg-white ml-20"
            onChange={handleChange}   />

            {filtered.length > 0 && (
                <ul>
                    {filtered.map((country,index)=>
                    <li key={index} onClick = {()=> handleCountryClick(country)}>
                        {country}
                    </li>
                    )}
                </ul>
            )}
            

        </div>
    )
 }

 export default CountrySearch;