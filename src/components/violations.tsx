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

    const fetchData = async () => {
        try {
            const boro = inputValue.substring(0, 1);
            //const block = inputValue.substring(1, 6);
            //const lot = inputValue.substring(6, 10);
            const appToken = import.meta.env.VITE_APP_ENERGY_DATA;
    
            const response = await axios.get(`https://data.cityofnewyork.us/resource/3h2n-5cm9.json?$where=boro='${boro}'`, {
                headers: {
                    'X-App-Token': appToken
                }
            });
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
                <button type="submit">Fetch Data</button>
            </form>
            {data.map((item, index) => (
                <div key={index}>
                    <h3>Violation Number: {item.violation_number}</h3>
                    <p>Type: {item.violation_type}</p>
                    <p>Category: {item.violation_category}</p>
                    <p>Address: {item.house_number} {item.street}</p>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    );
};

export default APIViolation;
