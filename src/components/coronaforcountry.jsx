import axios from "axios";
import { API_URL } from "../constant/const";
import { API_TOKEN } from "../constant/const";
import Card from "./card"
import { useEffect, useState } from "react";

const CoronaForCountry = () => {
    const [data, setData] = useState([]);
    const [queryText, setQueryText] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const resp = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
            headers: {
                Authorization: API_TOKEN
            }
        })
        setLoading(false);
        setData(resp.data.result)
    }

    useEffect(() => {
        fetchData();
    }, [queryText]);


    return (
        <>
            <div className="mb-4">
                <input value={queryText} onChange={(e) => setQueryText(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-indigo-600" placeholder="Search" />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {loading && <p>Loading ...</p>}
                {!loading && data.map((item) => {
                    return (
                        <Card key={item.country} country={item.country} totalCase={item.totalCases} totalDeaths={item.totalDeaths} totalRecovered={item.totalRecovered} />
                    )
                })}
            </div>
        </>
    )
}

export default CoronaForCountry;