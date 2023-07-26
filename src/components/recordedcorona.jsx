import axios from "axios";
import { API_URL } from "../constant/const";
import { API_TOKEN } from "../constant/const";
import { useEffect, useState } from "react";



function RecordedCorona() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const resp = await axios.get(`${API_URL}totalData`,
            {
                headers: {
                    Authorization: API_TOKEN
                }
            });
        setLoading(false);
        setData(resp.data.result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            {
                loading ? <p>Loading ...</p> :
                    <>
                        <h1 className="text-5xl text-gray-900 mb-4">Total Cases : {data.totalCases}</h1>
                        <h1 className="text-5xl text-gray-800 mb-6">Total Deaths : {data.totalDeaths}</h1>
                        <h1 className="text-5xl text-gray-700">Total Recovered : {data.totalRecovered}</h1>
                    </>
            }
        </div>
    )
}

export default RecordedCorona
