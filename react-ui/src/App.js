import React, { useEffect, useState } from "react";

const App = () => {
  const [scanData, setScanData] = useState([]);
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("From interval");
      fetch("/api/scan")
        .then((res) => res.json())
        .then((data) => setScanData(data))
        .catch((error) => console.log(error));
    }, 1000);
    console.log("FROM USE EFFECT");
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <h1>Scan list:</h1>
      <ul>
        {scanData.map((scan) => (
          <li key={scan.name}>
            {scan.name} - {scan.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
