// MainPage.tsx
import React, { useState } from 'react';
import CSVFetcher from './csvfetcher.tsx';

function MainPage(): JSX.Element {
  const [inputBBLs, setInputBBLs] = useState<string[]>([]);

  const handleBBLInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const bbls = value.split(/[\n,]+/).map((bbl: string) => bbl.trim()).filter(Boolean);
    setInputBBLs(bbls);
  };

  return (
    <div className='data-page'>
      <div>
        <label htmlFor="bblInput">Enter BBLs:</label>
        <textarea
          id="bblInput"
          value={inputBBLs.join('\n')}
          onChange={handleBBLInputChange}
        />
      </div>
      <div>
        {/* Pass inputBBLs to CSVFetcher component */}
        <CSVFetcher bbls={inputBBLs} />
      </div>
    </div>
  );
}

export default MainPage;
