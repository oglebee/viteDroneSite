import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import "./csvparse.css" ;
import APIViolation from './violations';

interface DataEntry {
  BBL: string;
  // Define other properties based on your CSV structure
}

interface DataResult {
  result: DataEntry;
  missing: string[];
}

function fetchDataFromCSV(csvPath: RequestInfo | URL): Promise<DataEntry[]> {
  return fetch(csvPath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(text => Papa.parse<DataEntry>(text, { header: true }).data);
}

function CSVparse() {
  const [dataLL84, setDataLL84] = useState<DataEntry[]>([]);
  const [dataLL87, setDataLL87] = useState<DataEntry[]>([]);
  const [dataLL97, setDataLL97] = useState<DataEntry[]>([]);
  const [inputBBLs, setInputBBLs] = useState<string[]>([]);
  const [selectedBBLData, setSelectedBBLData] = useState<DataResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchDataFromCSV('/data/LL84.csv'),
      fetchDataFromCSV('/data/LL87.csv'),
      fetchDataFromCSV('/data/LL97.csv')
    ])
      .then(([data84, data87, data97]) => {
        console.log("LL84 Data:", data84);
        console.log("LL87 Data:", data87);
        console.log("LL97 Data:", data97);
        setDataLL84(data84);
        setDataLL87(data87);
        setDataLL97(data97);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const getDataForBBL = (bbl: string): DataResult => {
    // Initialize an empty result object
    let result = { BBL: bbl };
  
    // Initialize an empty array to store the names of the csv files where the bbl is not found
    const missing = [];
  
    // Find the bbl in the first csv file
    const ll84Entry = dataLL84.find(entry => entry.BBL === bbl);
    // If the bbl is not found, add the name of the csv file to the missing array
    if (!ll84Entry) {
      missing.push("LL84.csv");
    } else {
      // If the bbl is found, add the properties from the first csv file to the result object
      result = { ...result, ...ll84Entry };
    }
  
    // Repeat the same process for the second and third csv files
    const ll87Entry = dataLL87.find(entry => entry.BBL === bbl);
    if (!ll87Entry) {
      missing.push("LL87.csv");
    } else {
      result = { ...result, ...ll87Entry };
    }
  
    const ll97Entry = dataLL97.find(entry => entry.BBL === bbl);
    if (!ll97Entry) {
      missing.push("LL97.csv");
    } else {
      result = { ...result, ...ll97Entry };
    }
  
    // Return the result object and the missing array
    return { result, missing };
  };

  const handleBBLInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const bbls = value.split(/[\n,]+/).map((bbl: string) => bbl.trim()).filter(Boolean);
    setInputBBLs(bbls);
  };

  const handleRetrieveData = () => {
    const selectedData = inputBBLs.map(getDataForBBL);
    setSelectedBBLData(selectedData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bbl'>
      <div>
        <label htmlFor="bblInput">Enter BBLs:</label>
        <textarea
          id="bblInput"
          value={inputBBLs.join('\n')}
          onChange={handleBBLInputChange}
        />
        <p>Pulls data from LL84, LL87, and LL97 documents issued once per year (paste multiple BBLs)</p>
        <button onClick={handleRetrieveData}>Fetch Data</button>
        
      </div>

      <div>
        <h2>Selected BBL Data:</h2>
        {selectedBBLData.length > 0 && (
          selectedBBLData.map((data, index) => (
            <pre key={index}>{JSON.stringify(data, null, 2)}</pre>
          ))
        )}
      </div>
      <div> < APIViolation /> </div>
      </div>
  );
}

export default CSVparse;