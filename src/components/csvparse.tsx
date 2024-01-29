import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import "./csvparse.css" ;

interface DataEntry {
  BBL: string;
  // Define other properties based on your CSV structure
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

function BBLGrab() {
  const [dataLL84, setDataLL84] = useState<DataEntry[]>([]);
  const [dataLL87, setDataLL87] = useState<DataEntry[]>([]);
  const [dataLL97, setDataLL97] = useState<DataEntry[]>([]);
  const [inputBBLs, setInputBBLs] = useState<string[]>([]);
  const [selectedBBLData, setSelectedBBLData] = useState<DataEntry[]>([]);
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

  const getDataForBBL = (bbl: string): DataEntry => {
    const ll84Entry = dataLL84.find(entry => entry.BBL === bbl) || {};
    const ll87Entry = dataLL87.find(entry => entry.BBL === bbl) || {};
    const ll97Entry = dataLL97.find(entry => entry.BBL === bbl) || {};

    return { BBL: bbl, ...ll84Entry, ...ll87Entry, ...ll97Entry };
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
        <button onClick={handleRetrieveData}>Retrieve Data</button>
      </div>

      <div>
        <h2>Selected BBL Data:</h2>
        {selectedBBLData.length > 0 ? (
          selectedBBLData.map((data, index) => (
            <pre key={index}>{JSON.stringify(data, null, 2)}</pre>
          ))
        ) : (
          <p>No data found for these BBLs.</p>
        )}
      </div>
    </div>
  );
}

export default BBLGrab;