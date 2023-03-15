import React, { useEffect, useState } from 'react';

const App = () => {
  const [scanData, setScanData] = useState([]);

  useEffect(() => {
    fetch('/api/scan')
      .then(res => res.json())
      .then(data => setScanData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Scan list:</h1>
      <ul>
        {scanData.map(scan => (
          <li key={scan.name}>
            {scan.name} - {scan.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;