import React, { useState } from 'react';
import axios from 'axios';

interface ApiResponse {
    isn_dob_bis_viol: string;
    boro: string;
    bin: string;
    block: string;
    lot: string;
    issue_date: string;
    violation_type_code: string;
    violation_number: string;
    house_number: string;
    street: string;
    disposition_date: string;
    disposition_comments: string;
    device_number: string;
    number: string;
    violation_category: string;
    violation_type: string;
    description?: string;
    ecb_number?: string;
}

const APIViolation: React.FC = () => {
    const [ data, setData] = useState<ApiResponse[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [message, setMessage] = useState("");

    const fetchData = async () => {
        try {
            const boro = inputValue.substring(0, 1);
            const block = inputValue.substring(1, 6);
            const lot = inputValue.substring(6, 10);
            const appToken = import.meta.env.VITE_APP_ENERGY_DATA;
    
            const response = await axios.get(`https://data.cityofnewyork.us/resource/3h2n-5cm9.json?$where=boro='${boro}'%20AND%20block='${block}'%20AND%20lot='${lot}'`, {
                headers: {
                    'X-App-Token': appToken
                }
            });

            if (response.data.length === 0) {
                setMessage("No violations found for that BBL");
            } else {
                setData(response.data);
                setMessage(""); // Clear the message when data is found
            }

            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchData();
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <p>Enter single BBL to see all violations from NYC DOB Violations DB (wait for loading)</p>
                <button className='butt' type="submit">Fetch Data</button>
            </form>
            {data.map((item, index) => (
                <div key={index}>
                    <h3>Violation Number: {item.violation_number}</h3>
                    <p>Type: {item.violation_type}</p>
                    <p>Category: {item.violation_category}</p>
                    <p>Address: {item.house_number} {item.street}</p>
                    <p>BIN: {item.bin}</p>
                    <p>Lot: {item.lot}</p>
                    {/* Add more fields as needed */}
                </div>
            ))}
            {message && <p>{message}</p>}
        </div>
    );
};

export default APIViolation;
